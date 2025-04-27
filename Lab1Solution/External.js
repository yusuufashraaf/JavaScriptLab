console.log(number1);


//2- Create an external JavaScript file and name it External.js ,then define the following variables in this file
    //a- Three number variables (number1,number2,number3) with different values (3,2.9,0xff)
    var number1 = 3;
    var number2 = 2.9;
    var number3 = 0xff;



    var firstName = "Youssef";
    var middleName = 'Ashraf';
    var lastName = `Abdallah`;

    //b- Define a flag variable with value true
    var bool = true;

    //c- Finally print on log “This is the External JavaScript file”
    console.log("This is the External JavaScript file");



//3- Try the following assignments and write your comment
    //a- On External.js ->print the value of number1 on console before number1 definition line ?!
        //Answer: undefined
        //comment: because of hoisting the number1 is declared but has no value

    //b- Create another internal script before external script in html and print the value of number1?
        //Answer: Uncaught ReferenceError: number1 is not defined
        //comment: because internal script is before external script which has the declaration of number1 so, it is not defined

    //c- Now add another internal script after external.js script in html file and print the same value?
        //Answer: 3
        //comment: as the internal script comes after external script which has declaration of variable number1

