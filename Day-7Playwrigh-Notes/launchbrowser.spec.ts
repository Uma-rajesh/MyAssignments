
import { chromium , test} from "@playwright/test"
test("Launch a browser ", async() => {  

    const browser = await chromium.launch({channel:"chrome"}); // Step 1 - open browser
    const context = await browser.newContext(); // step 2 - create an incognito / islolated window named context
    const page    = await context.newPage(); // step 3 - create a page in the isoloated window   

    await page.goto (`https://www.amazon.com/`);
    await page.waitForTimeout(3000);
    console.log(await page.title());
        console.log(await page.url());

})

/* 
 browser
 browser Context
 page
 loadurl

// interact with webelements */

