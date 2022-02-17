// Using JQuery
let isDarkTheme = false;

$(document).ready(() => {
  onLoad();
});

function onLoad() {
  console.log("JQuery running");

  $(":root").addClass("theme-light");

  $(".icon-profile").each((index, item) => {
    $(item).attr("src", getIconLinkProfile(index));
  });

  $("#button-change-theme").on("click", toggleTheme);
}

function toggleTheme() {
  isDarkTheme = !isDarkTheme;

  $(":root").toggleClass("theme-dark");

  $(".icon-profile").each((index, item) => {
    $(item).attr("src", getIconLinkProfile(index));
  });

  $("#button-change-theme").attr("src", getIconTheme());
}

function getIconTheme() {
  const iconPath = "./assets/icons/";

  const iconTheme = isDarkTheme
    ? iconPath + "dark/sun-solid.svg"
    : iconPath + "light/moon-solid.svg";

  return iconTheme;
}

function getIcon(index) {
  const iconGit = "github-square-brands.svg";
  const iconLikedIn = "linkedin-brands.svg";
  const iconEmail = "envelope-square-solid.svg";

  switch (index) {
    case 0:
      return iconGit;
    case 1:
      return iconLikedIn;
    case 2:
      return iconEmail;
    default:
      return null;
  }
}

function getIconLinkProfile(index) {
  const iconPath = "./assets/icons/";

  let icon = getIcon(index);

  if (isDarkTheme) {
    return iconPath + "dark/" + icon;
  } else {
    return iconPath + "light/" + icon;
  }
}
