$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BDDotDoctorLinkTest.feature");
formatter.feature({
  "line": 2,
  "name": "GitHub Repo Test",
  "description": "As a GitHub Lover,\r\nI want to check my friends\u0027 GitHub repositories.",
  "id": "github-repo-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Selecting different github_usernames and checking a specific repository there",
  "description": "",
  "id": "github-repo-test;selecting-different-github-usernames-and-checking-a-specific-repository-there",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login to my github account with \"ictergurutest\" and \"Dh@k@1000\" as my username and password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I goto my friends\u0027 github accounts using their \"\u003cgithub_usernames\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I select the available repositories",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the existance of the \"\u003cexpected_repository\u003e\" in the github account",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "github-repo-test;selecting-different-github-usernames-and-checking-a-specific-repository-there;",
  "rows": [
    {
      "cells": [
        "github_usernames",
        "expected_repository"
      ],
      "line": 16,
      "id": "github-repo-test;selecting-different-github-usernames-and-checking-a-specific-repository-there;;1"
    },
    {
      "cells": [
        "icterguru",
        "WebAutomation1001"
      ],
      "line": 17,
      "id": "github-repo-test;selecting-different-github-usernames-and-checking-a-specific-repository-there;;2"
    },
    {
      "cells": [
        "icterguru",
        "WebAutomation1004"
      ],
      "line": 18,
      "id": "github-repo-test;selecting-different-github-usernames-and-checking-a-specific-repository-there;;3"
    },
    {
      "cells": [
        "icterguru",
        "WebAutomation1005"
      ],
      "line": 19,
      "id": "github-repo-test;selecting-different-github-usernames-and-checking-a-specific-repository-there;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2746221315,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I launch the GitHub home page url",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "Selecting different github_usernames and checking a specific repository there",
  "description": "",
  "id": "github-repo-test;selecting-different-github-usernames-and-checking-a-specific-repository-there;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I login to my github account with \"ictergurutest\" and \"Dh@k@1000\" as my username and password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I goto my friends\u0027 github accounts using their \"icterguru\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I select the available repositories",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the existance of the \"WebAutomation1001\" in the github account",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1113816669,
  "status": "passed"
});
formatter.before({
  "duration": 1337255436,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I launch the GitHub home page url",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "Selecting different github_usernames and checking a specific repository there",
  "description": "",
  "id": "github-repo-test;selecting-different-github-usernames-and-checking-a-specific-repository-there;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I login to my github account with \"ictergurutest\" and \"Dh@k@1000\" as my username and password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I goto my friends\u0027 github accounts using their \"icterguru\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I select the available repositories",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the existance of the \"WebAutomation1004\" in the github account",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 998122153,
  "status": "passed"
});
formatter.before({
  "duration": 1157882031,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I launch the GitHub home page url",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 19,
  "name": "Selecting different github_usernames and checking a specific repository there",
  "description": "",
  "id": "github-repo-test;selecting-different-github-usernames-and-checking-a-specific-repository-there;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I login to my github account with \"ictergurutest\" and \"Dh@k@1000\" as my username and password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I goto my friends\u0027 github accounts using their \"icterguru\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I select the available repositories",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the existance of the \"WebAutomation1005\" in the github account",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 846574879,
  "status": "passed"
});
formatter.uri("features/BDDotHospitalLinkTests.feature");
formatter.feature({
  "line": 2,
  "name": "BDDOT Homepage Checkup",
  "description": "As a BDDOT tester,\r\nI want to test the landing homeage of the web application",
  "id": "bddot-homepage-checkup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 1179294991,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I launch the BDDOT home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_BDDOT_home_page()"
});
formatter.result({
  "duration": 4888261526,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2014861432,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Terms Link test",
  "description": "",
  "id": "bddot-homepage-checkup;terms-link-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I click on the Terms link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I see the Terms page",
  "keyword": "Then "
});
formatter.match({
  "location": "BDDotHospitalTests.i_click_on_the_Terms_link()"
});
formatter.result({
  "duration": 111885040,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Terms\"}\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 101 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027MININT-3R3M1CE\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\mhossa12\\AppData\\Local\\Temp\\scoped_dir10228_23107}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d76.0.3809.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: c4ef20deeeb6cba15c244bfa035edc7f\n*** Element info: {Using\u003dlink text, value\u003dTerms}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat step_definitions.BDDotHospitalTests.i_click_on_the_Terms_link(BDDotHospitalTests.java:38)\r\n\tat ✽.When I click on the Terms link(features/BDDotHospitalLinkTests.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BDDotHospitalTests.i_see_the_Terms_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 945529705,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Selecting different footer links and checking the corresponding page",
  "description": "",
  "id": "bddot-homepage-checkup;selecting-different-footer-links-and-checking-the-corresponding-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I select \"\u003cfooterLink_text\u003e\" link in the Google footer",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I verify the selected Google page by the existence of the \"\u003clinkedPage_text\u003e\" text",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "bddot-homepage-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;",
  "rows": [
    {
      "cells": [
        "footerLink_text",
        "linkedPage_text"
      ],
      "line": 20,
      "id": "bddot-homepage-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;1"
    },
    {
      "cells": [
        "Privacy",
        "Welcome to the Google Privacy Policy"
      ],
      "line": 21,
      "id": "bddot-homepage-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;2"
    },
    {
      "cells": [
        "Terms",
        "Google Terms of Service"
      ],
      "line": 22,
      "id": "bddot-homepage-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1157164393,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I launch the BDDOT home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_BDDOT_home_page()"
});
formatter.result({
  "duration": 4983130987,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2027605256,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Selecting different footer links and checking the corresponding page",
  "description": "",
  "id": "bddot-homepage-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I select \"Privacy\" link in the Google footer",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I verify the selected Google page by the existence of the \"Welcome to the Google Privacy Policy\" text",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Privacy",
      "offset": 10
    }
  ],
  "location": "BDDotHospitalTests.i_select_link_in_the_Google_footer(String)"
});
formatter.result({
  "duration": 89802888,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Privacy\"}\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 84 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027MININT-3R3M1CE\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\mhossa12\\AppData\\Local\\Temp\\scoped_dir12040_12085}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d76.0.3809.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ae0624c5add5fb831c367846cd72def1\n*** Element info: {Using\u003dlink text, value\u003dPrivacy}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat step_definitions.BDDotHospitalTests.i_select_link_in_the_Google_footer(BDDotHospitalTests.java:52)\r\n\tat ✽.When I select \"Privacy\" link in the Google footer(features/BDDotHospitalLinkTests.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to the Google Privacy Policy",
      "offset": 59
    }
  ],
  "location": "BDDotHospitalTests.i_verify_the_selected_Google_page_by_the_existence_of_the_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 970314907,
  "status": "passed"
});
formatter.before({
  "duration": 1189698280,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I launch the BDDOT home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_BDDOT_home_page()"
});
formatter.result({
  "duration": 5135952603,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2028827868,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Selecting different footer links and checking the corresponding page",
  "description": "",
  "id": "bddot-homepage-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I select \"Terms\" link in the Google footer",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I verify the selected Google page by the existence of the \"Google Terms of Service\" text",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Terms",
      "offset": 10
    }
  ],
  "location": "BDDotHospitalTests.i_select_link_in_the_Google_footer(String)"
});
formatter.result({
  "duration": 75597101,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Terms\"}\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 75 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027MININT-3R3M1CE\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\mhossa12\\AppData\\Local\\Temp\\scoped_dir17748_30248}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d76.0.3809.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 21ffa548f7a623d502c79316866d3e2e\n*** Element info: {Using\u003dlink text, value\u003dTerms}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat step_definitions.BDDotHospitalTests.i_select_link_in_the_Google_footer(BDDotHospitalTests.java:52)\r\n\tat ✽.When I select \"Terms\" link in the Google footer(features/BDDotHospitalLinkTests.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google Terms of Service",
      "offset": 59
    }
  ],
  "location": "BDDotHospitalTests.i_verify_the_selected_Google_page_by_the_existence_of_the_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 985096282,
  "status": "passed"
});
});