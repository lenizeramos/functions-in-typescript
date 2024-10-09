// Expected result: Write a function called displayLikes that takes in an array of names and returns a string of who likes the post.

// The function should return a string formatted as follows:

// If no one likes it, it should return 'no one likes this'
// If one person likes it, it should return '{name} likes this'
// If two people like it, it should return '{name1} and {name2} like this'
// If three people like it, it should return '{name1}, {name2} and {name3} like this'
// If more than three people like it, it should return '{name1}, {name2} and {x} others like this'

const displayLikes = (names: string[]): string => {
  const lengthArray = names.length;
  if (lengthArray === 0) {
    return "no one likes this";
  }
  if (lengthArray === 1) {
    return `${names[0]} likes this`;
  }
  if (lengthArray === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (lengthArray === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${lengthArray - 2} others like this`;
  }
};

export default displayLikes;

displayLikes([]); // Expected result: 'no one likes this'
displayLikes(["Peter"]); // Expected result: 'Peter likes this'
displayLikes(["Jacob", "Alex"]); // Expected result: 'Jacob and Alex like this'
displayLikes(["Max", "John", "Mark"]); // Expected result: 'Max, John and Mark like this'
displayLikes(["Alex", "Jacob", "Mark", "Max"]); // Expected result: 'Alex, Jacob and 2 others like this'
displayLikes(["Alex", "Jacob", "Mark", "Max", "Jill"]); // Expected result: 'Alex, Jacob and 3 others like this'
