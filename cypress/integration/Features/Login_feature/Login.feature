@idmngmt
Feature: Login Trainsmart
	I want to verify Login page functionality


	Scenario: Login001 Verify that User is on Login screen
		Given That user is on Login page
		Then fields Email and Password are visible
		And Forgotten password link is visible
		And Remember me button is selected by default
		And Register Free link is visible
		And Social login buttons are visible
			| links               |
			| Login with Facebook |
			| Login with Twitter  |

	Scenario Outline: Scenario Outline name:Login002 Verify that email format is ok
		Given That user is on Login page
		When user enter invalid email "<emails>"
		Then email validation is triggered

		Examples:
			| emails |
			| 1      |
			| 200    |

	Scenario: Login003 Verify Social login action activates API to login
		Given That user is on Login page
		When user click on link "Login with Facebook"
		Then Facebook API is triggered
		When user click on link "Login with Twitter"
		Then Twitter API is triggered

	Scenario: Login004 Login button fails with invalid password
		Given That user is on Login page
		When user submit login form with invalid password
		Then login is unsuccessful with toaster message "Password incorrect"

	Scenario: Login005 Login button fails with unregistered email
		Given That user is on Login page
		When user submit login form with invalid username
		Then login is unsuccessful with toaster message "Unknown email. Please register"

	Scenario: Login006 Login button success with valid credentials
		Given That user is on Login page
		When user submit login form with valid credentials
		Then user is successfully logged in

