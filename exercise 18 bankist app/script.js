'use strict';
// BANKIST APP

// Data

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // let movs = movements;
  // if (sort === true) {
  //   movs = movements.slice().sort((a, b) => a - b);
  //   console.log(true);
  // }
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (movValue, i) {
    const movCase = movValue > 0 ? 'deposit' : 'withdrawal';
    const html1 = `<div class="movements__row">
    <div class="movements__type movements__type--${movCase}">${
      i + 1
    } ${movCase}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${movValue.toFixed(2)}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html1);
  });
};
// displayMovements(account1.movements);
{
  /* <div class="movements__row">
          <div class="movements__type movements__type--deposit">2 deposit</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">4 000€</div>
        </div> */
}

const calc_display_balance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance.toFixed(2)}€`;
};
// calc_display_balance(account1);

// getting initials in lowercase
const createUsername = function (accnts) {
  accnts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);

const displayInOutInterest = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov > 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};
// displayInOutInterest(account1);

const updateUI = function (currentAccount) {
  //update UI
  displayMovements(currentAccount.movements);
  calc_display_balance(currentAccount);
  displayInOutInterest(currentAccount);
};

// add event listener to btn
// if username and password correct
// Welcome (name) then showing UI
// Show all data dynamically -> movements, in out interest, total balance
// after login empty input fields also cursor from PIN

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI
    containerApp.style.opacity = 1;

    //welcome
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    //empty login fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

// inputTransferAmount, inputTransferTo, btnTransfer;

// add event listener to transfer btn
// send (-) recieve (+)
// 1 if account exists
// 2 if transfer amount > 0
// 3 if current balance >= transfer amount
// 4 if current User !== reciever user
// Update movements, in out interest, total balance
// after login empty input fields also cursor from PIN

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amountTransfer = +inputTransferAmount.value;
  const recieverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  // inputTransferTo.blur();

  if (
    recieverAccount &&
    amountTransfer > 0 &&
    currentAccount.balance >= amountTransfer &&
    currentAccount.username !== recieverAccount?.username
  ) {
    currentAccount.movements.push(-amountTransfer);
    recieverAccount.movements.push(amountTransfer);
  }

  updateUI(currentAccount);
});

// Loan Request
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

// Close Account Feature
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  // Empty Fields
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// // Error can't apply methods on Node list
// labelBalance.addEventListener('click', function () {
//   const movementsUI = document.querySelectorAll('.movements__value');
//   console.log(movementsUI);
//   console.log(movementsUI.map(el => el.textContent.replace('€', '')));
// });
console.clear();

labelBalance.addEventListener('click', function () {
  const movementsUI = [...document.querySelectorAll('.movements__value')];
  // console.log(movementsUI);
  // console.log(movementsUI.map(el => +el.textContent.replace('€', '')));
});

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => +el.textContent.replace('€', '')
  );
  // console.log(movementsUI);
  // console.log(movementsUI.map(el => el.textContent.replace('€', '')));
});

labelBalance.addEventListener('click', function () {
  const arr = [...document.querySelectorAll('.movements__row')];
  arr.forEach((row, i) => {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'grey';
    } else {
      row.style.backgroundColor = 'lightGrey';
    }
  });
});
