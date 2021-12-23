//get all dom elements
const currencyOneEl = document.getElementById("currencylist-one");
const currencyTwoEl = document.getElementById("currencylist-two");
const amountOneEl = document.getElementById("amount-one");
const amountTwoEl = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swapEl = document.getElementById("swap");

//add event listener for each dom element
currencyOneEl.addEventListener("change", calculate);
currencyTwoEl.addEventListener("change", calculate);
amountOneEl.addEventListener("input", calculate);
amountTwoEl.addEventListener("input", calculate);

//create the calculate function and fetch the Api
function calculate (){
    const currencyOne = currencyOneEl.value;
    const currencyTwo = currencyTwoEl.value;

    fetch(`https://v6.exchangerate-api.com/v6/84c306f5a635585af0eb4ed2/latest/${currencyOne}`)
    .then((res) => res.json ())
    .then((data) => {
        // console.log(data);
        const rate = data.conversion_rates[currencyTwo];
        rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`
        amountTwoEl.value = amountOneEl.value * rate
    });
}

//create a swap when swap button is clicked
swapEl.addEventListener("click", ()=>{
    disguise = currencyOneEl.value;
    currencyOneEl.value = currencyTwoEl.value;
    currencyTwoEl.value = disguise;
    calculate();
})
calculate();