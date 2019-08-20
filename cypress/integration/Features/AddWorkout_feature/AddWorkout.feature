@aw
Feature: Add Workout
	I want to verify Forgotten password functionality


	Scenario Outline:  AW001 Check Add Workout page redirection
		Given user is on Add workout page
		When user click on "Back" button
		Then user is navigated to "#/workout/new" page
		When user click on "<button>" button
		Then user is navigated to "<redirectedLink>" page

		Examples:
			| button                  | redirectedLink   |
			| Add session             | #/workout/manual |
			| Manage apps and devices | #/setting/apps   |


	Scenario: AW002 Add Workout page content is correct
		Given user is on Add workout page
		Then Date field should have todays date
		And Time field should have todays time
		And input fields are visible
			| fields       |
			| Session name |
			| Duration     |
			| Distance     |
		And Mode dropdown is not accesible
		When user select Activity "Cycling"
		Then Mode dropdown is accesible


	Scenario Outline: AW003 Validate Add parameter for system sports
		Given user is on Add workout page
		When user select Activity "<activity>"
		Then add parameters "<parameter1>", "<parameter2>", "<parameter3>", "<parameter4>" will be shown

		Examples:
			| activity  | parameter1 | parameter2 | parameter3 | parameter4 |
			| Aquabike  | Heart rate | Calories   |            |            |
			| Aquathlon | Heart rate | Calories   |            |            |
			| Duathlon  | Heart rate | Calories   |            |            |
			| Swimming  | Heart rate | Calories   |            |            |
			| Triathlon | Heart rate | Calories   |            |            |
			| Weights   | Heart rate | Calories   |            |            |
			| Cycling   | Heart rate | Calories   | Speed      |            |
			| Running   | Heart rate | Calories   | Pace       | Incline    |

	Scenario: AW004 User can add/remove additional sport
		Given user is on Add workout page
		When user select Add sport button
		Then adding new sport form is visible with additional fields
			| label         |
			| Activity      |
			| Mode          |
			| Duration      |
			| Distance      |
			| Intensity     |
			| Time in zone  |
			| Add parameter |
		When user select Remove sport button
		Then adding new sport form is not visible



	Scenario: AW005 Intensity zones based on Heart rate zone 3 model
		Given user set Heart rate zones to Zone level "3"
		When user navigate to Add workout page
		And enter 1h for duration time
		And intensity slider is moved to "<position>"
		Then intensity zone persentage is
			| position | zone1 | zone2 | zone3 |
			| 1        | 100   | 0     | 0     |
			| 2        | 100   | 0     | 0     |
			| 3        | 100   | 0     | 0     |
			| 4        | 100   | 0     | 0     |
			| 5        | 85    | 15    | 0     |
			| 6        | 60    | 40    | 0     |
			| 7        | 40    | 55    | 5     |
			| 8        | 35    | 45    | 20    |
			| 9        | 15    | 50    | 35    |
			| 10       | 15    | 40    | 45    |

