const url = "http://freemind1.com/wp-json/wp/v2/posts";
const sliderContainer = document.querySelector(".slider");
const loader = document.querySelector(".loading-box");

async function makeApiCall() {
  try {
    const response = await fetch(url);
    const slider = await response.json();
    createSlider();
    
  
    loader.style.display = "none";

    sliderContainer.innerHTML = "";
    slider.forEach(function (post) {
      sliderContainer.innerHTML += `
        <a href="blogsdetails.html?id=${post.id}" class="post-card" id="post-card">
          <div class="slider-card">
            <h2 class="title-hompage">${post.title.rendered}</h2>
            <img src="${post.image}" class="images" alt="image"/>
          </div>
        </a>`;
    });
  } catch (error) {
    console.log(error);
  }
}

async function createSlider() {
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

makeApiCall();