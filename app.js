function setNumber1() {
    const number1 = prompt("Enter the first number:");
    document.getElementById('number1').value = number1;
  }
  
  function setNumber2() {
    const number2 = prompt("Enter the second number:");
    document.getElementById('number2').value = number2;
  }
  
  function calculateSum() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const sum = num1 + num2;
    document.getElementById('result').value = `${num1} + ${num2} = ${sum}`;
  }
  
  function calculateSub() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const sub = num1 - num2;
    document.getElementById('result').value = `${num1} - ${num2} = ${sub}`;
  }
  
  function calculateMul() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const mul = num1 * num2;
    document.getElementById('result').value = `${num1} * ${num2} = ${mul}`;
  }
  function calculateDiv() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const mul = num1 / num2;
    document.getElementById('result').value = `${num1} /${num2} = ${mul}`;
  }