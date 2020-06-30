

const loginpage = require('../Test/POM/logInPage');
const COVID19PatientList = require('../Test/POM/COVID19patientList');
const misc = require('../Test/POM/misc');
const { browser, element, $$, $ } = require('protractor');



describe('Navigate to Covid19 Patient List of Patienteer Web App : ', () => {

    var originalTimeout;

    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    it('Opens Patienteer Web App Login page', async () => {

        browser.driver.manage().window().maximize();
        //await browser.driver.get('http://52.147.45.189:9008/login');
        await browser.driver.get('http://52.147.45.189:9008');
        //browser.driver.ignoreSynchronization = true;

        await browser.driver.sleep(1000);
        expect(await browser.driver.getTitle()).toEqual("Patienteer Web App");
        await browser.driver.sleep(5000);


    });

    it('Logs In registered User to Patienteer Web App', async () => {


        let userName = 'troy.haddon';
        let psswd = 'password';
        loginpage.enterusername(userName);
        loginpage.enterpassword(psswd);
        loginpage.clicksignin();


        await browser.driver.sleep(5000);
        browser.ignoreSynchronization = true;


        return await element(by.id('userDropDown')).getText().then(function (loggedInUser) {
            expect(loggedInUser).toContain('Troy.Haddon');
        });
    });

    it('Navigates to COVID19 Patient List', async () => {

        //browser.refresh(2000);
        await browser.driver.sleep(2000);
        misc.gotoCOVID19PatientList();
        await browser.driver.sleep(5000);
        return await element(by.css('.table-header')).getText().then(async function (covidpatienttable) {
            expect(covidpatienttable).toContain('COVID-19 Patient List');
            await browser.driver.sleep(5000);
        });


    })

    it('Verify that Patient List Table has the correct columns', async () => {

    
        await browser.driver.sleep(2000);
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


        await browser.driver.sleep(2000);



    });

    it('Filters by suspected', async () => {



        COVID19PatientList.filterBySuspected();
        await browser.driver.sleep(2000);
        expect(COVID19PatientList.labelLocationOfPatientsChart.getText()).toContain("Suspected");

        //this space is for Data count  Accuracy test
        //statement to test Data count Accuracy given a preloaded data is available
        if (forDataAccuracyTest = true) {
            console.log('the Test includes data accuracy testing');

            TOTALexpectedDisplayedDataCount = parseFloat(TOTALexpectedDisplayedDataCount);

            let percentage = element(by.css('g.c3-chart-arc.c3-target.c3-target-Suspected > text')).getText();
            percentage = ((parseFloat((await percentage).replace('%', ''))) / 100);
            let TOTALexpectedSuspectedDataCount = TOTALexpectedDisplayedDataCount * percentage;
            TOTALexpectedSuspectedDataCount = Math.round(TOTALexpectedSuspectedDataCount);

            //count Displayed Rows
            let rows = element(by.css('div.ui-table-wrapper.ng-star-inserted > table > tbody'));
            let rowsDisplayed = rows.all(by.css('div.ui-table-wrapper.ng-star-inserted > table > tbody > tr'));
            rowsDisplayed = (await rowsDisplayed).length;

            expect(rowsDisplayed).toEqual(TOTALexpectedSuspectedDataCount);


        }


    })

    it('Filters Patient per Location', async () => {

        await browser.driver.sleep(2000);
        let bars = element(by.css('g[class=" c3-shapes c3-shapes-Patients c3-bars c3-bars-Patients"]'));
        let patientCounts = element(by.css('g[class=" c3-texts c3-texts-Patients"]'));
        let countText = '';
        let showingRows = '';
        let computedTotal = '';
        var bar;
        var countTextObj;

        //bar = bars.all(by.css('#covidtestinglocations > svg > g:nth-child(2) > g.c3-chart > g.c3-chart-bars > g > g > path.c3-shape'));
        //countTextObj = patientCounts.all(by.css('#covidtestinglocations > svg > g:nth-child(2) > g.c3-chart > g.c3-chart-texts > g > g > text.c3-text')); 
        bar = bars.all(by.css('g[class=" c3-shapes c3-shapes-Patients c3-bars c3-bars-Patients"] > path.c3-shape'));
        countTextObj = patientCounts.all(by.css('g[class=" c3-texts c3-texts-Patients"] > text.c3-text'));
        let j = (await countTextObj).length;



        for (let x = 0; x < j; x++) {

            let p = bar.get(x);
            let count = countTextObj.get(x);

            browser.actions().mouseMove(p).click().perform();
            await browser.driver.sleep(2000);

            countText = await count.getText();
            await browser.driver.sleep(1000);
            showingRows = element(by.css('.ui-table-summary')).getText();
            computedTotal = 'Showing ' + countText + ' patients';
            await browser.driver.sleep(2000);
            expect(computedTotal).toEqual(showingRows);
            browser.actions().mouseMove(p).click().perform();
            await browser.driver.sleep(1000);
        };




        // browser.actions().mouseMove(element(by.css('.ui-table-summary'))).perform();

        // element(by.xpath('//p-paginator[2]/div/p-dropdown/div/div[2]/span')).click();
        // element(by.xpath('//li[7]/span')).click();

        // let showingRows = element(by.css('.ui-table-summary')).getText();
        // let computedTotal = 'Showing '+displayCount+' patients';

        // expect(computedTotal).toEqual(showingRows);



    });

    it('Displays number of patients per Department', async () => {

        COVID19PatientList.displayNumberOfPatientsByDept();
        await browser.driver.sleep(2000);
        expect(element(by.css('#covidtestinglocationsdetails')).isDisplayed()).toBeTruthy();


        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        await browser.driver.sleep(2000);


    })


    it('Filters by positive', async () => {

        COVID19PatientList.filterByPositive();
        await browser.driver.sleep(2000);
        expect(COVID19PatientList.labelLocationOfPatientsChart.getText()).toContain("Positive");

        //this space is for Data count  Accuracy test
        //statement to test Data count Accuracy given a preloaded data is available
        if (forDataAccuracyTest = true) {
            console.log('the Test includes data accuracy testing');

            TOTALexpectedDisplayedDataCount = parseFloat(TOTALexpectedDisplayedDataCount);

            let percentage = element(by.css('g.c3-chart-arc.c3-target.c3-target-Positive > text')).getText();
            percentage = ((parseFloat((await percentage).replace('%', ''))) / 100);
            let TOTALexpectedPositiveDataCount = TOTALexpectedDisplayedDataCount * percentage;
            TOTALexpectedPositiveDataCount = Math.round(TOTALexpectedPositiveDataCount);

            //count Displayed Rows
            let rows = element(by.css('div.ui-table-wrapper.ng-star-inserted > table > tbody'));
            let rowsDisplayed = rows.all(by.css('div.ui-table-wrapper.ng-star-inserted > table > tbody > tr'));
            rowsDisplayed = (await rowsDisplayed).length;

            expect(rowsDisplayed).toEqual(TOTALexpectedPositiveDataCount);


        }


    })


    it('Filters Patient per Location', async () => {

        await browser.driver.sleep(2000);
        let bars = element(by.css('g[class=" c3-shapes c3-shapes-Patients c3-bars c3-bars-Patients"]'));
        let patientCounts = element(by.css('g[class=" c3-texts c3-texts-Patients"]'));
        let countText = '';
        let showingRows = '';
        let computedTotal = '';
        var bar;
        var countTextObj;

        bar = bars.all(by.css('#covidtestinglocations > svg > g:nth-child(2) > g.c3-chart > g.c3-chart-bars > g > g > path.c3-shape'));
        countTextObj = patientCounts.all(by.css('#covidtestinglocations > svg > g:nth-child(2) > g.c3-chart > g.c3-chart-texts > g > g > text.c3-text'));
        let j = (await countTextObj).length;



        for (let x = 0; x < j; x++) {

            let p = bar.get(x);
            let count = countTextObj.get(x);

            browser.actions().mouseMove(p).click().perform();
            await browser.driver.sleep(2000);

            countText = await count.getText();
            await browser.driver.sleep(1000);
            showingRows = element(by.css('.ui-table-summary')).getText();
            computedTotal = 'Showing ' + countText + ' patients';
            await browser.driver.sleep(2000);
            expect(computedTotal).toEqual(showingRows);
            browser.actions().mouseMove(p).click().perform();
            await browser.driver.sleep(1000);
        };

    });

    it('Resets Filters', async () => {

        await browser.driver.sleep(2000);
        COVID19PatientList.clearFilters();
        await browser.driver.sleep(5000);

    })

    it('Logs out user from Patienteer Web App', async () => {


        misc.logoutuser();
        await browser.driver.sleep(2000);
        expect(await browser.driver.getCurrentUrl()).toContain("login");


    })



});