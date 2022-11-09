let btn = document.getElementById("change-button");

let ulForImage = document.getElementById("ul-for-image");
let list = document.createElement("li");
ulForImage.appendChild(list);
let images = document.createElement("img");
list.appendChild(images);
btn.addEventListener("click", changeBtn);

function justTry() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (image) {
      console.log(image);
      console.log(image.message);
      images.setAttribute("src", image.message);
    });
}
justTry();
function changeBtn() {
  justTry();
}
