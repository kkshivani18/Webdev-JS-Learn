const BASE_URL = "https://v1.nocodeapi.com/rayan2228/cx/LPHapxmkyFYalsnp/rates/convert";
    //  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
//"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
     

// https://v1.nocodeapi.com/rayan2228/cx/LPHapxmkyFYalsnp/rates/convert?amount=100&from=USD&to=INR     
  

  const dropdowns = document.querySelectorAll(".dropdown select");
  const btn = document.querySelector("form button");
  const fromCurr = document.querySelector(".from select");
  const toCurr = document.querySelector(".to select");
  const msg = document.querySelector(".msg");
  
for(let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name == "from" && currCode == "USD") {
            newOption.selected = "selected";
        }
        else if (select.name == "to" && currCode == "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }

    // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}`;
    // https://v1.nocodeapi.com/rayan2228/cx/LPHapxmkyFYalsnp/rates/convert?amount=100&from=USD&to=INR;
    //    const URL =`${BASE_URL}&from=${fromCurr.value.toLowerCase()}&to={toCurr.value.toLowerCase()}`;
    // await fetch(`https://v1.nocodeapi.com/rayan2228/cx/LPHapxmkyFYalsnp/rates/convert?amount=100&from=${currencyOneVal}&to=${currencyTwoVal}`).then(response => response.json()).then(result => {
    // showValue(result)
    
    const URL = `${BASE_URL}?amount=${amtVal}&from=${fromCurr.value}&to=${toCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    // jsonEle = `${BASE_URL}?amount=${amtVal}&from=${fromCurr.value}&to=${toCurr.value}`;
    // j1 = JSON.parse(data)
    let rate = data.info.rate;
  
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  };
  
  const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  };
  
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
  });
  
  
