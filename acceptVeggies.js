const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
function declineEverything(food){
  food.forEach(politelyDecline);
}

declineEverything(veggies)
function politelyAccept(veg){
  console.log(`Ok, I guess I will eat some ${veg}.`)
}

function acceptEverything(food){
  food.forEach(politelyAccept)
}

acceptEverything(veggies);
