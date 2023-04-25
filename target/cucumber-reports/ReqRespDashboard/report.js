$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/techm/ReqResp/features/FileComparisons.feature");
formatter.feature({
  "name": "Validating APIs",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FileCompare"
    }
  ]
});
formatter.scenario({
  "name": "verify file contains correct output",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FileCompare"
    },
    {
      "name": "@PositionReportFileCompare"
    }
  ]
});
formatter.step({
  "name": "Files \"InstrumentDetails.csv\" and \"PositionDetails.csv\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.files_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processed in the system",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.processed_in_the_system()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"PositionReport.csv\" file",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/com/techm/ReqResp/features/GUITests.feature");
formatter.feature({
  "name": "Validating APIs",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@GUITests"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify if User is able to click on various get options",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HomePageGetOptions"
    }
  ]
});
formatter.step({
  "name": "\"Chrome\" browser is opened",
  "keyword": "Given "
});
formatter.step({
  "name": "user opens application url in the browser",
  "keyword": "When "
});
formatter.step({
  "name": "user click on \"\u003cname\u003e\" with \"GET\" http request",
  "keyword": "Then "
});
formatter.step({
  "name": "users sees \"\u003cRequest\u003e\" and \"\u003cResponseCode\u003e\" and \"\u003cResponse\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "Request",
        "ResponseCode",
        "Response"
      ]
    },
    {
      "cells": [
        "List users",
        "/api/users?page\u003d2",
        "200",
        "total,12"
      ]
    },
    {
      "cells": [
        "List \u003cresource\u003e",
        "/api/unknown",
        "200",
        "total,12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if User is able to click on various get options",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GUITests"
    },
    {
      "name": "@HomePageGetOptions"
    }
  ]
});
formatter.step({
  "name": "\"Chrome\" browser is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.browser_is_opened(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens application url in the browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_opens_application_url_in_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on \"List users\" with \"GET\" http request",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_on_with_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users sees \"/api/users?page\u003d2\" and \"200\" and \"total,12\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.users_sees_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if User is able to click on various get options",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GUITests"
    },
    {
      "name": "@HomePageGetOptions"
    }
  ]
});
formatter.step({
  "name": "\"Chrome\" browser is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.browser_is_opened(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens application url in the browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_opens_application_url_in_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on \"List \u003cresource\u003e\" with \"GET\" http request",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_on_with_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users sees \"/api/unknown\" and \"200\" and \"total,12\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.users_sees_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify Support button is displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@GUITests"
    },
    {
      "name": "@HomePageSupportButton"
    }
  ]
});
formatter.step({
  "name": "\"Chrome\" browser is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.browser_is_opened(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens application url in the browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_opens_application_url_in_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on SupportReqResp button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_on_SupportReqResp_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees one time support option",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_sees_one_time_support_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sees monthlysupport option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.sees_monthlysupport_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sees SupportReqResp button to upgrade",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.sees_SupportReqResp_button_to_upgrade()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/com/techm/ReqResp/features/RestApiTests.feature");
formatter.feature({
  "name": "Validating APIs",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@RestApiTests"
    }
  ]
});
formatter.scenario({
  "name": "testRestAPI PostMethod",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestApiTests"
    },
    {
      "name": "@RestApiPost"
    }
  ]
});
formatter.step({
  "name": "AddUserPayload",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.adduserpayload()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"post\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_calls_http_request(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 201",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_API_call_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"name\" in response body is \"morpheus\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "testRestAPI PostMethod",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestApiTests"
    },
    {
      "name": "@RestApiGet"
    }
  ]
});
formatter.step({
  "name": "PathParameter 2",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.pathparameter(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"get\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_calls_http_request(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_API_call_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"id\" in response body is \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});