ReqResp Automation

Framework : BDD Framework

                                                                Phase 1
                                                                
GUI Automation:-
Automated below 2 scenarios:-

• 001A - Home page 

o should list different request types, end points
o should display ‘sample request and response’ details after selecting a specific 
option. 

e.g.: Selecting “GET SINGLE USER NOT FOUND” should show 
o Request “/api/users/23”
o Response 404 {}
o Should contain a button to navigate to support page

001B - Support page
o Should list options for one-time & monthly support
o Should provide Upgrade details
File to be refered-> "..\com\techm\ReqResp\features\GUITests.feature"
Tags to be chosen for execution-> @HomePageSupportButton, @HomePageGetOptions

                                                                Phase 2
                                                                
Created a comparator that compares files with result generated file and print result in the console.
File to be refered-> "..\com\techm\ReqResp\features\FileComparisons.feature"
Tags to be chosen for execution-> @PositionReportFileCompare

                                                                Phase 3
                                                                
Automated the Get and Post REST API methods using rest assured.
File to be refered-> "..\com\techm\ReqResp\features\RestApiTests.feature"
Tags to be chosen for execution-> @RestApiGet,@RestApiPost

Technologies used

Language - Java

Tools
Eclipse IDE
Selenium for UI automation
Rest assured for API automation
CSV for file comparision
Apache Maven for build automation
Cucumber runner to trigger execution

How to run?

Set required option in tags to execute required scenario
Right click on -> TestRunner.java file and select Run as 'Junit Test'
Report:
Html report generated can be seen at this path "..\target\cucumber-reports\ReqRespDashboard\index.html"
