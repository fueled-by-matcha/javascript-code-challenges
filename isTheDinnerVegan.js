// Write your code here:
function isTheDinnerVegan(food){
  for(let i = 0; i < food.length; i++){
    if(food[i].source !== 'plant'){
      return false;
    }
  }
  return true;
}

// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false
