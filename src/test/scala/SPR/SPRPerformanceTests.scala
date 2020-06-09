package SPR

import java.nio.charset.StandardCharsets
import java.nio.file.{Files, Paths}
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.jms.Predef._
import io.gatling.jms.protocol.JmsProtocolBuilder
import javax.jms._
import org.apache.activemq.ActiveMQConnectionFactory

import scala.concurrent.duration._

class SPRPerformanceTests extends Simulation {
  val arg = System.getProperty("arg", "test")
  var url = ""
  arg match {
    case "stage" =>
      url = "tcp://192.168.66.196:61616"
    case "test" =>
      url = "tcp://192.168.66.194:61616"
  }

  val connectionFactory = new ActiveMQConnectionFactory("karaf", "karaf",url)

  val jmsConfig: JmsProtocolBuilder = jms.connectionFactory(connectionFactory)
    .usePersistentDeliveryMode
    .matchByCorrelationId
  val rightString = new String(Files.readAllBytes(Paths.get("C://SPRScala/ScalaSPR/src/test/scala/SPR/rtdm.xml")), StandardCharsets.UTF_8)
    println(rightString);
  val scn: ScenarioBuilder = scenario("scn")
    .repeat(1) {
      exec(jms("req reply testing").requestReply
        .queue("rtdm.sys.in.queue")
        .replyQueue("rtdm.sys.out.queue.wa")
        .textMessage(rightString)
        .property("ReplyTo", "rtdm.sys.out.queue.wa")
        .property("X_VSK_TARGET_BROKER", "ESB_LAN")
        .check(simpleCheck(checkBodyTextCorrect))
      )
    }

  setUp(scn.inject(constantUsersPerSec(1) during(20 seconds)))
    .maxDuration(FiniteDuration.apply(1, TimeUnit.MINUTES))
    .protocols(jmsConfig)

  def checkBodyTextCorrect(m: javax.jms.Message): Boolean = {
    m match {
      case tm: TextMessage => tm.getText.contains("storeContract")
      case _               => false
    }
  }
}
