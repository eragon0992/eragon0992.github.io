var answer = document.getElementById("answer");
var digit1 = "";
var digit2 = "";
var tempDigit = "";
var math = "";
var isCleanable = false;


function addDigit(x) {

    if (isCleanable) {
        clean();
        isCleanable = false;
    }
    switch (x) {

        case "1":
            {
                answer.value += "1";
                tempDigit += "1";
                break;
            }

        case "2":
            {
                answer.value += "2";
                tempDigit += "2";
                break;
            }

        case "3":
            {
                answer.value += "3";
                tempDigit += "3";
                break;
            }

        case "4":
            {
                answer.value += "4";
                tempDigit += "4";
                break;
            }

        case "5":
            {
                answer.value += "5";
                tempDigit += "5";
                break;
            }

        case "6":
            {
                answer.value += "6";
                tempDigit += "6";
                break;
            }

        case "7":
            {
                answer.value += "7";
                tempDigit += "7";
                break;
            }

        case "8":
            {
                answer.value += "8";
                tempDigit += "8";
                break;
            }

        case "9":
            {
                answer.value += "9";
                tempDigit += "9";
                break;
            }


        case "0":
            {
                if (tempDigit == "0" && x == "0") {
                    answer.value = "0";
                    tempDigit = "0";
                } else {
                    answer.value += "0";
                    tempDigit += "0";
                }
                break;
            }
        case ".":
            {
                if (tempDigit.indexOf(".") < 0) {
                    if (tempDigit == "") {
                        answer.value += "0.";
                        tempDigit += "0.";
                    } else {
                        answer.value += ".";
                        tempDigit += ".";
                    }
                }
                break;
            }

        case "+":
            {
                if ((answer.value.indexOf('+') < 0 && answer.value.indexOf('-') < 0 && answer.value.indexOf('*') < 0 && answer.value.indexOf('÷') < 0) || tempDigit.indexOf("-") == 0) {
                    if (tempDigit.indexOf("-") == 0)
                        answer.value += ")";
                    math = "+";
                    answer.value += "+";
                    digit1 = tempDigit;
                    tempDigit = "";
                }
                break;
            }
        case "-":
            {
                if (tempDigit.length == 0) {
                    tempDigit += "-";
                    answer.value += "(-";
                } else
                if ((answer.value.indexOf('+') < 0 && answer.value.indexOf('-') < 0 && answer.value.indexOf('*') < 0 && answer.value.indexOf('÷') < 0) || tempDigit.indexOf("-") == 0) {
                    if ((digit1.length == 0 || digit2.length == 0) && tempDigit != "-") {
                        if (tempDigit.indexOf("-") == 0)
                            answer.value += ")";
                        math = "-";
                        answer.value += "-";
                        digit1 = tempDigit;
                        tempDigit = "";
                    }
                }
                break;
            }
        case "*":
            {
                if ((answer.value.indexOf('+') < 0 && answer.value.indexOf('-') < 0 && answer.value.indexOf('*') < 0 && answer.value.indexOf('÷') < 0) || tempDigit.indexOf("-") == 0) {
                    if (tempDigit.indexOf("-") == 0)
                        answer.value += ")";
                    math = "*";
                    answer.value += "*";
                    digit1 = tempDigit;
                    tempDigit = "";
                }
                break;
            }
        case "÷":
            {
                if ((answer.value.indexOf('+') < 0 && answer.value.indexOf('-') < 0 && answer.value.indexOf('*') < 0 && answer.value.indexOf('÷') < 0) || tempDigit.indexOf("-") == 0) {
                    if (tempDigit.indexOf("-") == 0)
                        answer.value += ")";
                    math = "/";
                    answer.value += "÷";
                    digit1 = tempDigit;
                    tempDigit = "";
                }
                break;
            }
        case "=":
            {
                if (tempDigit != "")
                    equals(digit1, math, tempDigit);
                else if (math == "+" || math == "-")
                    equals(digit1, math, "0")
                else
                    equals(digit1, math, "1");
                break;
            }
    }
};

function clean() {
    digit1 = "";
    digit2 = "";
    tempDigit = "";
    answer.value = ""
    math = "";
}

function equals(digit1, math, digit2) {
    console.log(digit1);
    console.log(digit2);
    console.log(math);
    switch (math) {
        case "+":
            {
                answer.value = String(Number(digit1) + Number(digit2));
                break;
            }
        case "-":
            {
                answer.value = String(Number(digit1) - Number(digit2));
                break;
            }
        case "*":
            {
                answer.value = String(Number(digit1) * Number(digit2));
                break;
            }
        case "/":
            {
                if (Number(digit2) != 0)
                    answer.value = String(Number(digit1) / Number(digit2));
                else
                    answer.value = "Division by Zero!"
                break;
            }
        case "":
            {
                break;
            }

    }
    isCleanable = true;
}