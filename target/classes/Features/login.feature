Feature: Free CRM login feature

#without Example Keyword
#Scenario: Free CRM login Test scenario
#
#Given user is on login page
#When title of login page is free crm
#Then user enters "srinivas.tutta@gmail.com" and "Vedik2015"
#Then user clicks on login button
#Then user is on homepage


#with Examples Keyword // to achieve the datadriven approach, we have to use Scenario Outline with Examples Keyword
Scenario Outline: Free CRM login Test scenario

Given user is on login page
When title of login page is free crm
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on homepage
Then close the browser

Examples:
| username | password |
| srinivas.tutta@gmail.com | Vedik2015 |
| naveenk | test@123 |
