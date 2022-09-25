
<template> 
<!--particles from https://codepen.io/Mertl/details/GexapP -->
  <Particles/>
  <ParentLayout>
    <template #page-bottom>
      <div class="footer">&copy; Jen Looper {{ now }}</div>
    </template>
  </ParentLayout>
</template>
 
<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Particles from '../components/Particles.vue';
export default { 
  computed: {
    now () {
      let date = new Date().getFullYear();
      return date
    }
  },
  components: {
    ParentLayout,
    Particles,
  },
  
}
</script>

<style>
/*h3 {
  position: relative;
  top: 20px;
}

@media screen and (max-width: 1170px) {
  :root {
    --bookAngle: 60deg;
  }
}
.imgLoader {
  position: fixed;
  -webkit-animation: preLoad 1s steps(1);
  animation: preLoad 1s steps(1);
  width: 1px;
  height: 1px;
}
@-webkit-keyframes preLoad {
  0% {
    background-image: url(./example-pages/1.png);
  }
  10% {
    background-image: url(./example-pages/2.png);
  }
  20% {
    background-image: url(./example-pages/3.png);
  }
  30% {
    background-image: url(./example-pages/4.png);
  }
  40% {
    background-image: url(./example-pages/5.png);
  }
  to {
    display: none;
  }
}
@keyframes preLoad {
  0% {
    background-image: url(./example-pages/1.png);
  }
  10% {
    background-image: url(./example-pages/2.png);
  }
  20% {
    background-image: url(./example-pages/3.png);
  }
  30% {
    background-image: url(./example-pages/4.png);
  }
  40% {
    background-image: url(./example-pages/5.png);
  }
  to {
    display: none;
  }
}

@media (min-width: 768px) {
  .book {
    margin-top: 1rem;
    --tw-scale-x: 1.5;
    --tw-scale-y: 1.5;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}
@media (min-width: 1024px) {
  .book {
    margin-top: 1.5rem;
  }
}
@media (min-width: 1280px) {
  .book {
    margin-top: 2rem;
  }
}
.book {
  position: relative;
  perspective: 630px;
  perspective-origin: center 50px;
  filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.25));
}
.book-page {
  width: 210px;
  height: 300px;
  background-color: #bbb;
  position: absolute;
  top: 0;
  right: 50%;
  transform-origin: 100% 100%;
  border: 2px solid #333;
  background-size: 420px 300px;
  background-position: 50%;
  transform-style: preserve-3d;
}
.book-page:first-child {
  transform: rotateX(var(--bookAngle)) rotateY(3deg);
}
.book-page:nth-child(2) {
  transform: rotateX(var(--bookAngle)) rotateY(4.5deg);
}
.book-page:nth-child(3) {
  transform: rotateX(var(--bookAngle)) rotateY(6deg);
  -webkit-animation: nextPage 30s steps(1) -28.8s infinite;
  animation: nextPage 30s steps(1) -28.8s infinite;
  background-size: 420px 300px;
  background-position: -2px -2px;
}
.book-page:nth-child(4) {
  transform: rotateX(var(--bookAngle)) rotateY(177deg);
}
.book-page:nth-child(5) {
  transform: rotateX(var(--bookAngle)) rotateY(175.5deg);
}
.book-page:nth-child(6) {
  transform: rotateX(var(--bookAngle)) rotateY(174deg);
  overflow: hidden;
}
.book-page:nth-child(6):after {
  content: "";
  width: 210px;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  transform-origin: center;
  transform: rotateY(180deg);
  -webkit-animation: nextPage 30s steps(1) -24s infinite;
  animation: nextPage 30s steps(1) -24s infinite;
  background-size: 420px 300px;
  background-position: 100% -2px;
}
@-webkit-keyframes nextPage {
  0% {
    background-image: url(./example-pages/1.png);
  }
  20% {
    background-image: url(./example-pages/2.png);
  }
  40% {
    background-image: url(./example-pages/3.png);
  }
  60% {
    background-image: url(./example-pages/4.png);
  }
  80% {
    background-image: url(./example-pages/5.png);
  }
}
@keyframes nextPage {
  0% {
    background-image: url(./example-pages/1.png);
  }
  20% {
    background-image: url(./example-pages/2.png);
  }
  40% {
    background-image: url(./example-pages/3.png);
  }
  60% {
    background-image: url(./example-pages/4.png);
  }
  80% {
    background-image: url(./example-pages/5.png);
  }
}
.gap {
  height: 300px;
  background: none;
  transform: rotateX(var(--bookAngle));
  transform-origin: bottom;
  top: 0;
  left: calc(50% - 5px);
}
.gap,
.gap:after {
  width: 10px;
  position: absolute;
}
.gap:after {
  content: "";
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: #333;
  height: 5px;
  border-radius: 50%;
}
.flips,
.pages {
  transform-style: preserve-3d;
}
.flip {
  width: 32px;
  height: 300px;
  transform-origin: 100% 100%;
  right: 100%;
  border: solid #333;
  border-width: 2px 0;
  perspective: 4200px;
  perspective-origin: 50%;
  transform-style: preserve-3d;
}
.flip,
.flip:after {
  position: absolute;
  top: 0;
  background-size: 420px 300px;
}
.flip:after {
  content: "";
  right: 0;
  width: 100%;
  height: 100%;
  transform-origin: center;
}
.flip.flip1 {
  right: 50%;
  -webkit-animation: flip1 6s ease-in-out infinite;
  animation: flip1 6s ease-in-out infinite;
  border-width: 2px 2px 2px 0;
}
.flip.flip1:after {
  -webkit-animation: nextFlip1 30s steps(1) -24s infinite;
  animation: nextFlip1 30s steps(1) -24s infinite;
}
.flip:not(.flip1) {
  right: calc(100% - 2px);
  top: -2px;
  transform-origin: right;
  -webkit-animation: flip2 6s ease-in-out infinite;
  animation: flip2 6s ease-in-out infinite;
}
.flip.flip2:after {
  -webkit-animation: nextFlip2 30s steps(1) -24s infinite;
  animation: nextFlip2 30s steps(1) -24s infinite;
}
.flip.flip3:after {
  -webkit-animation: nextFlip3 30s steps(1) -24s infinite;
  animation: nextFlip3 30s steps(1) -24s infinite;
}
.flip.flip4:after {
  -webkit-animation: nextFlip4 30s steps(1) -24s infinite;
  animation: nextFlip4 30s steps(1) -24s infinite;
}
.flip.flip5:after {
  -webkit-animation: nextFlip5 30s steps(1) -24s infinite;
  animation: nextFlip5 30s steps(1) -24s infinite;
}
.flip.flip6:after {
  -webkit-animation: nextFlip6 30s steps(1) -24s infinite;
  animation: nextFlip6 30s steps(1) -24s infinite;
}
.flip.flip7 {
  width: 30px;
  border-width: 2px 0 2px 2px;
}
.flip.flip7:after {
  -webkit-animation: nextFlip7 30s steps(1) -24s infinite;
  animation: nextFlip7 30s steps(1) -24s infinite;
}
@-webkit-keyframes flip1 {
  0%,
  20% {
    transform: rotateX(var(--bookAngle)) rotateY(6deg);
  }
  80%,
  to {
    transform: rotateX(var(--bookAngle)) rotateY(174deg);
  }
}
@keyframes flip1 {
  0%,
  20% {
    transform: rotateX(var(--bookAngle)) rotateY(6deg);
  }
  80%,
  to {
    transform: rotateX(var(--bookAngle)) rotateY(174deg);
  }
}
@-webkit-keyframes flip2 {
  0%,
  20% {
    transform: rotateY(0deg) translateY(0);
  }
  50% {
    transform: rotateY(-15deg) translateY(0);
  }
}
@keyframes flip2 {
  0%,
  20% {
    transform: rotateY(0deg) translateY(0);
  }
  50% {
    transform: rotateY(-15deg) translateY(0);
  }
}
@-webkit-keyframes nextFlip1 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -178px -2px;
    transform: rotateY(0deg);
  }
  10% {
    background-image: url(./example-pages/2.png);
    background-position: -210px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -178px -2px;
    transform: rotateY(0deg);
  }
  30% {
    background-image: url(./example-pages/3.png);
    background-position: -210px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -178px -2px;
    transform: rotateY(0deg);
  }
  50% {
    background-image: url(./example-pages/4.png);
    background-position: -210px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -178px -2px;
    transform: rotateY(0deg);
  }
  70% {
    background-image: url(./example-pages/5.png);
    background-position: -210px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -178px -2px;
    transform: rotateY(0deg);
  }
  90% {
    background-image: url(./example-pages/1.png);
    background-position: -210px -2px;
    transform: rotateY(180deg);
  }
}
@keyframes nextFlip1 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -178px -2px;
    transform: rotateY(0deg);
  }
  10% {
    background-image: url(./example-pages/2.png);
    background-position: -210px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -178px -2px;
    transform: rotateY(0deg);
  }
  30% {
    background-image: url(./example-pages/3.png);
    background-position: -210px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -178px -2px;
    transform: rotateY(0deg);
  }
  50% {
    background-image: url(./example-pages/4.png);
    background-position: -210px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -178px -2px;
    transform: rotateY(0deg);
  }
  70% {
    background-image: url(./example-pages/5.png);
    background-position: -210px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -178px -2px;
    transform: rotateY(0deg);
  }
  90% {
    background-image: url(./example-pages/1.png);
    background-position: -210px -2px;
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes nextFlip2 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -148px -2px;
    transform: rotateY(0deg);
  }
  10.5% {
    background-image: url(./example-pages/2.png);
    background-position: -238px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -148px -2px;
    transform: rotateY(0deg);
  }
  30.5% {
    background-image: url(./example-pages/3.png);
    background-position: -238px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -148px -2px;
    transform: rotateY(0deg);
  }
  50.5% {
    background-image: url(./example-pages/4.png);
    background-position: -238px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -148px -2px;
    transform: rotateY(0deg);
  }
  70.5% {
    background-image: url(./example-pages/5.png);
    background-position: -238px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -148px -2px;
    transform: rotateY(0deg);
  }
  90.5% {
    background-image: url(./example-pages/1.png);
    background-position: -238px -2px;
    transform: rotateY(180deg);
  }
}
@keyframes nextFlip2 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -148px -2px;
    transform: rotateY(0deg);
  }
  10.5% {
    background-image: url(./example-pages/2.png);
    background-position: -238px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -148px -2px;
    transform: rotateY(0deg);
  }
  30.5% {
    background-image: url(./example-pages/3.png);
    background-position: -238px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -148px -2px;
    transform: rotateY(0deg);
  }
  50.5% {
    background-image: url(./example-pages/4.png);
    background-position: -238px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -148px -2px;
    transform: rotateY(0deg);
  }
  70.5% {
    background-image: url(./example-pages/5.png);
    background-position: -238px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -148px -2px;
    transform: rotateY(0deg);
  }
  90.5% {
    background-image: url(./example-pages/1.png);
    background-position: -238px -2px;
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes nextFlip3 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -118px -2px;
    transform: rotateY(0deg);
  }
  11% {
    background-image: url(./example-pages/2.png);
    background-position: -268px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -118px -2px;
    transform: rotateY(0deg);
  }
  31% {
    background-image: url(./example-pages/3.png);
    background-position: -268px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -118px -2px;
    transform: rotateY(0deg);
  }
  51% {
    background-image: url(./example-pages/4.png);
    background-position: -268px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -118px -2px;
    transform: rotateY(0deg);
  }
  71% {
    background-image: url(./example-pages/5.png);
    background-position: -268px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -118px -2px;
    transform: rotateY(0deg);
  }
  91% {
    background-image: url(./example-pages/1.png);
    background-position: -268px -2px;
    transform: rotateY(180deg);
  }
}
@keyframes nextFlip3 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -118px -2px;
    transform: rotateY(0deg);
  }
  11% {
    background-image: url(./example-pages/2.png);
    background-position: -268px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -118px -2px;
    transform: rotateY(0deg);
  }
  31% {
    background-image: url(./example-pages/3.png);
    background-position: -268px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -118px -2px;
    transform: rotateY(0deg);
  }
  51% {
    background-image: url(./example-pages/4.png);
    background-position: -268px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -118px -2px;
    transform: rotateY(0deg);
  }
  71% {
    background-image: url(./example-pages/5.png);
    background-position: -268px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -118px -2px;
    transform: rotateY(0deg);
  }
  91% {
    background-image: url(./example-pages/1.png);
    background-position: -268px -2px;
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes nextFlip4 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -88px -2px;
    transform: rotateY(0deg);
  }
  11.5% {
    background-image: url(./example-pages/2.png);
    background-position: -298px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -88px -2px;
    transform: rotateY(0deg);
  }
  31.5% {
    background-image: url(./example-pages/3.png);
    background-position: -298px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -88px -2px;
    transform: rotateY(0deg);
  }
  51.5% {
    background-image: url(./example-pages/4.png);
    background-position: -298px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -88px -2px;
    transform: rotateY(0deg);
  }
  71.5% {
    background-image: url(./example-pages/5.png);
    background-position: -298px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -88px -2px;
    transform: rotateY(0deg);
  }
  91.5% {
    background-image: url(./example-pages/1.png);
    background-position: -298px -2px;
    transform: rotateY(180deg);
  }
}
@keyframes nextFlip4 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -88px -2px;
    transform: rotateY(0deg);
  }
  11.5% {
    background-image: url(./example-pages/2.png);
    background-position: -298px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -88px -2px;
    transform: rotateY(0deg);
  }
  31.5% {
    background-image: url(./example-pages/3.png);
    background-position: -298px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -88px -2px;
    transform: rotateY(0deg);
  }
  51.5% {
    background-image: url(./example-pages/4.png);
    background-position: -298px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -88px -2px;
    transform: rotateY(0deg);
  }
  71.5% {
    background-image: url(./example-pages/5.png);
    background-position: -298px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -88px -2px;
    transform: rotateY(0deg);
  }
  91.5% {
    background-image: url(./example-pages/1.png);
    background-position: -298px -2px;
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes nextFlip5 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -58px -2px;
    transform: rotateY(0deg);
  }
  12% {
    background-image: url(./example-pages/2.png);
    background-position: -328px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -58px -2px;
    transform: rotateY(0deg);
  }
  32% {
    background-image: url(./example-pages/3.png);
    background-position: -328px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -58px -2px;
    transform: rotateY(0deg);
  }
  52% {
    background-image: url(./example-pages/4.png);
    background-position: -328px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -58px -2px;
    transform: rotateY(0deg);
  }
  72% {
    background-image: url(./example-pages/5.png);
    background-position: -328px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -58px -2px;
    transform: rotateY(0deg);
  }
  92% {
    background-image: url(./example-pages/1.png);
    background-position: -328px -2px;
    transform: rotateY(180deg);
  }
}
@keyframes nextFlip5 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -58px -2px;
    transform: rotateY(0deg);
  }
  12% {
    background-image: url(./example-pages/2.png);
    background-position: -328px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -58px -2px;
    transform: rotateY(0deg);
  }
  32% {
    background-image: url(./example-pages/3.png);
    background-position: -328px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -58px -2px;
    transform: rotateY(0deg);
  }
  52% {
    background-image: url(./example-pages/4.png);
    background-position: -328px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -58px -2px;
    transform: rotateY(0deg);
  }
  72% {
    background-image: url(./example-pages/5.png);
    background-position: -328px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -58px -2px;
    transform: rotateY(0deg);
  }
  92% {
    background-image: url(./example-pages/1.png);
    background-position: -328px -2px;
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes nextFlip6 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -28px -2px;
    transform: rotateY(0deg);
  }
  12.5% {
    background-image: url(./example-pages/2.png);
    background-position: -358px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -28px -2px;
    transform: rotateY(0deg);
  }
  32.5% {
    background-image: url(./example-pages/3.png);
    background-position: -358px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -28px -2px;
    transform: rotateY(0deg);
  }
  52.5% {
    background-image: url(./example-pages/4.png);
    background-position: -358px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -28px -2px;
    transform: rotateY(0deg);
  }
  72.5% {
    background-image: url(./example-pages/5.png);
    background-position: -358px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -28px -2px;
    transform: rotateY(0deg);
  }
  92.5% {
    background-image: url(./example-pages/1.png);
    background-position: -358px -2px;
    transform: rotateY(180deg);
  }
}
@keyframes nextFlip6 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -28px -2px;
    transform: rotateY(0deg);
  }
  12.5% {
    background-image: url(./example-pages/2.png);
    background-position: -358px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -28px -2px;
    transform: rotateY(0deg);
  }
  32.5% {
    background-image: url(./example-pages/3.png);
    background-position: -358px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -28px -2px;
    transform: rotateY(0deg);
  }
  52.5% {
    background-image: url(./example-pages/4.png);
    background-position: -358px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -28px -2px;
    transform: rotateY(0deg);
  }
  72.5% {
    background-image: url(./example-pages/5.png);
    background-position: -358px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -28px -2px;
    transform: rotateY(0deg);
  }
  92.5% {
    background-image: url(./example-pages/1.png);
    background-position: -358px -2px;
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes nextFlip7 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -2px -2px;
    transform: rotateY(0deg);
  }
  13% {
    background-image: url(./example-pages/2.png);
    background-position: -388px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -2px -2px;
    transform: rotateY(0deg);
  }
  33% {
    background-image: url(./example-pages/3.png);
    background-position: -388px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -2px -2px;
    transform: rotateY(0deg);
  }
  53% {
    background-image: url(./example-pages/4.png);
    background-position: -388px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -2px -2px;
    transform: rotateY(0deg);
  }
  73% {
    background-image: url(./example-pages/5.png);
    background-position: -388px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -2px -2px;
    transform: rotateY(0deg);
  }
  93% {
    background-image: url(./example-pages/1.png);
    background-position: -388px -2px;
    transform: rotateY(180deg);
  }
}
@keyframes nextFlip7 {
  0% {
    background-image: url(./example-pages/1.png);
    background-position: -2px -2px;
    transform: rotateY(0deg);
  }
  13% {
    background-image: url(./example-pages/2.png);
    background-position: -388px -2px;
    transform: rotateY(180deg);
  }
  20% {
    background-image: url(./example-pages/2.png);
    background-position: -2px -2px;
    transform: rotateY(0deg);
  }
  33% {
    background-image: url(./example-pages/3.png);
    background-position: -388px -2px;
    transform: rotateY(180deg);
  }
  40% {
    background-image: url(./example-pages/3.png);
    background-position: -2px -2px;
    transform: rotateY(0deg);
  }
  53% {
    background-image: url(./example-pages/4.png);
    background-position: -388px -2px;
    transform: rotateY(180deg);
  }
  60% {
    background-image: url(./example-pages/4.png);
    background-position: -2px -2px;
    transform: rotateY(0deg);
  }
  73% {
    background-image: url(./example-pages/5.png);
    background-position: -388px -2px;
    transform: rotateY(180deg);
  }
  80% {
    background-image: url(./example-pages/5.png);
    background-position: -2px -2px;
    transform: rotateY(0deg);
  }
  93% {
    background-image: url(./example-pages/1.png);
    background-position: -388px -2px;
    transform: rotateY(180deg);
  }
}

.book-cover-container {
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 600px;
}
@-webkit-keyframes initAnimation {
  0% {
    transform: rotateY(-30deg);
  }
  to {
    transform: rotateY(-30deg);
  }
}
@keyframes initAnimation {
  0% {
    transform: rotateY(-30deg);
  }
  to {
    transform: rotateY(-30deg);
  }
}
.book-cover {
  width: 200px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(-30deg);
  transition: 1s ease;
  -webkit-animation: initAnimation 1s ease 0s 1;
  animation: initAnimation 1s ease 0s 1;
}
.book-cover:hover {
  transform: rotateY(0deg);
}
.book-cover > :first-child {
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  width: 200px;
  height: 300px;
  transform: translateZ(25px);
  background-color: #ced0af;
  border-radius: 0 3px 3px 0;
}
.book-cover:before {
  position: absolute;
  content: " ";
  background-color: blue;
  left: 0;
  top: 3px;
  width: 48px;
  height: 294px;
  transform: translateX(172px) rotateY(90deg);
  background: linear-gradient(
    90deg,
    #fff,
    #f9f9f9 5%,
    #fff 10%,
    #f9f9f9 15%,
    #fff 20%,
    #f9f9f9 25%,
    #fff 30%,
    #f9f9f9 35%,
    #fff 40%,
    #f9f9f9 45%,
    #fff 50%,
    #f9f9f9 55%,
    #fff 60%,
    #f9f9f9 65%,
    #fff 70%,
    #f9f9f9 75%,
    #fff 80%,
    #f9f9f9 85%,
    #fff 90%,
    #f9f9f9 95%,
    #fff
  );
}
.book-cover:after {
  position: absolute;
  top: 0;
  left: 0;
  content: " ";
  width: 200px;
  height: 300px;
  transform: translateZ(-25px);
  background-color: #ced0af;
  border-radius: 0 2px 2px 0;
  box-shadow: -10px 0 40px 10px #252525;
}
*/
</style>
