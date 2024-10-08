// Create a function that makes mathematical operations dynamically.
// This function should receive as param a string or number, number and string
// First param: string or number (mandatory)
// Second param: number (optional)
// Third param: Enum (optional) - '+', '-', '/', '*'
// If the first param is string, just return it. Otherwise, use the two numbers and the string to make the math operation
// Eg: printInfoOrCalculate(3,5,"+") //Expected result: 8
// Eg: printInfoOrCalculate(5,3,"-") //Expected result: 2
// Eg: printInfoOrCalculate("TS",5,"+") //Expected result: TS
// Eg: printInfoOrCalculate("TS") //Expected result: TS

enum Operations {
  ADD = "+",
  SUBTRACT = "-",
  DIVISION = "/",
  MULTIPLY = "*",
}

const printInfoOrCalculate = (
  input: string | number,
  input2?: number,
  operator?: string
) => {
  if (typeof input === "string") {
    return input;
  }
  if (!input2) {
    throw "Invalid input";
  }
  if (!operator) {
    throw "Invalid input";
  }

  if (operator === Operations.ADD) {
    return input + input2;
  }
  if (operator === Operations.SUBTRACT) {
    return input - input2;
  }
  if (operator === Operations.DIVISION) {
    if (input2 === 0) {
      throw "Invalid input";
    }
    return input + input2;
  }
  if (operator === Operations.MULTIPLY) {
    return input * input2;
  }
  throw "Invalid input";
};

// Tests
console.log(printInfoOrCalculate(3, 5, "+")); // Expected result: 8
console.log(printInfoOrCalculate(5, 3, "-")); // Expected result: 2
console.log(printInfoOrCalculate("TS", 5, "+")); // Expected result: "TS"
console.log(printInfoOrCalculate("TS")); // Expected result: "TS"

export default printInfoOrCalculate;
