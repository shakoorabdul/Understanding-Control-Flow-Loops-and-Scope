let number = -5; // Change this value to test different outcomes

if (number > 0) {
    console.log(`${number} is positive.`);
} else if (number < 0) {
    console.log(`${number} is negative.`);
} else {
    console.log("The number is zero.");
}

let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7.");

        console.log("--- For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log(i);
    }
}

// 2. While Loop
console.log("--- While Loop ---");
let w = 1;
while (w <= 5) {
    console.log(w);
    w++;
}

// 3. Do...While Loop
console.log("--- Do...While Loop ---");
let d = 1;
do {
    console.log(d);
    d++;
} while (d <= 5);

console.log("--- Loop with break ---");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i); // Outputs: 1, 2
}

// Using continue to skip 3
console.log("--- Loop with continue ---");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i); // Outputs: 1, 2, 4, 5
}

let globalVar = "I am global!";

function testScope() {
    // Local variable - accessible only inside this function
    let localVar = "I am local to this function!";
    
    console.log("Inside function:");
    console.log(globalVar); // Works!
    console.log(localVar);  // Works!
}

// Run the function
testScope();

console.log("Outside function:");
console.log(globalVar); // Works!

try {
    console.log(localVar);
} catch (error) {
    /* console.log("Error caught: Cannot access 'localVar' outside its function scope."); */
    console.error("An error occurred:", error.message);
}
