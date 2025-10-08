import { expect, test } from "@playwright/test";

test("Launch a browser ", async({page}) => {

    await page.goto ("https://login.salesforce.com/");
    /* await page.locator (`//input[@id="username"]`).fill(`umarajn06610@agentforce.com`);
    await page.locator(`//input[@id="password"]`).fill(`Nithish@567`);
    await page.locator(`//input[@id="Login"]`).click(); */

     const UserName = page.getByLabel("username")
     await UserName.fill('umarajn06610@agentforce.com');

     const Password = page.getByLabel("password")
     await Password.fill('Nithish@567')

     await page.locator(`//input[@id="Login"]`).click();
        
    await page.locator(`//div[@class='slds-icon-waffle']`).click(); 
    await page.waitForTimeout(3000)
    await page.locator(`//button[text()='View All']`).click(); 
    
    //await page.getByText('View All') .click();

    await page.locator (`//input[@class='slds-input']`).fill(`Service`);
    await page.waitForTimeout(2000)
    await page.locator(`(//p[@class='slds-truncate'])[1]`).click();
    await page.locator(`(//span[text()='Accounts'])[1]`).click();
    await page.locator(`//a[@title='New']`).click();   
    
    await page.locator (`//input[@name='Name']`).fill(`UmaRajesh`);

    await page.locator(`//button[@name='SaveEdit']`).click(); 
   
    // Verify the toast message displayed
    const ToastMessage = page.locator(`//div[text()='Success notification.']`)
  //await expect (ToastMessage).toContainText('Account UmaRajesh was created')
    await page.waitForTimeout(3000)
     console.log("Page URL :"+await page.url());
    console.log("Pagetitle :" + await page.title());
    await page.close();

})