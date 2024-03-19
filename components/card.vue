<template>
    
    <div class="grid" data-effect="hover-1">
				<h2 class="grid__title">Effect <br>01</h2>
				<div class="card">
				    <div class="card__img" style="background-image: url(assets/img/3.jpg)"></div>
				    <div class="card__box card__box--c">
				        <span class="card__box-number">02</span>
				        <span class="card__box-tags">#techno #rave</span>
				    </div>
				    <div class="card__box card__box--d">
				        <span class="card__box-category">Pulse Club</span>
				    </div>
				</div>
				<div class="card card--empty"></div>
				<div class="card card--alt">
				    <div class="card__img" style="background-image: url(assets/img/22.jpg)"></div>
				    <div class="card__box card__box--a">
				        <span class="card__box-number">07</span>
				        <span class="card__box-tags">#house #deephouse</span>
				    </div>
				    <div class="card__box card__box--d">
				        <span class="card__box-category">Stellar Lounge</span>
				    </div>
				</div>
				<div class="card">
				    <div class="card__img" style="background-image: url(assets/img/2.jpg)"></div>
				    <div class="card__box card__box--b">
				        <span class="card__box-number">09</span>
				        <span class="card__box-tags">#dubstep #bass</span>
				    </div>
				    <div class="card__box card__box--c">
				        <span class="card__box-category">Bass Arena</span>
				    </div>
				</div>
				<div class="card card--empty"></div>
				<div class="card card--alt">
				    <div class="card__img" style="background-image: url(assets/img/21.jpg)"></div>
				    <div class="card__box card__box--b">
				        <span class="card__box-number">13</span>
				        <span class="card__box-tags">#trance #progressive</span>
				    </div>
				    <div class="card__box card__box--c">
				        <span class="card__box-category">Euphoria Hall</span>
				    </div>
				</div>
				<div class="card card--alt">
				    <div class="card__img" style="background-image: url(assets/img/17.jpg)"></div>
				    <div class="card__box card__box--b">
				        <span class="card__box-number">17</span>
				        <span class="card__box-tags">#drumandbass #jungle</span>
				    </div>
				    <div class="card__box card__box--d">
				        <span class="card__box-category">Groove Hive</span>
				    </div>
				</div>
				<div class="card">
				    <div class="card__img" style="background-image: url(assets/img/20.jpg)"></div>
				    <div class="card__box card__box--c">
				        <span class="card__box-number">19</span>
				        <span class="card__box-tags">#ambient #chillout</span>
				    </div>
				    <div class="card__box card__box--d">
				        <span class="card__box-category">Tranquil Gardens</span>
				    </div>
				</div>
			</div>
  </template>
  
  <script>
  import { preloadImages } from '@/plugins/utils.js'; // Assurez-vous que le chemin est correct

  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card__img {
    width: 100%;
    height: auto;
  }
  
  .card__content {
    padding: 20px;
  }
  </style>
  