const name = "Alice";
const score = 85;

// 1. Backticks (` `) define a Template Literal.
// 2. ${} embeds dynamic variables or expressions inside the string.
const message = `Hello, ${name}! Your score is ${score}. Next score: ${score + 5}.`;

console.log(message); 
// Output: Hello, Alice! Your score is 85. Next score: 90.