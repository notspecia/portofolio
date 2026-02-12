<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Labelsection from './Labelsection.vue';


// check if show the label (only on lg > and up)
const showLabel = ref(window.innerWidth <= 992);

const onResize = () => {
    showLabel.value = window.innerWidth <= 992;
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
        <h1 class="mb-4 fw-bolder">Speciale Gabriele (特別ではない)</h1>
        <p>
            Hello! I am a fullstack web developer with a solid background in <span class="highlight">Frontend
                Development</span>.
            I work with HTML, SCSS, JavaScript, and <span class="highlight">TypeScript</span>, as well as frameworks
            such as <span class="highlight">Vue.js</span>, React, and
            Angular, focusing on code quality, accessibility, SEO optimization, and user experience. <br /><br />
            I am skilled in integrating and consuming <span class="highlight">RESTful APIs</span> and in working with
            backend logic to build modern,
            scalable, and high-performing interfaces. My backend experience includes developing and maintaining
            server-side functionalities with <span class="highlight">PHP and Node.js</span>, enabling robust API design,
            efficient data handling, and
            secure application workflows. <br /> <br />
            I also participate in DevOps processes and automation, contributing to more efficient and scalable
            development workflows. <br /><br />
            Always looking for new challenges and opportunities to grow professionally and contribute to the development
            of meaningful web projects.
        </p>
    </section>
</template>


<style scoped lang="scss">
h1 {
    font-size: 2.8rem;
    color: $color-white;

    @media screen and (max-width: $breakpoint-sm) {
        font-size: 2.3rem;
    }
}
</style>