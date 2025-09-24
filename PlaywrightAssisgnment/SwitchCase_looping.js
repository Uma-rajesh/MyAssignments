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
