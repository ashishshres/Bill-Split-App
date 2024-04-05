// bill inputs
let inputAmount = document.querySelector("#input-amount");
let tipBtns = document.querySelectorAll(".tip-btns");
let customTip = document.querySelector("#custom-tip");
let people = document.querySelector("#people");

// bill outputs
let tipValue = document.querySelector(".tip-value");
let totalValue = document.querySelector(".total-value");
let personBill = document.querySelector(".person-bill");

// generate bill button
let generateBill = document.querySelector(".generate-bill");

// values
let inputAmountVal = parseFloat(inputAmount.value);
let tipAmountVal = 0;
