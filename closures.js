function makeFunction() {
  let a = 1;

  return function inner() {
    console.log('an inside inner:', a);
  };
}

const print = makeFunction();

print();