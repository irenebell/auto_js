const john = {
  name: "John",
  age: 25,
  getOlder() {
    this.age++ 
  }
}

console.log(john);
console.log(john.name);
console.log(john["name"]);
john.language = "JS";
console.log(john);
/** delete john.age
console.log(john);**/

john.getOlder();
john.getOlder();

console.log(john);

/** HW **/

const car = {
  color: "black",
  power() {
    console.log(power);
  }
}

car.color = "green";
console.log(car)

const sum = function(pears, apples) {
  return pears + apples;
}

console.log(sum(10, 17))

const hello = function (name) {
  if (name) {
    console.log('Hello ' + name);
} else {
  console.log('There is no such name');
}
}

hello();

const typeArg = function (arg) {
  console.log(typeof(arg));
}

typeArg(true);

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const number = 17;
console.log(isPrime(number));


