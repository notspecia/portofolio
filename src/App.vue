<script setup>
import { onMounted } from 'vue';
import { useGithubStore } from '@/stores/github';
import Topbar from '@/layouts/Topbar.vue';
import Main from '@/layouts/Main.vue';
import Sidebar from '@/layouts/Sidebar.vue';


/* REPOSITORIES + COMMITS PINIA STATE */
const githubStore = useGithubStore();


// onMount, loading of repos and commits, then apply custom theme vanta bg animated on the body
onMounted(async () => {
  // get all the data's from github
  await githubStore.initGithubData();
  // Vanta animation bg
  VANTA.FOG({
    el: "#animated-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 150.00,
    minWidth: 180.00,
    highlightColor: 0x0d1117,
    midtoneColor: 0x111111,
    lowlightColor: 0x191970,
    baseColor: 0x0d1117,
    blurFactor: 1.4,
    speed: 2
  });
});
</script>


<template>
  <Topbar />
  <div class="container">
    <div class="row g-5">
      <Sidebar />
      <Main />
    </div>
  </div>
</template>


<style scoped lang="scss">
.container {
  padding-top: 140px;
  padding-bottom: 50px;

  @media screen and (max-width: $breakpoint-lg) {
    padding-top: 100px;
  }
}
</style>