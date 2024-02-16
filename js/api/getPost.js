const url =
  "http://freeminds.local/wp-json/wp/v2/products?acf_format=standard";
const sliderContainer = document.querySelector(".slider");
const loader = document.querySelector(".loading-box");
const arrows = document.querySelectorAll(".slider-arrow");
async function makeApiCall() {
  try {
    const response = await fetch(url);
    const slider = await response.json();
    console.log(url);
    console.log(response);
    console.log(Object);
    createSlider();
  

    sliderContainer.innerHTML = "";
    slider.forEach(function (post) {
      sliderContainer.innerHTML += `
      
      <a href="blogsdetails.html?id=${post.id}"class="post-card" id="post-card">
     <div class="slider-card">
     <h4 class="title-hompage">${post.title.rendered}</h4>
      <img src=${post.acf.image} class="images" alt"image"/>
  </div>
      </a>  
     

      `;
    });
  } catch (error) {
    console.log(error);
  }
}
makeApiCall();
