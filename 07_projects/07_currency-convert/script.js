const apiKey = "8523bb94d71cb8a79f04c2fc"; // Your API Key
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convert-btn");
const resultDiv = document.getElementById("result");

// Fetch currency list and populate dropdowns
async function populateCurrencies() {
  try {
    const response = await fetch(apiURL + "USD"); // Using USD as the base currency
    const data = await response.json();
    const currencies = Object.keys(data.conversion_rates);

    currencies.forEach((currency) => {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");
      option1.value = currency;
      option1.textContent = currency;
      option2.value = currency;
      option2.textContent = currency;
      fromCurrency.appendChild(option1);
      toCurrency.appendChild(option2);
    });

    // Set default selections
    fromCurrency.value = "USD";
    toCurrency.value = "INR";
  } catch (error) {
    console.error("Error fetching currency list:", error);
  }
}

// Convert currency
async function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  try {
    const response = await fetch(apiURL + from);
    const data = await response.json();

    const rate = data.conversion_rates[to];
    const convertedAmount = (amount * rate).toFixed(2);

    resultDiv.textContent = `Converted Amount: ${convertedAmount} ${to}`;
  } catch (error) {
    console.error("Error converting currency:", error);
    resultDiv.textContent = "Error converting currency. Please try again.";
  }
}

// Event listeners
convertBtn.addEventListener("click", convertCurrency);


// Trigger conversion on pressing "Enter"
amountInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    convertCurrency();
  }
});


// Initialize dropdowns
populateCurrencies();
