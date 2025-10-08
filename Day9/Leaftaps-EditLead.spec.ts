import { expect, test } from "@playwright/test";

test("Launch a browser ", async({page}) => {

await page.goto ("http://leaftaps.com/opentaps/control/main");
await page.locator (`//input[@id="username"]`).fill(`Demosalesmanager`);
await page.locator(`//input[@id="password"]`).fill(`crmsfa`);
await page.locator(`.decorativeSubmit`).click();
await page.waitForTimeout(3000)

await page.locator(`//div[@id="button"]`).click();
await page.locator(`//a[text()='Leads']`).click();

await page.locator(`//a[text()='Find Leads']`).click();

await page.locator (`(//input[@name="firstName"])[3]`).fill(`Uma`)
await page.locator(`//button[text()='Find Leads']`).click();
//await page.waitForTimeout(2000)
await page.locator(`(//a[text()='Uma'])[1]`).click();
await page.locator(`//a[text()='Edit']`).click();
 
await page.locator (`//input[@id="updateLeadForm_companyName"]`).fill(`TestLeaf`); // Edit company name
await page.locator (`//input[@id="updateLeadForm_annualRevenue"]`).fill(`100000`); // Edit Annual Revenue
await page.locator (`//input[@id="updateLeadForm_departmentName"]`).fill(`SDET`); // Edit Department
await page.locator (`//textarea[@id="updateLeadForm_description"]`).fill(`TestLeaf-XXXX`); // Edit Description

await page.locator(`//input[@value='Update']`).click();
await page.waitForTimeout(3000)

//Verify the company name, Annual Revenue, Department, Description
const companyname = page.locator(`//span[@id='viewLead_companyName_sp']`)
await expect (companyname).toContainText('TestLeaf')
const Revenue = page.locator(`//span[@id='viewLead_annualRevenue_sp']`)
await expect (Revenue).toContainText('100,000.00')
const Department = page.locator(`//span[@id='viewLead_departmentName_sp']`)
await expect (Department).toContainText('SDET')
const Description = page.locator(`//span[@id='viewLead_description_sp']`)
await expect (Description).toContainText('TestLeaf-XXXX')

console.log("Pagetitle :"+ await page.title());
 await page.close();

})