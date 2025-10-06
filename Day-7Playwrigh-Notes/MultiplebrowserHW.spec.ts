import { chromium,webkit,test } from "@playwright/test";

        // Edge - Browser - Redbus //

test("Launch a browser ", async() => {
    const Edgebrowser = await chromium.launch({headless :false,channel:"msedge"}); // Step 1 - open browser
    const Edgecontext = await Edgebrowser.newContext(); // step 2 - create an incognito / islolated window named context
    const Edgepage    = await Edgecontext.newPage(); // step 3 - create a page in the isoloated window   

    await Edgepage.goto ("https://www.redbus.in/");
    await Edgepage.waitForTimeout(3000);
    console.log("Pagetitle", await Edgepage.title());
        console.log("Page URL",await Edgepage.url());

        // WebKit - Browser - Flikart //

    const WebKitBrowser = await chromium.launch({headless :false,}); // Step 1 - open browser
    const WebkitContext = await WebKitBrowser.newContext(); // step 2 - create an incognito / islolated window named context
    const WebKitPage    = await WebkitContext.newPage(); // step 3 - create a page in the isoloated window   

    await WebKitPage.goto ("https://www.flipkart.com/");
    await WebKitPage.waitForTimeout(5000);
    console.log(`Flipkart --- Webkit `);
    console.log("Pagetitle", await WebKitPage.title());
    console.log("Page URL",await WebKitPage.url());

        await Edgebrowser.close();
        await WebKitBrowser.close();
})