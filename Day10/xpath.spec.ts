import { expect, test } from "@playwright/test";

test("Launch a browser ", async({page}) => {

await page.goto ("http://leaftaps.com/opentaps/control/main");
await page.locator (`//input[@id="username"]`).fill(`Demosalesmanager`);
await page.locator(`//input[@id="password"]`).fill(`crmsfa`);
await page.locator(`.decorativeSubmit`).click();

await page.waitForTimeout(3000)
await page.locator(`//a[contains(text(),"CRM")]`).click();
await page.locator(`//a[text()='Leads']`).click();
await page.locator(`//a[text()='Create Lead']`).click();

await page.waitForTimeout(3000)
await page.locator (`//input[@id="createLeadForm_companyName"]`).fill(`Cognizant`); // Company name
await page.locator (`//input[@id="createLeadForm_firstName"]`).fill(`Uma`); //First name
await page.locator (`//input[@id="createLeadForm_lastName"]`).fill(`Rajesh`); //Last name

await page.selectOption (`//select[@id="createLeadForm_currencyUomId"]`,{value:"INR"}); //Prefered Currency

await page.selectOption (`//select[@id="createLeadForm_generalCountryGeoId"]`,{value:"IND"}); // Country

await page.waitForTimeout(5000)



/* await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{index:2}) // index (select from dropdown)
await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{value:"LEAD_DIRECTMAIL"}) // value (select from dropdown)
// value -----> 1st priority , directly comes from Database
await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{label:"Direct Mail"}) // label (select from dropdown)
// label - when to use --> when label value is not changed (mr, mrs, country code, gender) */


})