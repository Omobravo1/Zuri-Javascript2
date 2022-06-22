     // Read operator

     const operator = prompt('Enter operator (+, -, *, /)');

     // Read numbers in the program

     const num1 = parseFloat(prompt('Enter number1: '));
     const num2 = parseFloat(prompt('Enter number2: '));


     let result = 0;

     if(isNaN(num1) || isNaN(num2)){
         alert('Wrong Input! Refresh the page and start again!');
     }else{
         if(operator == '+'){
             result =num1 + num2;
         }else if(operator == '-'){
             result = num1-num2;
         }else if(operator == '*'){
             result = num1 * num2;
         }else if (operator == '/'){
             result = num1 / num2;
         }
         document.write(num1 + operator + num2 + '=' + result);
     }