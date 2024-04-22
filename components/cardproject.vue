<template>
  <div class="card"  
      @mouseover="startAnimation"
      @mouseleave="resetAnimation">
    <div class="card-image">
      <img :src="image" @mouseover="handleImageClick" alt="A photo of a mountain" />
      <div>
      </div>
    </div>
    <div class="hexagon">
      <div class="hexagon1">
        <div class="number">{{ cardIndex + 1 }}</div>
        <svg
          width="138"
          height="138"
          viewBox="0 0 138 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_1389_695)">
            <path
              d="M19 0H138V118L118 138H0V19L19 0Z"
              fill="white"
              fill-opacity="0.1"
            />
          </g>
          <defs>
  <filter
              id="filter0_b_1389_695"
              x="-10"
              y="-10"
              width="158"
              height="158"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1389_695"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1389_695"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

      </div>
      <!-- <div class="hexagon2">
        <p id="exifdata" class="exifdata">{{ exifData }}</p>
        <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_b_1389_696)">
            <path d="M119 0H0V118L20 138H138V19L119 0Z" fill="white" fill-opacity="0.1"/>
          </g>
          <defs>
            <filter id="filter0_b_1389_696" x="-10" y="-10" width="158" height="158" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1389_696"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1389_696" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div> -->
    </div>
    
  </div>
</template>

<script>
import { gsap } from 'gsap';
import exifr from 'exifr';

export default {
  props: {
    image: String,
    cardIndex: Number
  },
  data() {
    return {
      exifData: ''
    };
  },
  methods: {
    async handleImageClick(event) {
      // Vérifiez le nom de la route pour déterminer si vous devez extraire les données EXIF
      if (this.$route.name === 'photos') { // Remplacez 'nom_de_votre_page' par le nom de votre page photo
        console.log('Image clicked')
        const file = event.target.src
        console.log('Image file:', file)
        try {
          const exifData = await exifr.parse(file)
          console.log('EXIF data:', exifData)
          this.exifData = 'ISO: ' + exifData.ISO + '\n' +
                          'Focal: ' + exifData.FNumber + '\n' +
                          'Shutter speed: ' + exifData.ShutterSpeedValue;
        } catch (error) {
          console.log('Error reading EXIF data:', error)
          alert('Error reading EXIF data: ' + error.message)
        }
      }
    },

    startAnimation(event) {
      const card = event.target.closest('.card');
      const hexagon1 = card.querySelector('.hexagon1');
      const hexagon2 = card.querySelector('.hexagon2');
      const cardImage = card.querySelector('.card-image');
      const exifdata = card.querySelector('.exifdata');

      gsap.to(hexagon1, {y:-138,x:138, ease: "power1.out",  duration: 0.3,opacity: 1});
      gsap.to(hexagon2, {y:-138,x:-138, ease: "power1.out",  duration: 0.3, opacity: 1});
      gsap.to(cardImage, {scale: 0.85,ease: "power1.out", filter: 'grayscale(0)', duration: 0.3});
      gsap.to(exifdata, { y:10, x:10, ease: " power1.out",  duration: 0.3, delay: 0.50, opacity: 1});
    },

    resetAnimation(event) {
      const card = event.target.closest('.card');
      const hexagon1 = card.querySelector('.hexagon1');
      const hexagon2 = card.querySelector('.hexagon2');
      const cardImage = card.querySelector('.card-image');
      const exifdata = card.querySelector('.exifdata');

      gsap.to(hexagon1, {y:0, x:0, ease: "power1.out",  duration: 0.25, opacity: 0, delay: 0.25});
      gsap.to(hexagon2, {y:0, x:0, ease: "power1.out",  duration: 0.25, opacity: 0, delay: 0.25});
      gsap.to(cardImage, {scale: 1,ease: "power1.out",filter: 'grayscale(0.7)', duration: 0.25, delay: 0.25});
      gsap.to(exifdata, { y:0, x:0, ease: " power1.out",  duration: 0.25, opacity: 0});
    }
  }
}
</script>


  
  <style scoped>

  .card {
      position: relative;
      width: 300px;
      height: 300px;
      overflow: hidden;
  }
  .card-image {
      width: 100%;
      height: 100%;
      filter: grayscale(0.7);
  }
  .card-image img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* overflow: hidden; */
  }
  .hexagon {
      position: absolute;
      /* z-index: -1; */
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: space-between;
  
      align-items: flex-end;
  }
  .hexagon1  {
      position: absolute;
      bottom: -138px;
      left: -138px;
      /* opacity: 0; */
      /* z-index: 1; */
  }
  .number {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 3rem;
  }
  .hexagon2  {
      position: absolute;
      bottom: -138px;
      right: -138px;
      /* opacity: 0; */
      /* z-index: 1; */
  }
  #exifdata {
      position: absolute;
      bottom: 10px;
      right: 5px;
      color: white;
      font-size: 12px;
      padding: 10px;
      opacity: 0;
     
  }
  </style>