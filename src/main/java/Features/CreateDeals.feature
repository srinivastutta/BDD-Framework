@CRM
Feature: Free CRM CreateDeals feature
@RegressionTest
Scenario: Free CRM Create Deals Test scenario

Given user is on login page
When title of login page is free crm
Then user enters username and password
| username | password |
| srinivas.tutta@gmail.com | Vedik2015 |

Then user clicks on login button
Then user is on homepage
Then user clicks on deals
Then user clicks on New button
Then user enter deal details
| Title | Probability | Commision |
| Deal1 | 10 | 20 |
| Deal2 | 20 | 40 |
| Deal3 | 30 | 60 |


Then close the browser

