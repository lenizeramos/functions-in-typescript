// Let's create the famous FizzBuzz!
// The challenge is to write a function called fizzBuzzArray that takes in a number and returns an array.
// The array should contain all the numbers from 1 to the number passed in.
// However, if the number is divisible by 3, you should replace the number with "Fizz".
// If the number is divisible by 5, you should replace the number with "Buzz".
// If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".

const fizzBuzzArray = (num: number): (number | string)[] => {
  if (num < 1) {
    throw new Error("Number must be greater than 0");
  }

  const arr: (number | string)[] = [];

  for (let index = 1; index <= num; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (index % 3 === 0) {
      arr.push("Fizz");
    } else if (index % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(index);
    }
  }
  return arr;
};

export default fizzBuzzArray;

console.log(fizzBuzzArray(5)); // Expected result: [1, 2, "Fizz", 4, "Buzz"]
fizzBuzzArray(15); // Expected result" [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
