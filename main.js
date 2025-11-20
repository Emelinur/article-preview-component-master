const shareBtn = document.getElementById("btn_share");
const card = document.querySelector(".card");

shareBtn.addEventListener("click", () => {
  card.classList.toggle("card--share-open");
});
