const calc = (operator, ...numbers) => {

    let result = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {

        switch (operator) {
            case '+': 
                result += numbers[i]; break;
            case '-': 
                result -= numbers[i];break; 
            case '*':  
                result *= numbers[i]; break;
            case '/': 
                result /= numbers[i]; break;
            case '%': 
                result %= numbers[i]; break;
            default: 
                return "Operator tidak valid!";
        }
    }

    return result;
}

console.log(calc('+', 10, 4, 3)); 
console.log(calc('-', 95, 5));
console.log(calc('*', 20, 4, 2));
console.log(calc('/', 100, 2));
console.log(calc('%', 30, 3));
