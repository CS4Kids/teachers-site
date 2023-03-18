<template>
    <ParentLayout>
      <template #page>
        <div class="page">
            <div class="theme-default-content"> 
                <main class="home">
                    <button class="button" @click="generatePDF()">Save as PDF</button>
                    <Content/>
                    <p>*tip: prior to saving as a PDF, select the 'light' mode at the top using the 'sun' icon.</p>
                    </main>
            </div>
        </div>
    </template>
  </ParentLayout>
</template>
  
<script>
  import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
  export default {
    name: "PrintableLayout",
    components: {
      ParentLayout
    },
    methods: {
      async generatePDF() { 
        const content = document.querySelector('.page').innerHTML;
        const options = {
            filename: 'lesson.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }
        html2pdf().from(content).set(options).save();
    },
    addScript(url) {
     var script = document.createElement('script');
     script.type = 'application/javascript';
     script.src = url;
     document.head.appendChild(script);
    }
 
  },
  mounted() {
    this.addScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js')
  }
}
  </script>
  