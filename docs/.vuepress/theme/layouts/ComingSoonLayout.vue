
<template> 
<!--particles from https://codepen.io/Mertl/details/GexapP -->
  <Particles/>

  <ParentLayout>
   <template #navbar>
      <div class="page-bar header">
      <h3>Coming Soon: A New Textbook</h3>
      </div>
    </template>
   <template #page-bottom>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,125 0,125 C 118.07142857142858,125.92857142857143 236.14285714285717,126.85714285714286 355,137 C 473.85714285714283,147.14285714285714 593.5000000000001,166.50000000000003 702,158 C 810.4999999999999,149.49999999999997 907.8571428571427,113.14285714285714 1029,103 C 1150.1428571428573,92.85714285714286 1295.0714285714287,108.92857142857143 1440,125 C 1440,125 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#d9042966" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,500 C 0,500 0,250 0,250 C 131.39285714285717,231.07142857142856 262.78571428571433,212.14285714285714 397,223 C 531.2142857142857,233.85714285714286 668.2499999999999,274.5 784,287 C 899.7500000000001,299.5 994.2142857142858,283.8571428571429 1100,273 C 1205.7857142857142,262.1428571428571 1322.892857142857,256.07142857142856 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#d9042988" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,500 C 0,500 0,375 0,375 C 125.60714285714286,374.32142857142856 251.21428571428572,373.64285714285717 359,368 C 466.7857142857143,362.35714285714283 556.7499999999999,351.75 673,350 C 789.2500000000001,348.25 931.7857142857142,355.3571428571429 1064,361 C 1196.2142857142858,366.6428571428571 1318.107142857143,370.82142857142856 1440,375 C 1440,375 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#d90429ff" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>   </template>
  </ParentLayout>
  
</template>

<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Particles from '../components/Particles.vue';
export default { 
  components: {
    ParentLayout,
    Particles,
  },
}
</script>


