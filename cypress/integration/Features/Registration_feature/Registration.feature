@idmngmt
Feature: Registartion Trainsmart
	I want to verify Registartion page functionality


	Scenario: Registartion001 Verify that User is on Registration screen
		Given That user is on Registration page
		Then fields First name, Last name, Email, Password and Verify password are visible
		And ReCaptcha screen is visible
		And Quit option navigate user back to login page


	Scenario Outline: Registartion002 Register button fail on invalid creds
		Given That user is on Registration page
		When users fill registration form with data "<firstname>" "<lastname>" "<email>" "<password>" "<verifypassword>"
		And submit registration form
		Then error is shown "<error>"

		Examples:
			| firstname | lastname | email            | password | verifypassword | error                      |
			| John      | Doe      | example@john.com | 123456   | 123456         | Captcha validation failed! |
			| John      | Doe      | example@john.com | 123456   | 1234           | Your passwords don't match |
