Feature: Free CRM CreateContacts feature

Scenario Outline: Free CRM Create Contacts Test scenario

Given user is on login page
When title of login page is free crm
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on homepage
Then user clicks on Contacts
Then user clicks on New button
Then user enter Contact details "<firstname>" and "<lastname>" and "<department>"
Then user clicks on Save button


Then close the browser

Examples:
| username | password | firstname | lastname | department |
| srinivas.tutta@gmail.com | Vedik2015 | Vedik | Tutta | QA |
| srinivas.tutta@gmail.com | Vedik2015 | Manvik | Tutta | Dev |

