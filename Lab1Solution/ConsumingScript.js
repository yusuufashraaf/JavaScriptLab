
// 1- Create function name it printVariables(value1,value2,value3) (as function declaration) takes 3 parameters and return them as an Array

    //  a- try to console.log the values of value1,value2,value3 on consumingScript.js file ??    
    
        console.log(value1);
        console.log(value2);
        console.log(value3);
    
        //Output:   Uncaught ReferenceError: value1 is not defined

    //b- Try to call the function before definition line?
        console.log(printVariables());
        // output (3) [undefined, undefined, undefined] because of hoisting it run and because i call the function with no parameters the return is undefined



    // c- Call the function with 3 values then print the return
        console.log(printVariables(4,2,99));
        //output: (3) [4, 2, 99]

    
    //d- Try to call the function with less than 3 parameters printVariables(3,5) .
        console.log(printVariables(3,5));
        //output: (3) [3, 5, undefined] we can use initialization to prevent the undefined problem printVariables(value1,value2,value3=0)
        console.log(printVariables(3,5));
        //output: (3) [3, 5, 0] because we make initialization for value 3 = 0

    //e- What if you call the function with too many parameters ? (more than 3) can you print them using (arguments)?
        console.log(printVariables(4,2,99,5,1));
        //output: (3) [4, 2, 99] the output is the only 3 parameters

        //yes we can print them using console.log(argument) in the function declaration
        
    // f- Define var localVar=3; testingVar=5; inside the function’s block Before calling the function try to console.log the values localVar and testingVar.??
        console.log(testingVar);
        //output: Uncaught ReferenceError: localVar is not defined 

       console.log(localVar);  
        //output: Uncaught ReferenceError: localVar is not defined 

    // g- In step f , call the function and try to print localVar and  testingVar?
        printVariables(1,2,3);
        console.log(testingVar);
        //output: 5 because it is global
        //console.log(localVar);  
        //output: Uncaught ReferenceError: localVar is not defined as it is scope variable
        


// 2- Repeat step 1 but define the function as function expression

    //  a- try to console.log the values of value1,value2,value3 on consumingScript.js file ??    
        
            console.log(value1);
            console.log(value2);
            console.log(value3);
        

        //Output:   Uncaught ReferenceError: value1 is not defined
    
    
    // b- Try to call the function before definition line?
        console.log(printVariablesExpression());
        // output (3) [undefined, undefined, undefined] because of hoisting it run and because i call the function with no parameters the return is undefined

    
    // c- Call the function with 3 values then print the return
        console.log(printVariablesExpression(4,2,99));
        //output: (3) [4, 2, 99]

    // d- Try to call the function with less than 3 parameters printVariables(3,5) .
         console.log(printVariablesExpression(3,5));
        //output: (3) [3, 5, undefined] we can use initialization to prevent the undefined problem printVariablesExpression(value1,value2,value3=0)
        console.log(printVariablesExpression(3,5));
        //output: (3) [3, 5, 0] because we make initialization for value 3 = 0

    // e- What if you call the function with too many parameters ? (more than 3) can you print them using (arguments)?
        console.log(printVariablesExpression(4,2,99,5,1));
        //output: (3) [4, 2, 99] the output is the only 3 parameters

        //No we can't print them because we can't use arguments in function expression


    // f- Define var localVar=3; testingVar=5; inside the function’s block Before calling the function try to console.log the values localVar and testingVar.??
        console.log(testingVar);
        //output: Uncaught ReferenceError: localVar is not defined 

       console.log(localVar);  
        //output: Uncaught ReferenceError: localVar is not defined 

    // g- In step f , call the function and try to print localVar and  testingVar?
        printVariablesExpression(1,2,3);
        console.log(testingVar);
        //output: 5 because it is global
        
        console.log(localVar);  
        //output: Uncaught ReferenceError: localVar is not defined as it is scope variable



    // 2- create the following functions:
        //a- What if you insert less than 2 inputs? solve this problem using ES6 feature.
            console.log(Summation(3));
            //output: NaN because the second parameter is undeefined
            //solution make initialization to these values

        //b- What if the input is not a Number? Solve this problem using your logic
            console.log(Summation(1,"hello"));
            //output: concatenation if the parameters are strings 
            //solution use if(isNan)

            //after solving the problem
            console.log(Summation(2,4));



        
        

