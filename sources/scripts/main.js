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

tipBtns.forEach((tipbtn) => {
  tipbtn.addEventListener("click", (e) => {
    tipAmountVal = parseFloat(e.target.value);
    customTip.value = "";
    console.log(tipAmountVal);
  });
});

function totalTipAmount() {
  if (!customTip.value) {
    return tipAmountVal.toFixed(2);
  } else {
    return parseFloat(customTip.value).toFixed(2);
  }
}

function totalBill() {
  let total;
  if (!customTip.value) {
    total =
      parseFloat(inputAmount.value) +
      (tipAmountVal / 100) * parseFloat(inputAmount.value);
  } else {
    total =
      parseFloat(inputAmount.value) +
      (parseFloat(customTip.value) / 100) * parseFloat(inputAmount.value);
  }
  return total.toFixed(2);
}

function perPersonBill() {
  return (totalBill() / parseInt(people.value)).toFixed(2);
}
