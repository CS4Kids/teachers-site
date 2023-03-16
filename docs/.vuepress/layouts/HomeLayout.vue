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
          <h1 id="main-title">Computer Science for Kids</h1>
          <h2>A Storytelling Approach</h2>
        </header>
        <div class="features">
          <div class="feature">
            <p>
              Venture into a world that needs your help! Follow the mysterious
              Guide into the forest and help restore what was stolen, repair
              what was damaged, and solve mysteries that have puzzled its
              denizens for years.</p>
              <p>Computer Science For Kids, a textbook
              published by Wiley, presents to teachers and students a novel
              approach to Computer Science topics - the art of the storyteller.
              By means of narrative and hands-on project building, the student
              can learn basic concepts of Computer Science aligned to grades
              6-8. Perfect for classroom work, home schooling, or
              extracurricular clubs, this modular textbook leads students,
              project-by-project, into visualizing themselves as computer
              scientists.</p>
              <p>This website offers additional
              lesson plans, sample code, downloadable worksheets, and other
              activities to supplement the book.
            </p>
          </div>
          <div class="feature">
            <img
                alt="A petrified grove"
                :src="$withBase('./assets/art/book-cover.png')"
              />
          </div>
        </div>     
      </main>
      <div class="footer content-footer">Copyright © {{year}} Jen Looper </div> 
    </template>
  </ParentLayout>
</template>