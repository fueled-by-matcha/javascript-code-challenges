// Write your code here:
function shoutGreetings(greetings){
   const shout = greetings.map(greeting => {
     return greeting.toUpperCase() + '!';
   });
   return shout;
}

// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

