<template>
    <main>
    <div class="grid" data-effect="hover-1">
				<h2 class="grid__title">Effect <br>01</h2>
				<div class="card">
				    <div class="card__img" style="background-image: url(../assets/img/3.jpg)"></div>
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
				    <div class="card__img" style="background-image: url(../assets/img/22.jpg)"></div>
				    <div class="card__box card__box--a">
				        <span class="card__box-number">07</span>
				        <span class="card__box-tags">#house #deephouse</span>
				    </div>
				    <div class="card__box card__box--d">
				        <span class="card__box-category">Stellar Lounge</span>
				    </div>
				</div>
				<div class="card">
				    <div class="card__img" style="background-image: url(../assets/img/2.jpg)"></div>
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
				    <div class="card__img" style="background-image: url(../assets/img/21.jpg)"></div>
				    <div class="card__box card__box--b">
				        <span class="card__box-number">13</span>
				        <span class="card__box-tags">#trance #progressive</span>
				    </div>
				    <div class="card__box card__box--c">
				        <span class="card__box-category">Euphoria Hall</span>
				    </div>
				</div>
				<div class="card card--alt">
				    <div class="card__img" style="background-image: url(../assets/img/17.jpg)"></div>
				    <div class="card__box card__box--b">
				        <span class="card__box-number">17</span>
				        <span class="card__box-tags">#drumandbass #jungle</span>
				    </div>
				    <div class="card__box card__box--d">
				        <span class="card__box-category">Groove Hive</span>
				    </div>
				</div>
				<div class="card">
				    <div class="card__img" style="background-image: url(../assets/img/20.jpg)"></div>
				    <div class="card__box card__box--c">
				        <span class="card__box-number">19</span>
				        <span class="card__box-tags">#ambient #chillout</span>
				    </div>
				    <div class="card__box card__box--d">
				        <span class="card__box-category">Tranquil Gardens</span>
				    </div>
				</div>
			</div>
            </main>
  </template>
  
  <script>
import { preloadImages } from '../assets/js/utils.js';

import { Card1 } from '../assets/js/card.js';          


let cardsArr = [];

export default {
  mounted() {
    const cardsArr = [];

    [...document.querySelectorAll('.card:not(.card--empty)')].forEach(cardEl => {
      let gridEffect = cardEl.closest('.grid').getAttribute('data-effect');
      
      switch(gridEffect) {
        case 'hover-1':
          cardsArr.push(new Card1(cardEl));  
          break;
        case 'hover-2':
          cardsArr.push(new Card2(cardEl));  
          break;
        case 'hover-3':
          cardsArr.push(new Card3(cardEl));  
          break;
        default:
          console.warn('Unknown data-effect', gridEffect);
          break;
      }
    });
  }
}

    
preloadImages('.card__img').then(() => document.body.classList.remove('loading'));

  </script>
  

  <style scoped>
  @import '/assets/styles/base.css';
  </style> 
  
  