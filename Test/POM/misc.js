const { browser } = require("protractor");


let miscfunctions = function () {

    //web objects
    let loggedInUserDropdown = element(by.css('#userDropDown'));
    let accountInfoLink = element(by.css('a[ng-reflect-router-link="/dashboard/account"]'));
    let logOutlink = element(by.css('.dropdown-item[href="javascript:void(0)"]'));

    let menuLink = element(by.xpath('.//*[text()="Menu"]'));
    let covid19patientlistlink = element(by.xpath('.//*[text()="COVID-19 Patient List "]'));

    



    //page methods
    this.openaccountinfo = function () {
        loggedInUserDropdown.click();
        browser.sleep(5000);
        accountInfoLink.click();

    };
    this.logoutuser = function () {
        loggedInUserDropdown.click();
        browser.sleep(5000);
        logOutlink.click();

    };
    this.toggleshowmenu = function () {
        menuLink.click();

    };
    this.gotoCOVID19PatientList = function () {
        menuLink.click();
        browser.sleep(5000);
        covid19patientlistlink.click();
    };



};

module.exports = new miscfunctions();