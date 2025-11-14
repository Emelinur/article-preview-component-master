let btn_share = document.querySelector("#btn_share");
let share_popover = document.querySelector(".share-popover");

btn_share.addEventListener("click", () => {
  if (share_popover.style.display === "flex") {
    share_popover.style.display = "none";
  } else {
    share_popover.style.display = "flex";
  }
});
