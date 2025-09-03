const celsius_temp = [-10,0,20,40,60];

const fahrenheit_temp = celsius_temp.map((celsius)=>((celsius*(9/5))+32));

console.log(celsius_temp);
console.log(fahrenheit_temp);