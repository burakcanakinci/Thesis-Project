<template>
    <div class="section pd-top-bottom-200px wf-section background-color">
      <div class="container-default w-container">
        <img
            src="~/assets/image/Gallery/1.jpg"
            alt="Todo List Mobile App Redesign"
            sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, 575px"
            class="image"
        />
       <img
            src="~/assets/image/Gallery/2.jpg"
            alt="Todo List Mobile App Redesign"
            sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, 575px"
            class="image"
        />
        </div>
      </div>  
</template>
<script>
  export default {
    data: () => ({
    
    }),
    mounted() {
      const recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61129bb2ecedf803564c68ec')
      document.head.appendChild(recaptchaScript)

      const deneme = document.createElement('script')
      deneme.setAttribute('src', 'https://assets.website-files.com/61129bb2ecedf803564c68ec/js/webflow.19742290c.js')
      document.head.appendChild(deneme)
    },
    methods: {
      
    }
  }
</script>
