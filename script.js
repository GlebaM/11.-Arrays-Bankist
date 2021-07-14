'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//METHODS
// let arr = ['a', 'b', 'c', 'd', 'e'];
// //SLICE - don't mutate original array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE - mutate original array
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// //REVERSE - mutate original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT - don't mutate original array
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
// console.log(arr, arr2);

// //JOIN
// console.log(letters.join(' - '));

/////////////////////////////////////////
//forEach()
//

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else if (movement === 0) {
//     console.log(`Empty data log `);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else if (movement === 0) {
//     console.log(`Movement ${i + 1}: Empty data log(${movement})`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('-------FOREACH------');

// // movements.forEach(function (movement, i) {
// movements.forEach((mov, i, arr) => {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else if (mov === 0) {
//     console.log(`Movement ${i + 1}: Empty data log`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

/////////////////////////////////////////////
//FOR EACHS - MAPS and SETS
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// //SETS
// //Sets they dont have index so val and key parameters are the same
// const uniqueSetCurr = new Set(['USD', 'GBP', 'USD', 'EUR', 'USD', 'EUR']);

// uniqueSetCurr.forEach((val, key, set) => {
//   console.log(`${key}: ${val}`);
// });

/* 
Challenge 1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   //Quickest way
//   const dogsJuliaCorrected = dogsJulia.slice(1, 3);
//   // Longer way
//   // const dogsJuliaCorrected = dogsJulia.slice().splice(1, 2);
//   //Even longer JS way
//   // const dogsJuliaCorrected = dogsJulia.slice();
//   // dogsJuliaCorrected.splice(0, 1);
//   // dogsJuliaCorrected.splice(-2);
//   // console.log(dogsJuliaCorrected);
//   //Julia's and Kate's dogs concatenated
//   const dogsCombined = [...dogsJuliaCorrected, ...dogsKate];
//   //We can use concat method as well
//   // const dogsCombined = dogsJuliaCorrected.concat(dogsKate);

//   dogsCombined.forEach((dogAge, i) => {
//     if (dogAge >= 3) {
//       console.log(
//         `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
//       );
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶 at age ${dogAge}`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const calcHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   // if (age <= 2) {
//   //   return (age *= 2);
//   // } else {
//   //   return 16 + age * 4;
//   // }
//   // );
//   //Only ages above 18
//   const adults = humanAges.filter(age => age >= 18);

//   // Average age
//   //My version
//   // const average = (
//   //   adults.reduce((acc, curr) => {
//   //     return acc + curr;
//   //   }, 0) / adults.length
//   // ).toFixed(2);
//   // A bit shorter version
//   const average = adults
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
//     .toFixed(2);
//   console.log(humanAges);
//   console.log(adults);
//   return `Average ${average}`;
// };
// const avg1 = calcHumanAge([16, 6, 10, 5, 6, 1, 4]);
// const avg2 = calcHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1, avg2);

///////////////////////////////////////
// Coding Challenge #3

// Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀
// const calcHumanAge2 = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
//     .toFixed(2);
// const avg1 = calcHumanAge2([16, 6, 10, 5, 6, 1, 4]);
// const avg2 = calcHumanAge2([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1, avg2);

///////////////////////////////////////////////////
// ARRAY METHODS : MAP, FILTER, REDUCE
//MAP
// // const movementsUSD = movements.map(function (mov) {
// //   return (mov * eurToUsd).toFixed();
// // });
// //The same as
// const movementsUSD = movements.map(mov => (mov * eurToUsd).toFixed());

// console.log(movements);
// console.log(movementsUSD);

// // Using for of loop

// const movementsUsdfor = [];
// for (const mov of movements) movementsUsdfor.push((mov * eurToUsd).toFixed());
// console.log(movementsUsdfor);

// const movementsDescript = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
//   // if (mov > 0) {
//   //   return `Movement ${i + 1}: You deposited ${mov}`;
//   // } else if (mov === 0) {
//   //   return `Movement ${i + 1}: Empty data log`;
//   // } else {
//   //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   // }
// );
// console.log(movementsDescript);

// //FILTER METHOD
// const deposits = movements.filter(mov => {
//   return mov > 0;
// });
// console.log(deposits);
// // Filter is easier than for of
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrews = movements.filter(mov => mov < 0);
// console.log(withdrews);

// // REDUCE METHOD
// //With reduce
// const balance = movements.reduce((acc, curr, i) => {
//   console.log(`Iteration nr ${i}: ${curr}, balance ${acc + curr}`);
//   return acc + curr;
// }, 0);
// console.log(balance);

// //With for of
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

//Reduce - max value
// const maxValue = function (acc) {
//   return acc.reduce((acc, mov) => (acc < mov ? mov : acc), acc[0]);
// };
// console.log(maxValue(movements));

//Reduce - evaluate max value
// console.log(maxValue(movements));
// console.log(maxValue(account2.movements));
// console.log(maxValue(account3.movements));
// console.log(maxValue(account4.movements));

////////////////////////////////////////
//CHAINING METHODS - lesson
//PIPELINE
// const usdToEur = 0.84;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   // .map((mov, i, arr) => {
//   //   console.log(arr);
//   //   return mov * eurToUsd;
//   // })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD.toFixed(2));

///////////////////////////////////////
//FIND()
// const firstWithdrawal = movements.find(mov => mov < 0);
// // console.log(movements);
// // console.log(firstWithdrawal);
// const account = accounts.find(acc => acc.userName === 'jd');
// console.log(account);

////////////////////////////////////////////////////
// DOM  - MANIPULATION
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnLogout = document.querySelector('.login__logout');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//// METHODS
//Display methods
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements?.forEach((mov, i) => {
    // consosle.log(i + 1 + ' : ' + mov);
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
          <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type.toUpperCase()}</div>
            <div class="movements__value">${mov} €</div>
          </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//Calculate and Display balance
const calcDisplayBallance = function (acc) {
  // accs.forEach((acc, i) => {
  // acc.ballance = acc.movements.reduce((acc, curr) => acc + curr);
  // });
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  typeof acc.balance;
  labelBalance.textContent = `${acc.balance} €`;
};

//Calculate and Display summary
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes + '€';

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  // My way - a lot shorter
  // const interests = movements
  //   .filter(mov => mov > 0)
  //   .reduce((acc, mov) => {
  //     return mov > currentAccount.interestRate*100 ? acc + (mov * currentAccount.interestRate) / 100 : acc;
  //   }, 0);
  // labelSumInterest.textContent = interests + '€';
  console.log(currentAccount);
  // Jonas way for reduce
  const interests = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * currentAccount.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, mov, i, arr) => {
      // console.log(arr);
      return acc + mov;
    }, 0);
  labelSumInterest.textContent = interests.toFixed(2) + '€';
};
//// METHODS
// Utility/complementary methods

//Computing usernames using map/ and others array methods
const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// Method returns account we look for using obj.userName value
const findAccount = function (value) {
  return accounts.find(acc => acc.userName === value);
};

// Method reseting summary, balance and few more
const resetAfterLogout = function () {
  containerApp.style.opacity = 0;
  labelWelcome.textContent = `Log in to get started`;
  currentAccount = '';
  containerMovements.innerHTML = '';
  btnLogout.classList.add('hide');
  labelBalance.textContent = `0000 €`;
  labelSumIn.textContent = '0000€';
  labelSumOut.textContent = `0000€`;
  labelSumInterest.textContent = '0000€';
};

//////////////////////////////////////
//LOGIN APPLICATION
///////////////////////////////////////////////////////////////
/// DISPLAYING REAL APP
// 'let currentAccount' stores current account
let currentAccount;

// DISPLAY ALL VALUES ON SCREEN
const updateUI = function (currAcc) {
  //Display movements
  displayMovements(currAcc.movements);
  //Display ballance
  calcDisplayBallance(currAcc);
  //Display Summary
  calcDisplaySummary(currAcc.movements);
};

///////////////////////////////////////////
//EVENT HANDLERS
// LOG IN - when 'btnLogin' clicked
const logIn = function (e) {
  e.preventDefault();

  //Find and update currentAccount
  currentAccount = findAccount(inputLoginUsername.value);
  // console.log(currentAccount);

  //If currentAcc is undefined or null nothing will happened
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Reset login details - clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
    btnLogout.classList.remove('hide');
  }
};
btnLogin.addEventListener('click', logIn);

/// TRANSFER MONEY FROM USER TO RECIPIENT - when 'btnTransfer' clicked
const transferAction = function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const transferRecipient = findAccount(inputTransferTo.value);

  //Clear input fields
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
  if (
    amount > 0 &&
    transferRecipient.owner &&
    currentAccount.balance >= amount &&
    transferRecipient !== currentAccount
  ) {
    // Doing the transfer
    transferRecipient.movements.push(amount);
    currentAccount.movements.push(-amount);
    console.log(transferRecipient);
  }

  //Display page values
  updateUI(currentAccount);
};
btnTransfer.addEventListener('click', transferAction);

// LOAN REQUEST when 'btnLoan' clicked
const loanRequest = function (e) {
  e.preventDefault();
  //Clear input fields
  inputLoanAmount.blur();

  // Loan amount
  const amount = Number(inputLoanAmount.value);

  if (amount > 0) {
    setTimeout(function () {
      // Adding loan amount to current account array
      currentAccount.movements.push(amount);
      //Set input value to empty
      inputLoanAmount.value = '';
      //Display page values
      updateUI(currentAccount);
    }, 5000);
  }
};
btnLoan.addEventListener('click', loanRequest);

// LOG OUT - when 'btnLogout' clicked
const logout = function (e) {
  e.preventDefault();
  if (currentAccount?.userName) {
    // Method reseting summary, balance and few more
    resetAfterLogout();
  }
};
btnLogout.addEventListener('click', logout);

// CLOSE ACCOUNT - when 'btnClose' clicked
const closeAccount = function (e) {
  e.preventDefault();
  if (
    // currentAccount?.userName &&
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(acc => acc === currentAccount);
    // Delete account
    accounts.splice(index, 1);
    // Method reseting summary, balance and few more
    resetAfterLogout();
  }
  inputCloseUsername.value = inputClosePin.value = '';
};
btnClose.addEventListener('click', closeAccount);
