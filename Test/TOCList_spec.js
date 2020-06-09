

const loginpage = require('../Test/POM/logInPage');
//const COVID19PatientList = require('../Test/POM/COVID19patientList');
const misc = require('../Test/POM/misc');
const TOCflowList = require('../Test/POM/TOCflowList');
const { browser, element } = require('protractor');



describe('Navigate to TOC List of Patienteer Web App : ', () => {

    var originalTimeout;

    beforeEach(function () {
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

    it('Navigates to TOC List', async () => {

        await browser.driver.sleep(5000);
        misc.gotoTOCList();
        await browser.driver.sleep(5000);
        // return await browser.driver.getCurrentUrl().then(async function (tocListpageURL) {
        //     expect(tocListpageURL).toContain('tocflowlist');
        //     await browser.driver.sleep(5000);
        // });
        return await element(by.css('div.radio-filter.col-md-2.pr-1 > select.custom-select.ng-untouched.ng-pristine.ng-valid')).isPresent().then(async function (tocListToggle) {
            expect(tocListToggle).toBeTruthy();
            await browser.driver.sleep(5000);
        });

    })

    it('Loads list according to filter criteria', async () => {

        let tobeUnchecked = 'ACE IP';
        let tobeChecked = 'Duppas 1';
        await browser.driver.sleep(5000);
        TOCflowList.wardDropdown.click();
        await browser.driver.sleep(2000);
        TOCflowList.tickFromWardDropdown(tobeUnchecked);
        TOCflowList.tickFromWardDropdown(tobeChecked);
        TOCflowList.wardDropdown.click();
        TOCflowList.loadList();
        await browser.driver.sleep(5000);
        browser.actions().mouseMove(element(by.css('.ui-table-summary'))).perform();
        await browser.driver.sleep(10000);

    });


    it('Toggles to SitRep service', async () => {

        await browser.driver.sleep(5000);
        TOCflowList.toggleToSitRep();
        await browser.driver.sleep(5000);


        let columnNames = TOCflowList.SitRepcolumnNames;
        let columns = TOCflowList.siteRepColumns;

        expect(columns[0].getText()).toContain(columnNames[0]);
        expect(columns[1].getText()).toContain(columnNames[1]);
        expect(columns[2].getText()).toContain(columnNames[2]);
        expect(columns[3].getText()).toContain(columnNames[3]);
        expect(columns[4].getText()).toContain(columnNames[4]);
        expect(columns[5].getText()).toContain(columnNames[5]);
        expect(columns[6].getText()).toContain(columnNames[6]);
        expect(columns[7].getText()).toContain(columnNames[7]);
        expect(columns[8].getText()).toContain(columnNames[8]);
        expect(columns[9].getText()).toContain(columnNames[9]);
        expect(columns[10].getText()).toContain(columnNames[10]);
        expect(columns[11].getText()).toContain(columnNames[11]);
        expect(columns[12].getText()).toContain(columnNames[12]);
        expect(columns[13].getText()).toContain(columnNames[13]);
        expect(columns[14].getText()).toContain(columnNames[14]);

    })


    it('Toggles to TOC service', async () => {

        await browser.driver.sleep(5000);
        TOCflowList.toggleToTOC();
        await browser.driver.sleep(5000);


        let columnNames = TOCflowList.TOCcolumnNames;
        let columns = TOCflowList.TOCcolumns;

        expect(columns[0].getText()).toContain(columnNames[0]);
        expect(columns[1].getText()).toContain(columnNames[1]);
        expect(columns[2].getText()).toContain(columnNames[2]);
        expect(columns[3].getText()).toContain(columnNames[3]);
        expect(columns[4].getText()).toContain(columnNames[4]);
        expect(columns[5].getText()).toContain(columnNames[5]);
        expect(columns[6].getText()).toContain(columnNames[6]);
        expect(columns[7].getText()).toContain(columnNames[7]);
        expect(columns[8].getText()).toContain(columnNames[8]);
        expect(columns[9].getText()).toContain(columnNames[9]);
        expect(columns[10].getText()).toContain(columnNames[10]);
        expect(columns[11].getText()).toContain(columnNames[11]);
        expect(columns[12].getText()).toContain(columnNames[12]);
        expect(columns[13].getText()).toContain(columnNames[13]);
        expect(columns[14].getText()).toContain(columnNames[14]);
        expect(columns[15].getText()).toContain(columnNames[15]);

    })



    it('Logs out user from Patienteer Web App', async function () {

        await browser.driver.sleep(10000);
        misc.logoutuser();
        await browser.driver.sleep(10000);
        expect(await browser.driver.getCurrentUrl()).toContain("login");


    })



});