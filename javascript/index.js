let isDarkTheme = false;

const linkIconProfile = document.getElementsByClassName("icon-profile");
const buttonChangeTheme = document.getElementById("button-change-theme");
buttonChangeTheme.addEventListener("click", changeTheme);

function changeTheme() {
  isDarkTheme = !isDarkTheme;
  changeIconTheme();
  changeIconLinkProfile();
  setTheme();
  console.log(`is dark theme: ${isDarkTheme}`);
}

function changeIconTheme() {
  const iconPath = "./assets/icons/";

  const iconTheme = isDarkTheme
    ? iconPath + "dark/sun-solid.svg"
    : iconPath + "light/moon-solid.svg";

  buttonChangeTheme.setAttribute("src", iconTheme);
}

function changeIconLinkProfile() {
  const iconPath = "./assets/icons/";
  const iconGit = "github-square-brands.svg";
  const iconLikedIn = "linkedin-brands.svg";
  const iconEmail = "envelope-square-solid.svg";

  console.log(linkIconProfile[1]);

  if (isDarkTheme) {
    linkIconProfile[0].setAttribute("src", iconPath + "dark/" + iconGit);
    linkIconProfile[1].setAttribute("src", iconPath + "dark/" + iconLikedIn);
    linkIconProfile[2].setAttribute("src", iconPath + "dark/" + iconEmail);
  } else {
    linkIconProfile[0].setAttribute("src", iconPath + "light/" + iconGit);
    linkIconProfile[1].setAttribute("src", iconPath + "light/" + iconLikedIn);
    linkIconProfile[2].setAttribute("src", iconPath + "light/" + iconEmail);
  }
}

function setTheme() {
  const themeName = isDarkTheme ? "theme-dark" : "theme-light";
  document.documentElement.className = themeName;
}

setTheme();
