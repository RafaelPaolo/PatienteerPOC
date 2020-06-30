Introduction:
This is a simple Protractor framework. Java script language basics is required to understand the code.
The goal of this set up is to perform automated User action test to the Patienteer Web Application to run in latest chrome browser.
Mostly but not limitted Navigation testing on the Patienteer UI like Log In/Log Out, Opening Patient list module, test filter views, etc.
(The Proof Of Concept started with Covid19 Patient List module of the Patienteer web application.)

The framework consists Mainly with the Page Object Model (POM) which contains elements and methods for a specific Module or page, configuration file "conf.js", test specs under Test folder, package.json for npm installations and npm scripts.

Getting started:
The Protractor framework is set up and developed using Visual Studio Code. The npm installation was done specifically to the workspace only not globally.

1. Set up Visual studio code. (Refer to https://www.protractortest.org/ )
2. Create a blank folder for your workspace
3. Clone the repository to your workspace.
4. Update chrome by opening a terminal in VSC (run in terminal inside main directory: node node_modules/protractor/bin/webdriver-manager update). This will update the chrome version used by your workspace.

Build and Test:
1.To run test you may open terminal then "npm test testSpectoTest" (ex. npm test covid19PatientListTest). 
2.The NPM SCRIPTS are set in package.json file so that you can just click the test run you wish to execute. This will directly run test in terminal and you must press any key to close the terminal when finished executing.
3.Test reporter summarizes the test run. You may view this by opening ProtractorTestReport.html in a browser (If a step fails it should show a screenshot)

Debugging:
Debugging is a bit primitive for Protractor. You may refer to https://www.protractortest.org/ 

-I have set debugger method for VSC. You will see the set up in .vscode folder
-Create a break point to the spec file you wish to debug. On "Run" or debug section of VSC, run the debug. It should pause when the breakpoint is reached.
-Just note that when debugging you'll need to comment out the other test specs temporarily in conf.js (ex. If debugging for COVID19 Patient List test only, comment out TOCList test or others in conf.js( I have set them under "suites")

Data Accuracy test:
Global variables are set inside conf.js under OnPrepare
set global.forDataAccuracyTest to TRUE if for Data Accuracy testing then specify the expected record count 
of preloaded data on global.TOTALexpectedDisplayedDataCount.

Developers may modify or add variables if needed.

