'use strict';

////////////////////////////////////////////////////
// DOM  - MANIPULATION
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // Sort method
  const movsSort = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movsSort?.forEach((mov, i) => {
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
  // console.log(currentAccount);
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

// Disable / enable login boxDecorationBreak:
function loginBtnState(btn) {
  if (btn === 'disable') btnLoan.disabled = 'true';
  else if (btn === 'enabled') btnLoan.disabled = 'true';
}

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
    loginBtnState('disabled');
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
  //Condition
  const condition = currentAccount.movements.some(
    mov => mov >= amount / 10 // mov*0.1
  );
  console.log(condition);

  if (amount > 0 && condition) {
    setTimeout(function () {
      // Adding loan amount to current account array
      currentAccount.movements.push(amount);
      //Display page values
      updateUI(currentAccount);
    }, 5000);
  }

  //Set input value to empty
  inputLoanAmount.value = '';
};
btnLoan.addEventListener('click', loanRequest);

// LOG OUT - when 'btnLogout' clicked
const logout = function (e) {
  e.preventDefault();

  // if (currentAccount?.userName) {
  // Method reseting summary, balance and few more
  resetAfterLogout();
  loginBtnState('enabled');
  // }
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
    loginBtnState('enabled');
  }
  inputCloseUsername.value = inputClosePin.value = '';
};
btnClose.addEventListener('click', closeAccount);

// SORT BUTTON CLICKED
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sorted = !sorted;
  displayMovements(currentAccount.movements, sorted);
});

///
//Trening ARRAY.FROM()
// Creating array from node list
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

// labelBalance.addEventListener('click', function () {
//   const movementsUI = [...document.querySelectorAll('.movements__value')].map(
//     el => Number(el.textContent.replace('€', ''))
//   );
//   const movementsUII = [...document.querySelectorAll('.movements__value')];

//   const movementsUIII = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', '').replace(' ', ''))
//   );
//   // console.log(movementsUI);

//   console.log(movementsUI);
//   console.log(movementsUII);
//   console.log(movementsUIII);
// });
