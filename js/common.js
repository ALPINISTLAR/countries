const baseApiLink = `https://restcountries.com/v2/`,
  all = "all",
  byRegion = `region/`,
  byName = `name/`,
  byAlpha = `alpha/`;
let byFields = `?fields=name,population,region,capital,flags`;

let scrollBtn = document.querySelector(".scroll-top");

/*
    FUNCTIONS
*/

// Control Loading
function controlLoader(status = "close") {
  let loader = document.querySelector(".loader");
  if (status == "close") {
    loader.classList.add("close");
  } else {
    loader.classList.remove("close");
  }
}

// Theme Switcher Functions
const elDarkModeButton = document.querySelector('.dark-mode-toggler');
elDarkModeButton.addEventListener('click', function () {
document.body.classList.toggle('dark-mode');
});




// Error Messgaes
function notifications(
  target,
  message = "Sorry, something went wrong...",
  details = "Please try again later"
) {
  target.innerHTML = `
      <div class="notifi-wrapper">
        <h2>${message}</h2>
        <p>${details}</p>
      </div>
      `;
  target.classList.add("no-grid", "no-flex");
  controlLoader(); // Close
}

// Scroll Top
function scrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

// Toggle Scroll Top Button
function controlScrollButton() {
  if (
    (document.documentElement.scrollTop || window.pageYOffset) >=
    window.innerHeight / 2
  ) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
}

/*
    EVENTS
*/





// scrollBtn.addEventListener("click", scrollTop);
// switchBtn.addEventListener("click", () => {
//    theme = theme == "light" ? "dark" : "light";
//   chanegMode(theme, switchBtnText, switchBtnIcon);
//   localStorage.setItem("theme", theme);
// });
// window.addEventListener("load", () => {
//   let userTheme = localStorage.getItem("theme");
//   if (userTheme != null) {
//     chanegMode(userTheme, switchBtnText, switchBtnIcon);
//   }
// });
// window.addEventListener("scroll", controlScrollButton);
