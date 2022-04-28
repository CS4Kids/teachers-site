import { defineClientAppEnhance } from "@vuepress/client";
import Particles from "./theme/components/Particles.vue";
//import KidsLayout from "./theme/layouts/KidsLayout.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("Particles", Particles);
  //app.component("KidsLayout", KidsLayout);
});
