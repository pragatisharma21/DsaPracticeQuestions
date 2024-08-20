function guessNum() {
    alert("----Think about a three (3) different Digit number in your mind");

    let choice = prompt("Type 'y' or 'Y' to proceed further:");

    while (choice === 'y' || choice === 'Y') {
        alert("---------------------------------------------------");
        alert("Reverse the number you think i.e. (123 -> 321 ) And type 'y' or 'Y':");

        choice = prompt();

        if (choice === 'y' || choice === 'Y') {
            alert("---------------------------------------------------");
            alert("Subtract the reversed number from your number (i.e. 123 - 321 = 198)");

            alert("Once you are done, Type 'y' or 'Y':");
            choice = prompt();

            if (choice === 'y' || choice === 'Y') {
                alert("---------------------------------------------------");
                alert("Just take the positive value in your mind (if the answer is -100, think of it as +100)");

                let num = parseInt(prompt("Now give me the first digit of the resultant number that you get:"));

                if (num >= 1 && num < 9) {
                    let lastDigit = 9 - num;
                    alert("The number after calculation is " + num + '9' + lastDigit);
                }
                break;
            } else {
                alert("Choice Not mentioned");
                break;
            }
        } else {
            alert("Choice Not mentioned");
            break;
        }
    }
}

function main() {
    alert("------------- Welcome to the mind games -----------");

    let task = parseInt(prompt("------------ What task do you want to perform --------------\n\n1 :- Guess number\n2 :- Count the number\n\nEnter the task number:"));

    switch (task) {
        case 1:
            alert("Choice is Guess the number");
            guessNum();
            break;
        case 2:
            alert("Choice is count the number");
            break;
        default:
            alert("Choice is Not listed");
    }
}


