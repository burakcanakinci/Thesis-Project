<template>
  <div class="page main-page">
    <Hero />
    <MyServices />
    <Projects />
    <Aboutme />
  </div>
</template>

<script>
import Hero from './Hero.vue'
import MyServices from './MyServices.vue'
import Projects from './Projects.vue'
import Aboutme from './Aboutme.vue'
export default {
  name: 'IndexPage',
  components: { Hero, MyServices, Projects, Aboutme },
}
//
// export default {
//   head() {
//     return {
//       title: "Home page"
//     };
//   },
// };
</script>

<!-- <style>
header {
  min-height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.4)
    ),
    url("/images/banner.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
}
.text-box {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: #fff;
}
.text-box h1 {
  font-family: cursive;
  font-size: 5rem;
}
.text-box p {
  font-size: 2rem;
  font-weight: lighter;
}
</style> -->
