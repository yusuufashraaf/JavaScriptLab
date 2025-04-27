// 1- Create function name it printVariables(value1,value2,value3) (as function declaration) takes 3 parameters and return them as an Array



function printVariables(value1, value2, value3=0) {
    console.log(arguments);
    var localVar = 3;
    testingVar = 5; 
    return [value1, value2, value3];
}



// 2- Repeat step 1 but define the function as function expression
const printVariablesExpression = (value1, value2, value3=0) => {
    var localVar = 3;
    testingVar = 5; 
    // console.log(arguments);  
    //error can't access arguments in function expression
    return [value1, value2, value3];
};

function Summation(a = 0, b = 0){
    if ((isNaN(a)) || isNaN(b)) {
        return "Enter Numbers only";
    }
    return a + b;
};



