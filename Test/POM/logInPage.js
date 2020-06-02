const { element } = require("protractor");



let loginpage = function () {

    //web objects
    let usernamefld = element(by.css('#username'));
    let passwordfld = element(by.css('#password'));
    let signinbtn = element(by.buttonText('Sign in'));





    //page methods
    this.enterusername = function (usrnme) {
        usernamefld.sendKeys(usrnme);

    };
    this.enterpassword = function (psswrd) {
        passwordfld.sendKeys(psswrd);

    };
    this.clicksignin = function () {
        signinbtn.click();

    };



};

module.exports = new loginpage();