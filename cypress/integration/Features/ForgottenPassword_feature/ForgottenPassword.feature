@idmngmt
Feature: Forgotten password Trainsmart
	I want to verify Forgotten password functionality
	
	Scenario: FP001 Forgotten password link activates forgot pass
		Given That user is on Login page
		When user navigate to Forgotten password link
		Then forgotten password pop up is shown

	Scenario: FP002 Submiting Forgotten password link activates confirmation dialog
		Given That user is on Login page
		When user navigate to Forgotten password link
		And submit forgotten password pop up with "email@example.com"
		Then user is on confirmation pop up page

	Scenario: FP003 Closing confirmation Forgotten password dialog redirect user to login page 
		Given That user is on Login page
		When user navigate to Forgotten password link
		And submit forgotten password pop up with "email@example.com"
		Then user is on confirmation pop up page
		And confirmation dialog can be closed

