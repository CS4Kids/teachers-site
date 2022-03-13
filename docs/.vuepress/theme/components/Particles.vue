<template>
 <div id="particle-container">
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
</div>
</template>

<style lang="scss">
body {
  height: 100vh;
}
.particle {
    position: absolute;
    border-radius: 50%;
    z-index: 10;
}

@for $i from 1 through 60 {
    @keyframes particle-animation-#{$i} {
        100% {
            transform: translate3d(calc(random(90) * 1vw), calc(random(90) * 1vh), calc(random(100) * 1px));
        }
    }
    
    .particle:nth-child(#{$i}){
        animation: particle-animation-#{$i} 60s infinite;
        $size: random(5) + 5 + px;
        opacity: calc(random(70)/100);
        height: $size;
        width: $size;
        animation-delay: -$i * .2s;
        transform: translate3d(calc(random(90) * 1vw), calc(random(90) * 1vh), calc(random(100) * 1px));
        background: hsl(58, 99%, 52%);
    }
}
</style>