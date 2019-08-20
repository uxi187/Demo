@nav
Feature: Navigation Trainsmart
	I want to verify Navigation page functionality


	Scenario Outline: NAV001 Header top line navigation
		Given User is on Home page
		When user open header link "<link>" by navigating to external button link "<btn>"
		Then external link "<btn>" with "<pagespecifics>" is open from header

		Examples:
			| btn     | link                                                                    | pagespecifics |
			| Support | https://trainsmartjira.atlassian.net/servicedesk/customer/portal/1      | Service Desk  |
			| Shop    | https://www.trainsmart.com/collections/online-coaching/products/1-month | 1 Month       |


	Scenario: NAV002 Global application navigation
		Given User is on Home page
		Then navigating to link redirect user to page
			| button           | link                           |
			| Client Name      | /profile                       |
			| Coach            | /coach                         |
			| Add a Workout    | /workout/manual                |
			| Trainsmart Logo  | /home                          |
			| My Training      | /training                      |
			| My Goals         | /goals/fitness                 |
			| My Profile       | /profile                       |
			| Physical Details | /physical-detail/health-screen |
			| Messages         | /message/last                  |
			| Contacts         | /contacts/friends              |
			| Settings         | /setting/personal-info         |
			| Home             | /home                          |
			| Logout           | /login                         |
		Given Coach user is on Home page
		Then navigating to link redirect user to page
			| button      | link              |
			| Coach       | /dashboard/groups |


	@1
	Scenario Outline: NAV003 Footer navigation
		Given User is on Home page
		When user open footer link "<link>" by navigating to external button link "<btn>"
		Then external link "<btn>" with "<redirectedPageUrl>" is open from footer

		Examples:
			| btn            | link                                                               | redirectedPageUrl             |
			| Privacy Policy | https://www.trainsmart.com/legal-stuff/privacy-policy/             | pages/privacy-policy          |
			| Terms of Use   | https://www.trainsmart.com/legal-stuff/website-terms-of-use/       | pages/website-terms-of-use    |
			| Support        | https://trainsmartjira.atlassian.net/servicedesk/customer/portal/1 | servicedesk/customer/portal/1 |


	Scenario: NAV004 Footer Logo navigation
		Given User is on Home page
		When user open footer logo link "http://www.trainsmart.com"
		Then external link "www.trainsmart.com" is open

