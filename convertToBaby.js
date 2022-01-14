// Write your code here:
function convertToBaby(items){
  let babies = [];
  for(let i = 0; i < items.length; i++){
    babies.push('baby ' + items[i]);
  }
  return babies;
}

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 
