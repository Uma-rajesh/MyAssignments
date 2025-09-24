//Test Run

    function runTests() {
        switch (testType) {
            case "Smoke":
                console.log("Running Smoke Testing");
                break;
        case "Sanity":
                console.log("Running Sanity Testing");
                break;
        case "Regression":
                console.log("Running Regression Testing");
                break;

            default:
                  console.log("Invalid test. Running Smoke Testing");
                break;
        }
    }
    let testType="Security"
    runTests();
