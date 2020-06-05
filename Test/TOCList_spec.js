

const loginpage = require('../Test/POM/logInPage');
//const COVID19PatientList = require('../Test/POM/COVID19patientList');
const misc = require('../Test/POM/misc');
const { browser, element } = require('protractor');



describe('Navigate to Covid19 Patient List of Patienteer Web App : ', () => {

    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    it('Opens Patienteer Web App Login page', async function () {

        browser.driver.manage().window().maximize();
        await browser.driver.get('http://52.147.45.189:9008/login');
        //browser.driver.ignoreSynchronization = true;

        await browser.driver.sleep(10000);
        expect(await browser.driver.getTitle()).toEqual("Patienteer Web App");
        await browser.driver.sleep(10000);


    });

    it('Logs In registered User to Patienteer Web App', async function () {

        loginpage.enterusername('troy.haddon');
        loginpage.enterpassword('password');
        loginpage.clicksignin();


        await browser.driver.sleep(10000);
        browser.ignoreSynchronization = true;


        return await element(by.id('userDropDown')).getText().then(function (loggedInUser) {
            expect(loggedInUser).toContain('Troy.Haddon');
        });
    });

    it('Navigates to TOC List', async function () {

        await browser.driver.sleep(5000);
        misc.gotoTOCList();
        await browser.driver.sleep(5000);
        return await browser.driver.getCurrentUrl().then(async function (tocListpageURL) {
            expect(tocListpageURL).toContain('tocflowlist');
            await browser.driver.sleep(5000);
        });
        

    })

 

    it('Logs out user from Patienteer Web App', async function () {

        await browser.driver.sleep(10000);
        misc.logoutuser();
        await browser.driver.sleep(10000);
        expect(await browser.driver.getCurrentUrl()).toContain("login");


    })



});