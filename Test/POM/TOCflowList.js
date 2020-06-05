const { browser } = require("protractor");


let tocFlowListModule = function () {

    //web objects:

    //Filters pane
    let servicesOption0 = element(by.css('div.radio-filter.col-md-2.pr-1 > select.custom-select.ng-untouched.ng-pristine.ng-valid'));

    let TOCservice = element(by.css('option[value="TOC"]'));
    let SiteRepservice = element(by.css('option[value="SitRep"]'));
    let serviceLabel = element(by.xpath('//label[contains(.,"Service:")]'))



    //columns
    let patient = element(by.css('th[ng-reflect-ng-class="patient"]'));
    let location = element(by.css('th[ng-reflect-ng-class="location"]'));
    let council = element(by.css('th[ng-reflect-ng-class="council"]'));
    let ccg = element(by.css('th[ng-reflect-ng-class="ccg"]'));
    let los = element(by.css('th[ng-reflect-ng-class="los"]'));
    let knownToTeam = element(by.css('th[ng-reflect-ng-class="knowntoteam"]'));
    let cernerEDD = element(by.css('th[ng-reflect-ng-class="edd"]'));
    let mffd = element(by.css('th[ng-reflect-ng-class="mffd"]'));
    let tasks = element(by.css('th[ng-reflect-ng-class="tasks"]'));
    let ECISTcodes = element(by.css('th[ng-reflect-ng-class="ecistcodes"]'));
    let comments = element(by.css('th[ng-reflect-ng-class="comments"]'));
    let N2Asent = element(by.css('th[ng-reflect-ng-class="n2a"]'));
    let NODsent = element(by.css('th[ng-reflect-ng-class="nod"]'));
    let NODedd = element(by.css('th[ng-reflect-ng-class="nodedd"]'));
    let confirmDTOC = element(by.css('th[ng-reflect-ng-class="dtoc"]'));
    let DTOCcode = element(by.css('th[ng-reflect-ng-class="dtoccode"]'));

    let NEWs = element(by.css('th[ng-reflect-ng-class="news2 header"]'));
    let Sp02 = element(by.css('th[ng-reflect-ng-class="spo2"]'));
    let medicallyOptd = element(by.css('th[ng-reflect-ng-class="medopt"]'));
    let DCTime = element(by.css('th[ng-reflect-ng-class="dctime"]'));
    let DCdestination = element(by.css('th[ng-reflect-ng-class="dcdest"]'));
    let ReasonToReside = element(by.css('th[ng-reflect-ng-class="reasontoreside"]'));
    let delayReason = element(by.css('th[ng-reflect-ng-class="delayreason"]'));


    this.siteRepColumns = [patient, location, los, NEWs, Sp02, medicallyOptd, DCTime, DCdestination,
        ReasonToReside, delayReason, cernerEDD, mffd, tasks, ECISTcodes, comments];
    this.SitRepcolumnNames = ["Patient", "Location", "LOS", "NEWS", "Sp O2", "Medically Optimised",
        "D/C Time", "DC Destination", "Reason to Reside", "Delay Reason", "Cerner EDD", "MFFD", "Tasks",
        "ECIST Codes", "Comments"];

    this.TOCcolumns = [patient, location, council, ccg, los, knownToTeam, cernerEDD, mffd,
        tasks, ECISTcodes, comments, N2Asent, NODsent, NODedd, confirmDTOC, DTOCcode];
    this.TOCcolumnNames = ["Patient", "Location", "Council", "CCG", "LOS", "Known to Team",
        "Cerner EDD", "MFFD", "Tasks", "ECIST Codes", "Comments", "N2A sent", "NOD sent", "NOD EDD",
         "Confirm DTOC", "DTOC Code"];




    //page methods



    this.toggleToTOC = () => {
        browser.driver.sleep(3000);
        let servicesOption1 = element(by.css('select.custom-select.ng-touched.ng-valid.ng-dirty'));
        servicesOption1.click();
        browser.driver.sleep(3000);
        TOCservice.click();
        serviceLabel.click();

    };
    this.toggleToSitRep = () => {
        browser.driver.sleep(3000);
        
        servicesOption0.click();
        browser.driver.sleep(3000);
        SiteRepservice.click();
        serviceLabel.click();

    };





};

module.exports = new tocFlowListModule();