// Classify number type
// function classifynumber(a,b) {
//     var a=4;
// ++a
// var b=0;
// // c=a+b
// if (a+b>4) {
//     console.log("Positive number");
    
// } else if (a+b<0) {
//     console.log("Negative number");
// } else
//     {
//     console.log("Neutral number"); 
// }
    
// }
// classifynumber();

// Launch Browser - To verify the browser 

// function launchBrowser() {

//     if (browserName === "chrome") {
//         console.log("Launching Chrome Browser");
        
//     } else if (browserName === "Safari") {
//         console.log("Launching Safari Browser");
//     }
    
//     else {
//         console.log("Launching Default Browser");
        
//     }
// }
//  let browserName = "xxx";
// launchBrowser();

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


//Test Run

    // function runTests() {
    //     switch (testType) {
    //         case "Smoke":
    //             console.log("Running Smoke Testing");
    //             break;
    //     case "Sanity":
    //             console.log("Running Sanity Testing");
    //             break;
    //     case "Regression":
    //             console.log("Running Regression Testing");
    //             break;

    //         default:
    //               console.log("Invalid test. Running Smoke Testing");
    //             break;
    //     }
    // }
    // let testType="Security"
    // runTests();

//Classroom Assignment: Grade Calculation

function GetGrade(Score) {
    switch (true) {
        case Score >= 90:
            console.log("Student belongs to Grade A");
            break;
        case Score >= 80:
            console.log("Student belongs to Grade B");
            break;
        case Score >= 65:
            console.log("Student belongs to Grade C");
            break;
        case Score >= 50:
            console.log("Student belongs to Grade D");
            break;
        case Score >= 40:
            console.log("Student belongs to Grade F");
            break;
        default:
            console.log("Please Enter a Valid Score to provide Students Grade");
            break;
    }
}
 let Score = -8;
GetGrade(Score);
