// global variable to keep track of our theme
let theme = localStorage.getItem("theme") || "dark";
// if LS theme is null, use "dark" instead   || this is the OR operator returns true if both are true or if either are true
const themeBtn = document.querySelector("button");
console.log('theme')

function setTheme() {
  // remove all classes
  document.body.classList.remove("dark");
  document.body.classList.remove("light");
  // add the relevant one
  document.body.classList.add(theme);
  console.log(theme)
}


themeBtn.addEventListener("click", function changeTheme( {
    if (theme === "dark") {
      theme = "light";
      localStorage.setItem("theme", "light");
    } else {
      theme = "dark";
      localStorage.setItem("theme", "dark");
    }
    setTheme();
    console.log("click happy");
  });



setTheme(); // always run once when the page loads
