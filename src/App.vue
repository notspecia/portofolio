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