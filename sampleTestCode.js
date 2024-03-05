let number = prompt('type digital');
let operator = prompt('1.Concatenacia + 2.% remainder 3. умножить  на 5')

if (operator === '1') {
  console.log(operator + 15);
}
else if (operator === '2') {
    console.log(number % 2);
}
else if (operator === '3') {
    console.log(number * 5);
}
else {
    alert('Operator ${operator} не поддерживается, попробуйте еще раз')
}