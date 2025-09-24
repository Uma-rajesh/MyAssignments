//Launch Browser - To verify the browser 

function launchBrowser() {

    if (browserName === "chrome") {
        console.log("Launching Chrome Browser");
        
    } else if (browserName === "Safari") {
        console.log("Launching Safari Browser");
    }
    
    else {
        console.log("Launching Default Browser");
        
    }
}
 let browserName = "xxx";
launchBrowser();

// Launch Browser - Using return statement

// let browserName = "chrome";
// function launchBrowser(browserName) {
//     if (browserName == "chrome") {
//         return "launching Chrome browser";
//     } else if (browserName == "Edge") {
//         return "Launching Edge browser";
//     }else {
//         return "Launching Default browser";
//     }
// }
// console.log(launchBrowser(browserName));
