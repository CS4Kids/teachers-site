<script setup>
import { computed } from "vue";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import Particles from "./components/Particles.vue";
const year = computed(() => new Date().getFullYear());
</script>

<template>
  <!-- particles from https://codepen.io/Mertl/details/GexapP -->
  <Particles />
  <ParentLayout>
    <template #page>
      <Content />
      <main class="home">
        <header class="hero">
          <h1 id="main-title" class="inner-title">Computer Science for Kids</h1>
          <h2>A Storytelling Approach</h2>
        </header>
        <div class="features">
          <div class="feature">
            <p>
              Venture into a world that needs your help! Follow the mysterious
              Guide into the forest and help restore what was stolen, repair
              what was damaged, and solve mysteries that have puzzled its
              denizens for years. Computer Science For Kids, a new textbook
              published by Wiley, presents to teachers and students a novel
              approach to Computer Science topics using the art of the storyteller.</p>
              <p>Discover a <a target="_blank" href="./assets/sample/c07.pdf">Sample Chapter here</a></p>
          </div>
          <div class="feature hero">
            <img
                alt="A petrified grove"
                :src="$withBase('./assets/art/book-comp.png')"
              />
          </div>
        </div>   
        
        <div class="features">
          <div class="feature hero">
            <img
                alt="A petrified grove"
                :src="$withBase('./assets/art/geode-sm.png')"
              />
          </div>
          <div class="feature">
           <p>By means of narrative and hands-on project building, the student
              can learn basic concepts of Computer Science aligned to grades
              6-8. Perfect for classroom work, home schooling, or
              extracurricular clubs, this modular textbook leads students,
              project-by-project, into visualizing themselves as computer
              scientists.</p>
          </div>
          
        </div>   

        <div class="features">
          <div class="feature">
            <p>This website offers additional
              lesson plans, sample code, downloadable worksheets, and other
              activities to supplement the book. Teachers, use the <a href="/contact">Contact form</a> to 
              request a free password for lesson plans and resources.
            </p>
          </div>
          <div class="feature hero">
            <img
                alt="A petrified grove"
                :src="$withBase('./assets/art/forest-sm.png')"
              />
          </div>
        </div>   

      </main>
      <div class="footer content-footer">Copyright © {{year}} Jen Looper </div> 
    </template>
  </ParentLayout>
</template>