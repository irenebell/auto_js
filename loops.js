let sum = 0;

for (let i = 0; i < 6; i++) {
  sum += i;
}

console.log(sum);

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const obj = {
  name: "John",
  lastName: "Pole"
};

for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}

const arr1 = [1, 2, 3, 4, 5];

for (let el of arr1) {
  console.log(el);
}

let sum1 = 0;
let i = 0;

while (i < 5) {
  i++;
  sum1+= i;
 }

 console.log(sum1);

let sum2 = 0;
let j = 0;

 do {
  j++;
  sum2+= j;
 } while (j < 5);

 console.log(sum2);