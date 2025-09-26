<script setup>
import { onMounted } from 'vue';
import { useGithubStore } from './stores/github';
import Main from './layouts/Main/Main.vue';
import Sidebar from './layouts/Sidebar/Sidebar.vue';
import Topbar from './layouts/Topbar/Topbar.vue';


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
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x000000,
    midtoneColor: 0x111111,
    lowlightColor: 0x1c389d,
    baseColor: 0x000000,
    blurFactor: 1.3,
    speed: 2.80
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
  padding-top: 130px;
  padding-bottom: 40px;
}
</style>