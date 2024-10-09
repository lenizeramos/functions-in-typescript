// Create a function named combine that accepts either two numbers or two strings and returns their concatenated value.
// Use function overloading to define the function in two variants: one for numbers and another for strings.
// Return the string.

function combine(param1: number, param2: number): string;
function combine(param1: string, param2: string): string;
function combine(param1: number, param2: string): string;
function combine(param1: string, param2: number): string;
function combine(param1: number | string, param2: number | string): string {
  return `${param1}${param2}`;
}

console.log(combine(2, 3)); // Expected output: "23"
console.log(combine("Hello, ", "world!")); // Expected output: "Hello, world!"
console.log(combine(5, " days")); // Expected output: "5 days"
console.log(combine("Error: ", 404));

export default combine;
