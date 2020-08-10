function add(number1, number2) {
	return number1 + number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1, number2);

alert(result);




function temperatureConvert() {
  const farenheit = parseInt(prompt("Enter a temperature in Farenheit: "));
  return convertTemp(farenheit);
} 

function convertTemp (farenheit) {
  const result = (farenheit -32 ) * (5/9);
  return result;
}

const outputMessage = temperatureConvert();
alert(outputMessage);
