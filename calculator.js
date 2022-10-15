"use strict";

// Find DOM element and hold onto it, so we don't have to search for it
// every time we use it.
const calcForm = document.getElementById("calc-form");
const loanAmount = document.getElementById("loan-amount");
const loanYears = document.getElementById("loan-years");
const loanRate = document.getElementById("loan-rate");
const result = document.getElementById("calc-monthly-payment");


/** Get form values and return as `{amount, years, rate}`.
 *
 * Example output: `{"amount": 10000, "years": 10, "rate": 4.5}`.
 *
 * */
function getFormValues() {
  return {
    amount: Number(loanAmount.value),
    years: Number(loanYears.value),
    rate: Number(loanRate.value)
  };
};

/** Validate amount, years and rate to be positive numbers.
 *
 */
function validateInput(amount, years, rate) {
  if (amount < 0 || isNaN(amount)) {

  }
  if (years < 0 || isNaN(years)) {

  }
  if (rate < 0 || isNaN(rate)) {

  }
}


/** Calculate monthly payment and return exact amount.
 *
 * Formula: monthly payment = (p * i) / (1 - ((1 + i) ** -n))
 * p = amount of principal
 * i = periodic interest rate
 * n = total number of payments
*/

function calcMonthlyPayment(amount, years, rate) {
  let i = rate / (12 * 100);
  let p = amount;
  let n = years * 12;
  var monthlyPayment = (p * i) / (1 - ((1 + i) ** -n));
  return monthlyPayment;
}


/** Get form values, calculate, convert to 2-decimal places, and update UI. */

function getFormValuesAndDisplayResults() {
  const {amount, years, rate} = getFormValues();
  const payment = calcMonthlyPayment(amount, years, rate)
  const paymentFixed = Number(payment).toFixed(2);
  result.innerHTML = paymentFixed;
}


/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  // use the default values in the provided screenshot
  loanAmount.value = 10000;
  loanYears.value = 10;
  loanRate.value = 4.5;
  result.innerHTML = 103.64;
}


/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}
