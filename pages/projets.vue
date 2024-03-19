<template>
    <div class="container-menu">
            <div class="photo-menu">
                <div class="click fav" id="1">
                    <div class="text" onclick="clickFav()">Favoris</div>
                    <div class="line-div"><span class="line"></span></div>
                    <div class="details"><span class="details-text" onclick="favSection()">details</span></div>
                </div>
                <div class="click shoot" id="2">
                    <div class="text" onclick="clickShoot()">Shootings</div>
                    <div class="line-div"><span class="line"></span></div>
                    <div class="details"><span class="details-text" onclick="shootSection()">details</span></div>
                </div>
                <div class="click debut" id="3">
                    <div class="text" onclick="clickDebut()">Mes débuts</div>
                    <div class="line-div"><span class="line"></span></div>
                    <div class="details"><span class="details-text" onclick="debutSection()">details</span></div>
                </div>
                <div class="click flower" id="4">
                    <div class="text" onclick="clickFlower()">Fleurs</div>
                    <div class="line-div"><span class="line"></span></div>
                    <div class="details"><span class="details-text" onclick="flowerSection()">details</span></div>
                </div>
            </div>
            <div class="photos">
                <div class="photo photo-fav photo1"><img src="./assets/images/1 (33).jpg" alt="" srcset=""></div>
                <div class="photo photo-fav photo2"><img src="./assets/images/1 (1).jpg" alt="" srcset=""></div>
                <div class="photo photo-fav photo3"><img src="./assets/images/1 (36).jpg" alt="" srcset=""></div>
                <div class="photo photo-fav photo4"><img src="./assets/images/1 (34).jpg" alt="" srcset=""></div>
                <div class="photo photo-fav photo5"><img src="./assets/images/1 (2).jpg" alt="" srcset=""></div>
                <div class="photo photo-fav photo6"><img src="./assets/images/1 (35).jpg" alt="" srcset=""></div>

                <div class="photo photo-shoot photo1"><img src="./assets/images/1 (14).jpg" alt="" srcset=""></div>
                <div class="photo photo-shoot photo2"><img src="./assets/images/1 (15).jpg" alt="" srcset=""></div>
                <div class="photo photo-shoot photo3"><img src="./assets/images/1 (95).jpg" alt="" srcset=""></div>
                <div class="photo photo-shoot photo4"><img src="./assets/images/1 (83).jpg" alt="" srcset=""></div>
                <div class="photo photo-shoot photo5"><img src="./assets/images/1 (10).jpg" alt="" srcset=""></div>
                <div class="photo photo-shoot photo6"><img src="./assets/images/1 (4).jpg" alt="" srcset=""></div>

                <div class="photo photo-debut photo1"><img src="./assets/images/1 (47).jpg" alt="" srcset=""></div>
                <div class="photo photo-debut photo2"><img src="./assets/images/1 (44).jpg" alt="" srcset=""></div>
                <div class="photo photo-debut photo3"><img src="./assets/images/1 (43).jpg" alt="" srcset=""></div>
                <div class="photo photo-debut photo4"><img src="./assets/images/1 (39).jpg" alt="" srcset=""></div>
                <div class="photo photo-debut photo5"><img src="./assets/images/1 (38).jpg" alt="" srcset=""></div>
                <div class="photo photo-debut photo6"><img src="./assets/images/1 (32).jpg" alt="" srcset=""></div>

                <div class="photo photo-flower photo1"><img src="./assets/images/1 (53).jpg" alt="" srcset=""></div>
                <div class="photo photo-flower photo2"><img src="./assets/images/1 (3).jpg" alt="" srcset=""></div>
                <div class="photo photo-flower photo3"><img src="./assets/images/1 (56).jpg" alt="" srcset=""></div>
                <div class="photo photo-flower photo4"><img src="./assets/images/1 (58).jpg" alt="" srcset=""></div>
                <div class="photo photo-flower photo5"><img src="./assets/images/1 (60).jpg" alt="" srcset=""></div>
                <div class="photo photo-flower photo6"><img src="./assets/images/1 (50).jpg" alt="" srcset=""></div>
            </div>
        </div>
</template>

<script>
// var photos = document.querySelectorAll(".photo");
var photos = document.querySelector(".photos");
var slider = document.querySelectorAll(".slider");
var allPhotos = document.querySelectorAll(".photo");
var fav = document.querySelector(".fav");
var shoot = document.querySelector(".shoot");
var debut = document.querySelector(".debut");
var flower = document.querySelector(".flower");
var click = document.querySelectorAll(".text");
var photoFav = document.querySelectorAll(".photo-fav");
var photoShoot = document.querySelectorAll(".photo-shoot");
var photoDebut = document.querySelectorAll(".photo-debut");
var photoFlower = document.querySelectorAll(".photo-flower");
var line = document.querySelectorAll(".line");
var details = document.querySelectorAll(".details");
var detailsText = document.querySelectorAll(".details-text");

// selectionne tout les nav-link et ajoute la class active au click sur le bouton correspondant au menu selectionné et retire la class active des autres boutons
var navLink = document.querySelectorAll(".nav-link");
for (i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

window.onload = function () {
  for (i = 0; i < allPhotos.length; i++) {
    allPhotos[i].style.animation = " taile 0.5s ease-in-out";
  }
  console.log("La page est chargée !");
};
// Transitions lors du changement de menu
function clickFav() {
  for (i = 0; i < detailsText.length; i++) {
    detailsText[0].style.transform = "translateY(0)";
    detailsText[0].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[0].style.visibility = "visible";
  }
  for (i = 0; i < detailsText.length; i++) {
    detailsText[1].style.transform = "translateY(-10vh)";
    detailsText[1].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[1].style.visibility = "hidden";
  }
  for (i = 0; i < detailsText.length; i++) {
    detailsText[2].style.transform = "translateY(-10vh)";
    detailsText[2].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[2].style.visibility = "hidden";
  }
  for (i = 0; i < detailsText.length; i++) {
    detailsText[3].style.transform = "translateY(-10vh)";
    detailsText[3].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[3].style.visibility = "hidden";
  }

  for (i = 0; i < photoShoot.length; i++) {
    // photoShoot[i].style.transition = "none";
    // photoShoot[i].style.visibility = "hidden";
    photoShoot[i].style.transform = "translateY(-100vh)";
  }
  for (i = 0; i < photoDebut.length; i++) {
    // photoDebut[i].style.transition = "none";
    // photoDebut[i].style.visibility = "hidden";
    photoDebut[i].style.transform = "translateY(-100vh)";
  }
  for (i = 0; i < photoFlower.length; i++) {
    // photoFlower[i].style.transition = "none";
    // photoFlower[i].style.visibility = "hidden";
    photoFlower[i].style.transform = "translateY(-100vh)";
  }
  for (i = 0; i < photoFav.length; i++) {
    photoFav[0].style.transform = "translateY(0)";
    photoFav[0].style.transition = "all 1.4s cubic-bezier(.93,0,.45,1)";
    photoFav[1].style.transform = "translateY(0)";
    photoFav[1].style.transition = "all 1.5s cubic-bezier(.93,0,.45,1)";
    photoFav[2].style.transform = "translateY(0)";
    photoFav[2].style.transition = "all 1.6s cubic-bezier(.93,0,.45,1)";
    photoFav[3].style.transform = "translateY(0)";
    photoFav[3].style.transition = "all 1.7s cubic-bezier(.93,0,.45,1)";
    photoFav[4].style.transform = "translateY(0)";
    photoFav[4].style.transition = "all 0.9s cubic-bezier(.93,0,.45,1)";
    photoFav[5].style.transform = "translateY(0)";
    photoFav[5].style.transition = "all 1.8s cubic-bezier(.93,0,.45,1)";
    photoFav[i].style.visibility = "visible";
  }
  // photos.style.marginTop = "0";
  // au click mettre en opacity 0 photo 1,2 et 3
}
// rendre visible le slider 1 au click et le rendre invisible au click sur le bouton suivant
function clickShoot() {
  console.log("shoot");
  for (i = 0; i < detailsText.length; i++) {
    detailsText[1].style.transform = "translateY(0)";
    detailsText[1].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[1].style.visibility = "visible";
  }
  for (i = 0; i < detailsText.length; i++) {
    detailsText[0].style.transform = "translateY(-10vh)";
    detailsText[0].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[0].style.visibility = "hidden";
  }
  for (i = 0; i < detailsText.length; i++) {
    detailsText[2].style.transform = "translateY(-10vh)";
    detailsText[2].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[2].style.visibility = "hidden";
  }
  for (i = 0; i < detailsText.length; i++) {
    detailsText[3].style.transform = "translateY(-10vh)";
    detailsText[3].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[3].style.visibility = "hidden";
  }

  for (i = 0; i < photoFav.length; i++) {
    // photoFav[i].style.transition = "none";
    photoFav[i].style.transform = "translateY(-100vh)";
    photoFav[i].style.transition = "all 1.4s cubic-bezier(.93,0,.45,1)";

    // photoFav[i].style.animation = " taile2 0.5s";
    // photoFav[i].style.visibility = "hidden";
    // au bout de 2 secondes et faore un translate de photoFav de -100vh
  }
  for (i = 0; i < photoDebut.length; i++) {
    // photoDebut[i].style.transition = "none";
    // photoDebut[i].style.visibility = "hidden";
    photoDebut[i].style.transform = "translateY(-100vh)";
  }
  for (i = 0; i < photoFlower.length; i++) {
    // photoFlower[i].style.transition = "none";
    // photoFlower[i].style.visibility = "hidden";
    photoFlower[i].style.transform = "translateY(-100vh)";
  }
  for (i = 0; i < photoShoot.length; i++) {
    // photoShoot[i].style.transition = "all 1s cubic-bezier(.93,0,.45,1)";
    photoShoot[0].style.transform = "translateY(0)";
    photoShoot[0].style.transition = "all 1.4s cubic-bezier(.93,0,.45,1)";
    photoShoot[1].style.transform = "translateY(0)";
    photoShoot[1].style.transition = "all 1.5s cubic-bezier(.93,0,.45,1)";
    photoShoot[2].style.transform = "translateY(0)";
    photoShoot[2].style.transition = "all 1.6s cubic-bezier(.93,0,.45,1)";
    photoShoot[3].style.transform = "translateY(0)";
    photoShoot[3].style.transition = "all 1.7s cubic-bezier(.93,0,.45,1)";
    photoShoot[4].style.transform = "translateY(0)";
    photoShoot[4].style.transition = "all 0.9s cubic-bezier(.93,0,.45,1)";
    photoShoot[5].style.transform = "translateY(0)";
    photoShoot[5].style.transition = "all 1.8s cubic-bezier(.93,0,.45,1)";
    photoShoot[i].style.visibility = "visible";
    photoShoot[i].style.transform = "translateY(0)";
  }
}
function clickDebut() {
  for (i = 0; i < detailsText.length; i++) {
    detailsText[2].style.transform = "translateY(0)";
    detailsText[2].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[2].style.visibility = "visible";
  }
  for (i = 0; i < detailsText.length; i++) {
    detailsText[1].style.transform = "translateY(-10vh)";
    detailsText[1].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[1].style.visibility = "hidden";
  }
  for (i = 0; i < detailsText.length; i++) {
    detailsText[0].style.transform = "translateY(-10vh)";
    detailsText[0].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[0].style.visibility = "hidden";
  }
  for (i = 0; i < detailsText.length; i++) {
    detailsText[3].style.transform = "translateY(-10vh)";
    detailsText[3].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[3].style.visibility = "hidden";
  }

  console.log("debut");
  for (i = 0; i < photoFav.length; i++) {
    // photoFav[i].style.transition = "none";
    photoFav[i].style.transform = "translateY(-100vh)";
    photoFav[i].style.transition = "all 1.4s cubic-bezier(.93,0,.45,1)";
    // photoFav[i].style.visibility = "hidden";
  }
  for (i = 0; i < photoShoot.length; i++) {
    // photoShoot[i].style.transition = "none";
    // photoShoot[i].style.visibility = "hidden";
    photoShoot[i].style.transform = "translateY(-100vh)";
  }
  for (i = 0; i < photoFlower.length; i++) {
    // photoFlower[i].style.transition = "none";
    // photoFlower[i].style.visibility = "hidden";
    photoFlower[i].style.transform = "translateY(-100vh)";
  }
  for (i = 0; i < photoDebut.length; i++) {
    // photoDebut[i].style.transition = "all 1s cubic-bezier(.93,0,.45,1)";
    photoDebut[0].style.transform = "translateY(0)";
    photoDebut[0].style.transition = "all 1.4s cubic-bezier(.93,0,.45,1)";
    photoDebut[1].style.transform = "translateY(0)";
    photoDebut[1].style.transition = "all 1.5s cubic-bezier(.93,0,.45,1)";
    photoDebut[2].style.transform = "translateY(0)";
    photoDebut[2].style.transition = "all 1.6s cubic-bezier(.93,0,.45,1)";
    photoDebut[3].style.transform = "translateY(0)";
    photoDebut[3].style.transition = "all 1.7s cubic-bezier(.93,0,.45,1)";
    photoDebut[4].style.transform = "translateY(0)";
    photoDebut[4].style.transition = "all 0.9s cubic-bezier(.93,0,.45,1)";
    photoDebut[5].style.transform = "translateY(0)";
    photoDebut[5].style.transition = "all 1.8s cubic-bezier(.93,0,.45,1)";
    photoDebut[i].style.visibility = "visible";
    photoDebut[i].style.transform = "translateY(0)";
  }
}
function clickFlower() {
  for (i = 0; i < detailsText.length; i++) {
    detailsText[3].style.transform = "translateY(0)";
    detailsText[3].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[3].style.visibility = "visible";
  }
  for (i = 0; i < detailsText.length; i++) {
    detailsText[1].style.transform = "translateY(-10vh)";
    detailsText[1].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[1].style.visibility = "hidden";
  }
  for (i = 0; i < detailsText.length; i++) {
    detailsText[2].style.transform = "translateY(-10vh)";
    detailsText[2].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[2].style.visibility = "hidden";
  }
  for (i = 0; i < detailsText.length; i++) {
    detailsText[0].style.transform = "translateY(-10vh)";
    detailsText[0].style.transition = "all 1.4s";
  }
  for (i = 0; i < line.length; i++) {
    line[0].style.visibility = "hidden";
  }

  console.log("flower");
  for (i = 0; i < photoFav.length; i++) {
    // photoFav[i].style.transition = "none";
    photoFav[i].style.transform = "translateY(-100vh)";
    photoFav[i].style.transition = "all 1.4s cubic-bezier(.93,0,.45,1)";
    // photoFav[i].style.visibility = "hidden";
  }
  for (i = 0; i < photoShoot.length; i++) {
    // photoShoot[i].style.transition = "none";
    // photoShoot[i].style.visibility = "hidden";
    photoShoot[i].style.transform = "translateY(-100vh)";
  }
  for (i = 0; i < photoDebut.length; i++) {
    // photoDebut[i].style.transition = "none";
    // photoDebut[i].style.visibility = "hidden";
    photoDebut[i].style.transform = "translateY(-100vh)";
  }
  for (i = 0; i < photoFlower.length; i++) {
    // photoFlower[i].style.transition = "all 1s cubic-bezier(.93,0,.45,1)";
    photoFlower[0].style.transform = "translateY(0)";
    photoFlower[0].style.transition = "all 1.4s cubic-bezier(.93,0,.45,1)";
    photoFlower[1].style.transform = "translateY(0)";
    photoFlower[1].style.transition = "all 1.5s cubic-bezier(.93,0,.45,1)";
    photoFlower[2].style.transform = "translateY(0)";
    photoFlower[2].style.transition = "all 1.6s cubic-bezier(.93,0,.45,1)";
    photoFlower[3].style.transform = "translateY(0)";
    photoFlower[3].style.transition = "all 1.7s cubic-bezier(.93,0,.45,1)";
    photoFlower[4].style.transform = "translateY(0)";
    photoFlower[4].style.transition = "all 0.9s cubic-bezier(.93,0,.45,1)";
    photoFlower[5].style.transform = "translateY(0)";
    photoFlower[5].style.transition = "all 1.8s cubic-bezier(.93,0,.45,1)";
    photoFlower[i].style.visibility = "visible";
    photoFlower[i].style.transform = "translateY(0)";
    // photoFlower[i].style.animationIterationCount = "infinite";
    // photoFlower[i].style.animation = "animPhotos 1s ease-in-out";
  }
}
</script>

<style scoped>
</style>