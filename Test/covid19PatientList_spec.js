

const loginpage = require('../Test/POM/logInPage');
const COVID19PatientList = require('../Test/POM/COVID19patientList');
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

    it('Navigates to COVID19 Patient List', async function () {

        await browser.driver.sleep(5000);
        misc.gotoCOVID19PatientList();
        await browser.driver.sleep(5000);
        return await element(by.css('.table-header')).getText().then(async function (covidpatienttable) {
            expect(covidpatienttable).toContain('COVID-19 Patient List');
            await browser.driver.sleep(5000);
        });
        

    })

    it('Verify that Patient List Table has the correct columns', async function () {

        await browser.driver.sleep(5000);
       
        let columnNames = COVID19PatientList.columnNames;
        let columns = COVID19PatientList.columns;

        expect(columns[0].getText()).toContain(columnNames[0]);
        columns[0].click();
        expect(columns[1].getText()).toContain(columnNames[1]);
        columns[1].click();
        expect(columns[2].getText()).toContain(columnNames[2]);
        
        expect(columns[3].getText()).toContain(columnNames[3]);
        columns[3].click();
        expect(columns[4].getText()).toContain(columnNames[4]);
        columns[4].click();
        expect(columns[5].getText()).toContain(columnNames[5]);
  
        expect(columns[6].getText()).toContain(columnNames[6]);
        columns[6].click();
        expect(columns[7].getText()).toContain(columnNames[7]);
        columns[7].click();
        expect(columns[8].getText()).toContain(columnNames[8]);
        
        expect(columns[9].getText()).toContain(columnNames[9]);
        columns[9].click();
        expect(columns[10].getText()).toContain(columnNames[10]);
        columns[10].click();
        expect(columns[11].getText()).toContain(columnNames[11]);
        columns[11].click();
        expect(columns[12].getText()).toContain(columnNames[12]);
        columns[12].click();
        expect(columns[13].getText()).toContain(columnNames[13]);
        columns[13].click();
        expect(columns[14].getText()).toContain(columnNames[14]);
        columns[14].click();
        expect(columns[15].getText()).toContain(columnNames[15]);

        expect(columns[16].getText()).toContain(columnNames[16]);

      
        await browser.driver.sleep(5000);

    });

    it('Filters by suspected', async function () {

        await browser.driver.sleep(10000);
        COVID19PatientList.filterBySuspected();
        await browser.driver.sleep(10000);
        expect(element(by.css('div.card-header > [_ngcontent-c36]')).getText()).toContain("Suspected");

        browser.actions().mouseMove(element(by.css('.ui-table-summary'))).perform();
        await browser.driver.sleep(10000);



    })

    it('Displays number of patients per Department', async function () {

        await browser.driver.sleep(10000);
        COVID19PatientList.displayNumberOfPatientsByDept();
        await browser.driver.sleep(5000);
        expect(element(by.css('#covidtestinglocationsdetails')).isDisplayed()).toBeTruthy();

        browser.actions().mouseMove(element(by.css('.ui-table-summary'))).perform();
        await browser.driver.sleep(10000);


    })


    it('Filters by positive', async function () {

        browser.refresh();
        await browser.driver.sleep(10000);
        COVID19PatientList.filterByPositive();
        await browser.driver.sleep(5000);
        expect(element(by.css('div.card-header > [_ngcontent-c11]')).getText()).toContain("Positive");


    })


    it('Resets Filters', async function () {

        await browser.driver.sleep(10000);
        COVID19PatientList.clearFilters();
        await browser.driver.sleep(10000);
 


    })

    it('Logs out user from Patienteer Web App', async function () {

        await browser.driver.sleep(10000);
        misc.logoutuser();
        await browser.driver.sleep(10000);
        expect(await browser.driver.getCurrentUrl()).toContain("login");


    })



});