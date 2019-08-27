$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Selenium/Workspace/CucumberFramework/src/main/java/Features/CreateContacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM CreateContacts feature",
  "description": "",
  "id": "free-crm-createcontacts-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create Contacts Test scenario",
  "description": "",
  "id": "free-crm-createcontacts-feature;free-crm-create-contacts-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter Contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cdepartment\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "free-crm-createcontacts-feature;free-crm-create-contacts-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "department"
      ],
      "line": 19,
      "id": "free-crm-createcontacts-feature;free-crm-create-contacts-test-scenario;;1"
    },
    {
      "cells": [
        "srinivas.tutta@gmail.com",
        "Vedik2015",
        "Vedik",
        "Tutta",
        "QA"
      ],
      "line": 20,
      "id": "free-crm-createcontacts-feature;free-crm-create-contacts-test-scenario;;2"
    },
    {
      "cells": [
        "srinivas.tutta@gmail.com",
        "Vedik2015",
        "Manvik",
        "Tutta",
        "Dev"
      ],
      "line": 21,
      "id": "free-crm-createcontacts-feature;free-crm-create-contacts-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Free CRM Create Contacts Test scenario",
  "description": "",
  "id": "free-crm-createcontacts-feature;free-crm-create-contacts-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"srinivas.tutta@gmail.com\" and \"Vedik2015\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter Contact details \"Vedik\" and \"Tutta\" and \"QA\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_login_page()"
});
formatter.result({
  "duration": 15626637976,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 16371578764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "srinivas.tutta@gmail.com",
      "offset": 13
    },
    {
      "val": "Vedik2015",
      "offset": 44
    }
  ],
  "location": "LoginStepDef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 644080927,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 102197435,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 17715916,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Contacts()"
});
formatter.result({
  "duration": 2837690901,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 295683522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vedik",
      "offset": 28
    },
    {
      "val": "Tutta",
      "offset": 40
    },
    {
      "val": "QA",
      "offset": 52
    }
  ],
  "location": "LoginStepDef.user_enter_Contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 2271144541,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 168797001,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.close_the_broser()"
});
formatter.result({
  "duration": 60144,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Free CRM Create Contacts Test scenario",
  "description": "",
  "id": "free-crm-createcontacts-feature;free-crm-create-contacts-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"srinivas.tutta@gmail.com\" and \"Vedik2015\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter Contact details \"Manvik\" and \"Tutta\" and \"Dev\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_login_page()"
});
formatter.result({
  "duration": 15411956842,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 8325291097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "srinivas.tutta@gmail.com",
      "offset": 13
    },
    {
      "val": "Vedik2015",
      "offset": 44
    }
  ],
  "location": "LoginStepDef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 603498254,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 87859897,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 15590808,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Contacts()"
});
formatter.result({
  "duration": 2779971141,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 387347949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manvik",
      "offset": 28
    },
    {
      "val": "Tutta",
      "offset": 41
    },
    {
      "val": "Dev",
      "offset": 53
    }
  ],
  "location": "LoginStepDef.user_enter_Contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 2113222396,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 205520140,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.close_the_broser()"
});
formatter.result({
  "duration": 34955,
  "status": "passed"
});
});