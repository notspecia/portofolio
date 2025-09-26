<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Labelsection from '../LablelSection/Labelsection.vue';


// check if show the label (only on lg > and up)
const showLabel = ref(window.innerWidth <= 992);

const onResize = () => {
    showLabel.value = window.innerWidth >= 992;
};

// add and remove event listener on resize of the window
onMounted(() => {
    window.addEventListener('resize', onResize);
});
onUnmounted(() => {
    window.removeEventListener('resize', onResize);
});
</script>


<template>
    <!-- section talks about me -->
    <section>
        <!-- label description only if screen is < 992px -->
        <Labelsection label="About me" v-if="showLabel" />
        <h1 class="mb-4 fw-bolder">Speciale Gabriele <span class="fs-4">(特別ではない)</span></h1>
        <p>
            Hey! I'm Speciale Gabriele, a Web Developer with two years of experience, mainly focused on
            front-end development with Vue 3 and its ecosystem. <br />
            These experiences have strengthened my ability to
            write clean, efficient code and to adapt quickly to new technologies. <br /> <br />
            While my background is rooted in front-end development, I am now expanding my expertise towards backend
            development, aiming to grow as a full-stack developer. <br /> <br />
            My current stack combines Vue 3 for the frontend with emerging backend skills, allowing me to contribute
            across the full application lifecycle.
        </p>
    </section>
</template>


<style scoped lang="scss"></style>