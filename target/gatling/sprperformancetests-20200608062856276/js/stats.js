var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "332",
        "ok": "332",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "918",
        "ok": "918",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "414",
        "ok": "414",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "122",
        "ok": "122",
        "ko": "-"
    },
    "percentiles1": {
        "total": "389",
        "ok": "389",
        "ko": "-"
    },
    "percentiles2": {
        "total": "402",
        "ok": "402",
        "ko": "-"
    },
    "percentiles3": {
        "total": "501",
        "ok": "501",
        "ko": "-"
    },
    "percentiles4": {
        "total": "835",
        "ok": "835",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
},
contents: {
"req_req-reply-testi-66d00": {
        type: "REQUEST",
        name: "req reply testing",
path: "req reply testing",
pathFormatted: "req_req-reply-testi-66d00",
stats: {
    "name": "req reply testing",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "332",
        "ok": "332",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "918",
        "ok": "918",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "414",
        "ok": "414",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "122",
        "ok": "122",
        "ko": "-"
    },
    "percentiles1": {
        "total": "389",
        "ok": "389",
        "ko": "-"
    },
    "percentiles2": {
        "total": "402",
        "ok": "402",
        "ko": "-"
    },
    "percentiles3": {
        "total": "501",
        "ok": "501",
        "ko": "-"
    },
    "percentiles4": {
        "total": "835",
        "ok": "835",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
