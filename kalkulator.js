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

document.body.innerHTML += `<p>10 + 4 + 3 = ${calc('+', 10, 4, 3)}</p>`;
document.body.innerHTML += `<p>95 - 5 = ${calc('-', 95, 5)}</p>`;
document.body.innerHTML += `<p>20 * 4 * 2 = ${calc('*', 20, 4, 2)}</p>`;
document.body.innerHTML += `<p>100 / 2 = ${calc('/', 100, 2)}</p>`;
document.body.innerHTML += `<p>30 % 3 = ${calc('%', 30, 3)}</p>`;
