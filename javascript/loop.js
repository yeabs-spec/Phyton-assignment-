console.log("Even numbers from 0 to 100:");
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("\nOdd numbers from 0 to 100:");
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("\nPrime numbers from 0 to 100:");
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log("\nThe sum of all numbers from 0 to 100 is", sum);

let evenSum = 0, oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log("\nThe sum of all evens from 0 to 100 is", evenSum);
console.log("The sum of all odds from 0 to 100 is", oddSum);
console.log("\nSum of evens and odds as array:", [evenSum, oddSum]);


let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100)); 
}
console.log("\nArray of 5 random numbers:", randomNumbers);


let uniqueRandomNumbers = [];
while (uniqueRandomNumbers.length < 5) {
  let randomNum = Math.floor(Math.random() * 100);
  if (!uniqueRandomNumbers.includes(randomNum)) {
    uniqueRandomNumbers.push(randomNum);
  }
}

console.log("\nArray of 5 unique random numbers:", uniqueRandomNumbers);

function generateRandomID() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 6; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

console.log("\nGenerated random ID:", generateRandomID());

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}


let rows = 5;

for (let i = 1; i <= rows; i++) {
  console.log("#".repeat(i));
}

let n = 10;

for (let i = 0; i <= n; i++) {
  console.log(i);
}
// Using for loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// Using while loop
let j = 10;
while (j >= 0) {
  console.log(j);
  j--;
}

// Using do...while loop
j = 10;
do {
  console.log(j);
  j--;
} while (j >= 0);


// Using for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Using while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// Using do...while loop
i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);