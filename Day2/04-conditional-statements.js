

// function getBrowser() {

//     if (browserName=="chrome") {
//         console.log("Supported Browser is Chrome");

//     } else if (browserName=="edge"){
//         console.log("Supported Browser is edge");
//     } else {
//         console.log("Not supported browser");        
//     }
// }

// let browserName="firefox"
// getBrowser()



// function numberType(number) {
//     if (number>0) {
//         console.log("It is a positive");

//     } else if (number===0){

//         console.log("Neutral number");

//     } else if (number<0){

//         console.log("Negative number");

//     } 
//      else {
//         console.log("Check your input");        
//     }
// }
// numberType(-20)

let browser = "firefox"

function getVersion() {

    switch (browser) {
        case 'Chrome':
            console.log("131");

            break;

        case 'edge':
            console.log("132");

            break;

        case 'firefox':
            console.log("134");

            break;

        default:
            console.log("Unsupported Browser");

            break;
    }
}

getVersion()

