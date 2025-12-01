
const apiKey = "https://open.er-api.com/v6/latest/USD";
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const resultBox = document.getElementById("result");
const spinner = document.querySelector(".spinner");
const swapBtn = document.getElementById("swapBtn");

let rates = {};

// Load currency list
async function loadCurrencies() {
  spinner.style.display = "block";
  try {
    const res = await fetch(apiKey);
    const data = await res.json();
    console.log(data);
    rates = data.rates;

    const currencyList = Object.keys(rates);

    currencyList.forEach(c => {
      fromCurrency.innerHTML += `<option value="${c}">${c}</option>`;
      toCurrency.innerHTML += `<option value="${c}">${c}</option>`;
    });

    fromCurrency.value = "USD";
    toCurrency.value = "PHP";

  } catch (error) {
    alert("Failed to load currency data.");
  } finally {
    spinner.style.display = "none";
  }
}

loadCurrencies();

// Swap feature
swapBtn.addEventListener("click", () => {
  let temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
});

// Convert currency
document.getElementById("converterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let amount = parseFloat(document.getElementById("amount").value);
  let from = fromCurrency.value;
  let to = toCurrency.value;

  if (!amount || amount <= 0) {
    resultBox.textContent = "Please enter a valid amount.";
    return;
  }

  spinner.style.display = "block";

  setTimeout(() => {
    let converted = (amount / rates[from]) * rates[to];
    resultBox.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
    spinner.style.display = "none";
  }, 700);
});
