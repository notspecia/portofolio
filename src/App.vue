<script setup>
import { onMounted, ref, watch } from 'vue';
import { VANTAthemes } from './utils/costants';
import { useTheme } from './composables/toggle-theme';
import { useGithubStore } from '@/stores/github';
import Topbar from '@/layouts/Topbar.vue';
import Main from '@/layouts/Main.vue';
import Sidebar from '@/layouts/Sidebar.vue';


/* THEMES STATE / REPOSITORIES + COMMITS PINIA STATE */
const { isLightTheme } = useTheme();
const githubStore = useGithubStore();

/* REF */
const vantaInstance = ref(null);


// onMount, loading of repos and commits, then apply custom theme vanta bg animated on the body
onMounted(async () => {
  // get all the data's from github
  await githubStore.initGithubData();

  // Vanta animation bg
  vantaInstance.value = VANTA.FOG({
    el: "#animated-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 150.00,
    minWidth: 180.00,
    blurFactor: 1.4,
    speed: 2,
    ...(isLightTheme.value ? VANTAthemes.light : VANTAthemes.dark)  // legge il tema salvato nel localStorage
  });
});


/* WATCH */
// quando cambia il tema, aggiorna i colori Vanta
// setOptions --> è il modo che Vanta ti dà per aggiornare i colori senza ricreare l'animazione da zero:
watch(isLightTheme, (isLight) => {
  vantaInstance.value?.setOptions(
    isLight ? VANTAthemes.light : VANTAthemes.dark
  );
});
</script>


<template>
  <Topbar />
  <div class="container">
    <div class="row g-0 g-lg-5">
      <Sidebar />
      <Main />
    </div>
  </div>
</template>


<style scoped lang="scss">
.container {
  padding-top: 170px;
  padding-bottom: 50px;

  @media screen and (max-width: $breakpoint-lg) {
    padding-top: 100px;
  }
}
</style>