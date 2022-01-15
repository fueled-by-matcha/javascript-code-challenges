// Write your code here:
function dogFactory(name, breed, weight){
  let dog = {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name(){
      return this._name;
    },
    get breed(){
      return this._breed;
    },
    get weight(){
      return this._weight;
    },
    set name(name){
      this._name = name;
    },
    set breed(breed){
      this._breed = breed;
    },
    set weight(weight){
      this._weight = weight;
    },
    bark(){
      return 'ruff! ruff!';
    },
    eatTooManyTreats(){
      this.weight++;
    }
  };
  return dog;
}
