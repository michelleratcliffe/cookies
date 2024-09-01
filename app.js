//Set variables
let cookieCount = 0;
let cookiesPerSecond = 1;

//ARRAY FROM JSON
//id - 1 - 10
//name - auto-Clicker - Enhanced Oven - Cookie Farm
//cost - 100 - 500 - 1000
//increase - 1 - 5 - 10

// import html elements
const cookieCountDisplay = document.getElementById("cookieCount");
const cookiePerSecondDisplay = document.getElementById("cookiesPerSecond");
const cookieImage = document.getElementById("cookieBtn");
const cartStuffs = document.getElementById("cartStuffs");

// Update the cookie count when I click
cookieImage.addEventListener("click", function () {
  cookieCount++;
  var cookieCrunch = document.getElementById("cookieCrunch");
  cookieCrunch.loop = false; //play sound only once
  cookieCrunch.play();
  updateUI();
});

// this updates the html
function updateUI() {
  cookieCountDisplay.innerText = cookieCount;
  cookiePerSecondDisplay.innerText = cookiesPerSecond;
}

//LOCALSTORAGE
function updateStorage() {
  localStorage.setItem("cookieCount", cookieCount);
  localStorage.setItem("cookiesPerSecond", cookiesPerSecond);
}

// makes it tick over based on what interval is set 1000
function update() {
  cookieCount += cookiesPerSecond;
  //   console.log(cookieCount);
  updateUI();
  updateStorage();
}
// updating every second
setInterval(update, 1000);

function loadGame() {
  if (
    // if there is something in cookieCount and cookiesPerSecond then update our variables
    localStorage.getItem("cookieCount") != null &&
    localStorage.getItem("cookiesPerSecond") != null
  )
    // store the cookie information
    cookieCount = JSON.parse(localStorage.getItem("cookieCount"));
  cookiesPerSecond = JSON.parse(localStorage.getItem("cookiesPerSecond"));
}

//call when page runs to save values to localstorage
loadGame();

// Go FETCH JSON ARRAY for upgrades
async function getShopData() {
  //gets data from json
  const shopInfo = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  //gets the final data . json tells our code in what format to read the incoming data
  const finalShopInfo = await shopInfo.json();
  //   console.log(finalShopInfo);

  //   return finalShopInfo; instead of calling the upgrades
  displayUpgrades(finalShopInfo);
}

getShopData();

//this is the html generation and buy button
//and perhaps keep count of how many are bought of each upgrade
function displayUpgrades(arrayofUpgrades) {
  arrayofUpgrades.forEach(function (upgrades) {
    const nameTag = document.createElement("p");
    nameTag.innerText = upgrades.name;

    const costTag = document.createElement("p");
    costTag.innerText = upgrades.cost;

    const increaseTag = document.createElement("p");
    increaseTag.innerText = upgrades.increase;

    const buyBtn = document.createElement("button");
    buyBtn.innerText = "buy";
    buyBtn.classList.add("btnBuy");

    //innerHTML needs to be summoned
    // create empty div per element
    // then appendChild with tons of p
    cartStuffs.appendChild(nameTag);
    cartStuffs.appendChild(costTag);
    cartStuffs.appendChild(increaseTag);
    cartStuffs.appendChild(buyBtn);

    //display how many times purchased

    console.log(upgrades);
  });
}

// you can add a sound without the controls and then just call it when someone clicks on a button
// animate the cookie
