let url = "https://xkcd.now.sh/?comic=latest";
function api() {
  fetch(url)
    .then((result) => {
      console.log(result);
      return result.json();
    })
    .then((programmer) => {
      console.log(programmer);
      let image = document.createElement("img");
      let body = document.querySelector("#container");
      body.appendChild(image);
      image.setAttribute("src", programmer.img);
      console.log(programmer.img);
      image.setAttribute("alt", programmer.alt);
    })
    .catch((err) => {
      console.log(err);
    });
}
api();
