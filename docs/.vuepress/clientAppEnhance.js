import { defineClientAppEnhance } from "@vuepress/client";
import Particles from "./theme/components/Particles.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("Particles", Particles);
});