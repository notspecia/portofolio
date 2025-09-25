<script setup>
import { onMounted } from 'vue';
import { useGithubStore } from './stores/github';
import Main from './layouts/Main/Main.vue';
import Sidebar from './layouts/Sidebar/Sidebar.vue';
import Topbar from './layouts/Topbar/Topbar.vue';


/* REPOSITORIES + COMMITS PINIA STATE */
const githubStore = useGithubStore();

// onMount, loading of repos and commits, then apply custom theme canvas bg animated on body
onMounted(async () => {
  await githubStore.initGithubData();
  new FinisherHeader({
    "count": 2,
    "size": {
      "min": 1500,
      "max": 1800,
      "pulse": 0
    },
    "speed": {
      "x": {
        "min": 0.5,
        "max": 0.8
      },
      "y": {
        "min": 1.5,
        "max": 2
      }
    },
    "colors": {
      "background": "#000000",
      "particles": [
        "#4863ff"
      ]
    },
    "blending": "overlay",
    "opacity": {
      "center": 0.3,
      "edge": 0
    },
    "skew": 0,
    "shapes": [
      "c"
    ]
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