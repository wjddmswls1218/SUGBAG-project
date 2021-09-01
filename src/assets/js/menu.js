const menuClickHandler = (receiveId) => {
  menuBox = document.getElementById("menuBox-js");

  if (menuBox.style.display === "flex") {
    menuBox.style.display = "none";
  } else {
    menuBox.style.display = "flex";
  }
};
