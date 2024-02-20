const url = "http://freemind1.com/wp-json/wp/v2/products?acf_format=standard";
const blogContainer = document.querySelector(".blogs");
const loadMoreBtn = document.getElementById("load-more-btn");
const loader = document.querySelector(".loading-box");
const goUp = document.getElementById("backtop");

let page = 1;
const perPage = 5;

async function GetBlogs() {
  try {
    loader.style.display = "block"; 

    const response = await fetch(`${url}&page=${page}&per_page=${perPage}`);
    const blogs = await response.json();

    if (blogs.length === 0) {
      loadMoreBtn.style.display = "none";
      return;
    }

    blogs.forEach(function (blog) {
      blogContainer.innerHTML += `
        <a href="blogsdetails.html?id=${blog.id}" class="blogs-card">
         
        <h2 class="tit2">${blog.title.rendered}</h2>
        <div class="blogcard-imgcontainer">
            <img src="${blog.acf.image}" class="imagesallblogs" alt="image"/>
            <div>
              <p class="dates" id="date">${blog.date_gmt}</p>
            </div>
          </div>
          <div class="loremblog">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi provident veniam, explicabo harum labore corporis minima quibusdam, perspiciatis cumque aspernatur, maxime ex similique iure veritatis. Voluptas possimus temporibus vitae quisquam!
         
          </div>
          <div class="read2">
          read more
          </div >
        </a>
      `;
    });

    page++;
  } catch (error) {
    console.error(error);
  } finally {
    loader.style.display = "none";
    
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 16 || document.documentElement.scrollTop > 16) {
    goUp.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

goUp.addEventListener("click", function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
});
  }
}

loadMoreBtn.addEventListener("click", GetBlogs);

GetBlogs();

