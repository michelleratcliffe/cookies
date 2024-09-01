let count = 0;
let cookiesPerSecond = 1;
// let time = 0;
// let interval = 0;

let cookieCountDisplay = document.getElementById("cookieCount");
let timerBtn = document.getElementById("timerBtn");
let timerCPSDisplay = document.getElementById("cookiesPerSecond");

let intervalIsRunning = false;

timerBtn.addEventListener("click", function () {
  count++;
  updateUI();
  localStorage.setItem("theCount", count);
});

function updateUI() {
  cookieCountDisplay.innerText = count;
  timerCPSDisplay.innerText = cookiesPerSecond;
}

// core thing that runs every second
// THIS FUNCTION RUNS EVERY SECOND
function update() {
  cookieCount += cookiesPerSecond;
  console.log(cookieCount);
  updateUI();
}
// responsible to making update run every second
setInterval(update, 1000);

// function timeIsRunningOut() {
//   if ((intervalIsRunning = false)) {
//     clearInterval(interval);
//   } else {
//     interval = setInterval(function () {
//       cookiesPerSecond = cookiesPerSecond + 1;
//       cookieCountDisplay.innerText = cookiesPerSecond;
//     }, 1000);
//     intervalIsRunning = true;
//     // timerBtn.innerText = "Stop Timer";
//   }
// } /// NOT WORKING YET

function load() {
  if (localStorage.getItem("theCount") != null) {
    count = JSON.parse(localStorage.getItem("theCount"));
    cookieCountDisplay.innerText = count;
  }
}

load();

/*
// HAVE TO DO JSON.stringify for Objects and Arrays 
const jsonVersion = JSON.stringify(theThing)
localStorage.setItem('name', jsonVersion)

// READ VALUE
const jsonRead = localStorage.getItem('name')
const finalJS = JSON.parse(jsonRead)

*/

// FETCH  API DATA
// async function getFoxes() {
//     // we're going to the 'fetch' API to get the data
//     // need to do async await so that we just the final result (not just the promise)
//     const foxInfo = await fetch(`https://randomfox.ca/floof/`)
//     // console.log(foxInfo)
//     // parse the response
//     // okay, please read that retuned data as JSON.
//     const finalInfo = await foxInfo.json()

//     return finalInfo
// }

// // make an async function
// // const response = await fetch('yoururl')
// // const result = await response.json()

// function displayFoxes(foxImageData) {
//     console.log(foxImageData)
//     const image = document.getElementById('fox-image')
//     image.src = foxImageData.image
//     image.alt = 'A happy fox!'
// }

// async function addFoxesToPage() {
//     const thisFoxImageData = await getFoxes()
//     displayFoxes(thisFoxImageData)
// }

// addFoxesToPage()

//NOW WE HAVE AN ARRAY FOR OUR UPGRADES
// CONST UPGRADES

// LOOP THROUGH ARAY FOR UPGRADES
// GENERATE OUR HTML FROM API ARRAY

//LOOK AT THE GALLERY PROJECT

// LOOP THROUGH ARRAY
// DISPLAY ALL ELEMENTS IN HTML
// BUTTONS NEEED TO FUNCTION buy buttons

// event listener to each button
// Calls a function to handle the purchase - what we are buying
// how much cost and how many cookies per second does it add

// handle purchase = each have a cost
// CookieCount = 0   global
// Cookies per second = 0   global
// if counter == less than cost FAIL = exit early

// if you have enough cookies compare to cookieCount then subtract purchase amount from cookie count
//= cost
// increase cps - cookies per second = cps + increase SetInterval per second

// add event listener when clicking on the COOKIE - cps

//display how many of each shop item was bought......

//animation and sounds

//id
// name
//cookies
//increase

// first image of cookie to click
//set  global variables
//set up setInterval

//css animations for transform to make the cookie move
//css animation rotate image  https://codepen.io/yochans/pen/xBeRaj
