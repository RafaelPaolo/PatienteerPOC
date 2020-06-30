const { browser } = require("protractor");


let covid19pmodule = function () {

    //web objects:

    //table column elements
    let location = element(by.css('th[ng-reflect-field="Location"]'));
    let patient = element(by.css('th[ng-reflect-field="PatientName"]'));
    let diagnosis = element(by.xpath('//th[contains(.,"PresentingCompliant/Diagnosis")]'));
    let los = element(by.css('th[ng-reflect-field="LOSMinutes"]'));
    let pals = element(by.css('th[ng-reflect-field="PALSStartDT"] .labelsmall'));
    let resusstat = element(by.xpath('//th[contains(.,"Resus Status")]'));
    let crt = element(by.css('th[ng-reflect-field="CRTActionDesc"]'));
    let news2 = element(by.css('th[ng-reflect-field="NEWS2"] .labelsmall'));
    let obsfreq = element(by.xpath('//th[contains(.,"Obs. Freq.")]'));
    let resprate = element(by.css('th[ng-reflect-field="RespRate"] .label'));
    let temp = element(by.css('th[ng-reflect-field="Temp"] .labelsmall'));
    let spo2 = element(by.css('th[ng-reflect-field="SpO2"] .labelsmall'));
    let crp = element(by.css('th[ng-reflect-field="CRP"] .label'));
    let egfr = element(by.css('th[ng-reflect-field="eGFR"] .label'));
    let covidtesttask = element(by.css('th[ng-reflect-field="LastestTaskStartDT"]'));
    let covidposneg = element(by.xpath('//th[contains(.,"C-19(+ve/-ve)")]'));
    let wflows = element(by.xpath('//th[contains(.,"WF")]'));

    this.columns = [location, patient, diagnosis, los, pals, resusstat, crt, news2, obsfreq, resprate, temp, spo2, crp, egfr, covidtesttask,
        covidposneg, wflows];
    this.columnNames = ["Location", "Patient", "Compliant/Diagnosis", "LOS", "PALS", "Resus Status",
        "CRT Action", "NEWS2", "Obs. Freq.", "Resp. Rate", "Temp.", "Sp 02", "CRP (mg/L)", "eGFR (mL/min)", "COVID Swab Testing Status",
        "(+ve/-ve)", "WF's"];

    this.suspectedsection = element(by.css('.c3-arc-Suspected'));
    this.positivesection = element(by.css('.c3-arc-Positive'));
    this.resetFilters = element(by.css('.font-bold'));
    
    //(this label sometimes changes attribute 35,36,11)
    //this.labelLocationOfPatientsChart = element(by.css('div.card-header > [_ngcontent-c35]'));
    //this.displayByDepartmentBtn = element(by.css('button[_ngcontent-c35]'));
    this.displayByDepartmentBtn = element(by.css('button[_ngcontent-c36]'));
    this.labelLocationOfPatientsChart = element(by.css('div.card-header > [_ngcontent-c36]'));


    //page methods
    this.filterBySuspected = function () {
        browser.driver.sleep(3000);
        this.suspectedsection.click();

    };
    this.filterByPositive = function () {
        browser.driver.sleep(3000);
        this.positivesection.click();

    };
    this.clearFilters = function () {
        browser.driver.sleep(3000);
        this.resetFilters.click();

    };
    this.displayNumberOfPatientsByDept = function () {
        browser.driver.sleep(3000);
        this.displayByDepartmentBtn.click();

    };




};

module.exports = new covid19pmodule();