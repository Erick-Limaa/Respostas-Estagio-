let numero = 21; // Informe o número que deseja verificar


function fibonacci(num) {
    let a = 0, b = 1, next;
    
    while (a < num) {
        next = a + b;
        a = b;
        b = next;
    }
    return a === num;
}



if (fibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
