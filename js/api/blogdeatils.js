const detailContainer = document.querySelector(".blog-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "http://freemind1.com/wp-json/wp/v2/products/" + id + "?acf_format=standard";

async function Getblogs() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const details = await response.json();
    if (!details) {
      throw new Error('Failed to parse response data');
    }
    createHTML(details);
  } catch (error) {
    console.error('An error occurred:', error);
   
    detailContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
Getblogs()


function createHTML(details) {
  detailContainer.innerHTML = `
    <div class="detailContainermain">
      <img src="${details.acf.image}" alt="image" class="bildedetail" id="myBtn">
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <img src="${details.acf.image}" alt="image">
        </div>
      </div>
      <h1>${details.title.rendered}</h1>
      <p class="summary">${details.acf.summary}</p>
    </div>
  `;

  const modal = document.getElementById("myModal");
  const img = document.getElementById("myBtn");
  const closeBtn = document.querySelector(".close");

  img.addEventListener("click", function() {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}