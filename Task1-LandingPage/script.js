// ------------------------------- SLIDESHOW -------------------------
var slideImg = document.getElementById("slideImg");

var images = new Array(
  "images/image1.png",
  "images/image2.png",
  "images/image3.png",
  "images/image5.png"
);

let len = images.length;
var i = 0;

function slider() {
  if (i > len - 1) {
    i = 0;
  }
  slideImg.src = images[i];
  i++;
  setTimeout('slider()', 6000);
}
// ----------------------------------------- RIGHT-LEFT ARROW ------------------------------
clientImages = ["images/t-image1.png", "images/t-image2.jpg", "images/t-image3.jpg"]
content = [
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente reiciendis quia autem eum nesciunt. `,
    author: '- Hello World, Client',
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente reiciendis quia autem eum nesciunt.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Aliquid, deleniti. Lorem ipsum dolor sit amet.`,
    author: '- Adam Williams, Instructor',
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente reiciendis quia autem eum nesciunt.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    author: '- John Doe, Client',
  },
]

const clientContent = document.getElementById("clientContent");
let currentImageIndex = 0;

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = clientImages.length - 1;
  }
  else if (currentImageIndex >= clientImages.length) {
    currentImageIndex = 0;
  }
  const clientImg = document.querySelector(".clientimg");
  clientImg.style.opacity = 0;

  setTimeout(() => {
    clientImg.src = clientImages[currentImageIndex];
    clientImg.style.opacity = 1;
  }, 500);

  clientContent.style.opacity = 0;
  setTimeout(() => {
    const currentContent = content[currentImageIndex];
    clientContent.innerHTML = `
      <span>
        ${currentContent.text}
      </span>
      <br>
      ${currentContent.author}
    `;
    clientContent.style.opacity = 1;
  }, 500);
}
