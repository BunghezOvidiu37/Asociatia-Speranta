

new hoverEffect({
  parent: document.querySelector(".container-cover"),
  intensity: 0.2,
  image1: "./produse/promovare/pro-no-background.png",
  image2: "./produse/promovare/pro1.jpg",
  displacementImage: "produse/promovare/cloud.png",
});

new hoverEffect({
  parent: document.querySelector("#colier-hover-one"),
  intensity: 0.2,
  image1: "./produse/promovare/altele/colier-pro-3.jpg",
  image2: "./produse/promovare/altele/colier-pro-4.jpg",
  displacementImage: "produse/promovare/cloud.png",
});

new hoverEffect({
  parent: document.querySelector("#colier-hover-two"),
  intensity: 0.2,
  image1: "./produse/promovare/altele/colier-pro-5.jpg",
  image2: "./produse/promovare/altele/colier-pro-6.jpg",
  displacementImage: "produse/promovare/cloud.png",
});

new hoverEffect({
  parent: document.querySelector("#colier-hover-three"),
  intensity: 0.2,
  image1: "./produse/promovare/altele/floare1.jpg",
  image2: "./produse/promovare/trandafir3.jpg",
  displacementImage: "produse/promovare/cloud.png",
});

new hoverEffect({
  parent: document.querySelector("#colier-hover-four"),
  intensity: 0.2,
  image1: "./produse/promovare/trandafir1.jpg",
  image2: "./produse/promovare/trandafir2.jpg",
  displacementImage: "produse/promovare/cloud.png",
});

new hoverEffect({
  parent: document.querySelector("#colier-hover-five"),
  intensity: 0.2,
  image1: "./produse/promovare/papion2.jpg",
  image2: "./produse/promovare/papion1.jpg",
  displacementImage: "produse/promovare/cloud.png",
});

new hoverEffect({
  parent: document.querySelector("#colier-hover-six"),
  intensity: 0.2,
  image1: "./produse/promovare/margele2.jpg",
  image2: "./produse/promovare/margele1.jpg",
  displacementImage: "produse/promovare/cloud.png",
});


// !dropdown

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log("cacat");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}