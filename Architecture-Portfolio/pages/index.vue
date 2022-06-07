<template>
  <div class="page main-page">
    <Navbar />
    <Hero />
    <MyServices />
    <Projects />
    <Aboutme />
    <Footer />
  </div>
</template>

<script>
import Hero from './Hero.vue';
import MyServices from './MyServices.vue';
import Projects from './Projects.vue';
import Aboutme from './Aboutme.vue';
export default {
    name: "IndexPage",
    components: { Hero, MyServices, Projects, Aboutme}
}
</script>
