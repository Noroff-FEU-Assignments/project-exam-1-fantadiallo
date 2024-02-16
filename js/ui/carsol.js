function createHTML() {
  loader.style.display = "none";
  const arrows = document.querySelectorAll(".slider-arrow");
}

function createSlider() {
  const slidesContainer = document.querySelector("#slider");
  const prevButton = document.querySelector("#arrow-prev");
  const nextButton = document.querySelector("#arrow-next");

  nextButton.addEventListener("click", () => {
    slidesContainer.scrollBy({
      left: slidesContainer.offsetWidth,
    });
  });

  prevButton.addEventListener("click", () => {
    slidesContainer.scrollBy({
      left: -slidesContainer.offsetWidth,
    });
  });
}
createSlider();

