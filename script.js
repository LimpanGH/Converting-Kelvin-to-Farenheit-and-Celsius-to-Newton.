// Setting todays forecast to 293 kelvin.
let kelvin = 293;

// Setting todays forecast in celsius by subrtracting 273 from "kelvin"".
const celsius = (kelvin - 273);

// Taking the value from celsius and using an equation to calculate the value in farenheit and then round it down with Math.floor.
let farenheit = celsius *(9/5) +32;
console.log(Math.floor (farenheit));

console.log(`The temperature is ${farenheit} degrees Farenheit.`)


/* Convert celsius to the Newton scale using the equation below
   Newton = Celsius * (33/100)
   Round down the Newton temperature using the .floor() method
   Use console.log and string interpolation to log the temperature in newton to the console */

 // Converting celsius to Newton and rounding down. 
   let newton = celsius * (33/100);
   newton = Math.floor (newton);
   console.log (`The temperature is ${newton} degrees Newton`)
