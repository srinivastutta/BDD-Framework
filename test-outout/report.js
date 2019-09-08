$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Selenium/Workspace/CucumberFramework/src/main/java/Features/CreateContacts.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM CreateContacts feature",
  "description": "",
  "id": "free-crm-createcontacts-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CRM"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Free CRM Create Contacts Test scenario",
  "description": "",
  "id": "free-crm-createcontacts-feature;free-crm-create-contacts-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enter Contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cdepartment\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
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
      "line": 20,
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
      "line": 21,
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
      "line": 22,
      "id": "free-crm-createcontacts-feature;free-crm-create-contacts-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Free CRM Create Contacts Test scenario",
  "description": "",
  "id": "free-crm-createcontacts-feature;free-crm-create-contacts-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CRM"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"srinivas.tutta@gmail.com\" and \"Vedik2015\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enter Contact details \"Vedik\" and \"Tutta\" and \"QA\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateContactsStepDef.user_is_on_login_page()"
});
formatter.result({
  "duration": 13231848550,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 8865263328,
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
  "location": "CreateContactsStepDef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 600320874,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 90079078,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 17430100,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.user_clicks_on_Contacts()"
});
formatter.result({
  "duration": 3163996745,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 336770998,
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
  "location": "CreateContactsStepDef.user_enter_Contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 1983899764,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 217543912,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.close_the_broser()"
});
formatter.result({
  "duration": 886002407,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Free CRM Create Contacts Test scenario",
  "description": "",
  "id": "free-crm-createcontacts-feature;free-crm-create-contacts-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CRM"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"srinivas.tutta@gmail.com\" and \"Vedik2015\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enter Contact details \"Manvik\" and \"Tutta\" and \"Dev\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateContactsStepDef.user_is_on_login_page()"
});
formatter.result({
  "duration": 10647638709,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 9237156694,
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
  "location": "CreateContactsStepDef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 623213848,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 92314707,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 19605072,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.user_clicks_on_Contacts()"
});
formatter.result({
  "duration": 2723547316,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 319768593,
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
  "location": "CreateContactsStepDef.user_enter_Contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 2103846528,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 229950656,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepDef.close_the_broser()"
});
formatter.result({
  "duration": 841036379,
  "status": "passed"
});
});