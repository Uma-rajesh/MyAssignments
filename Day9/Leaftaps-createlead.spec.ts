import { expect, test } from "@playwright/test";

test("Launch a browser ", async({page}) => {

await page.goto ("http://leaftaps.com/opentaps/control/main");
await page.locator (`//input[@id="username"]`).fill(`Demosalesmanager`);
await page.locator(`//input[@id="password"]`).fill(`crmsfa`);
await page.locator(`.decorativeSubmit`).click();
await page.waitForTimeout(3000)
await page.locator(`//div[@id="button"]`).click();

await page.locator(`//a[text()='Leads']`).click();
await page.locator(`//a[text()='Create Lead']`).click();
await page.waitForTimeout(3000)
await page.locator (`//input[@id="createLeadForm_companyName"]`).fill(`Cognizant`); // Company name
await page.locator (`//input[@id="createLeadForm_firstName"]`).fill(`Uma`); //First name
await page.locator (`//input[@id="createLeadForm_lastName"]`).fill(`Rajesh`); //Last name
await page.locator (`//input[@id="createLeadForm_personalTitle"]`).fill(`MRS`); //Salutation
await page.locator (`//input[@id="createLeadForm_generalProfTitle"]`).fill(`Title`); //Title

await page.locator (`//input[@id="createLeadForm_annualRevenue"]`).fill(`100000`); //Annual Revenue
await page.locator (`//input[@id="createLeadForm_departmentName"]`).fill(`Testing`); //Department
await page.locator (`//input[@id="createLeadForm_primaryPhoneNumber"]`).fill(`9790869784`); //Phone number

await page.locator(`//input[@value='Create Lead']`).click(); // Clicking create lead
await page.waitForTimeout(3000)

//Verify the company name, first name, last name and the status
const companyname = page.locator(`//span[@id='viewLead_companyName_sp']`)
await expect (companyname).toContainText('Cognizant')
const Fname = page.locator(`//span[@id='viewLead_firstName_sp']`)
await expect (Fname).toContainText('Uma')
const Status = page.locator(`//span[@id='viewLead_statusId_sp']`)
await expect (Status).toContainText('Assigned')

await page.waitForTimeout(2000);
 console.log("Pagetitle :"+ await page.title());
 await page.close();
})