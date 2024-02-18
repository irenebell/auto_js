const sum = function (a, b) {
  return a + b;
}

const result = sum(5, 18);
console.log(result);

(function() {
  console.log('Did you call me?');
})()

let a = function () {
  console.log('I was called');
}

a();
a();
a();

let b = function (name) {
  console.log('I am ' + name + ' and I was called');
}

b("Jack");
b("Anna");
b("Rose");
