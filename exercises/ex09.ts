// Write a function called formatPhoneNumber that takes in an array of numbers and
// returns a string representing the phone number formed by concatenating the numbers in the specified format.
// return the string "It's missing digits" if the number doesn't have 10 digits or "There are too many digits" if is bigger than 10

const formatPhoneNumber = (numbers: number[]): string => {
  if (numbers.length < 10) {
    return `It's missing digits`
  }
  if (numbers.length > 10) {
    return `There are too many digits`
  }
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
};

export default formatPhoneNumber;

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); // (519) 555-4468
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); // (345) 501-2527
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2])); // It's missing digits
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2])); // There are too many digits
