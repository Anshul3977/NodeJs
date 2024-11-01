const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
  rl.question('Enter second number: ', (num2) => {
    rl.question('Choose an operation (+, -, *, /): ', (operation) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      switch (operation) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = b !== 0 ? a / b : 'Cannot divide by zero';
          break;
        default:
          result = 'Invalid operation';
      }

      console.log('Result:', result);
      rl.close();
    });
  });
});
