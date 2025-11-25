<script setup>
import About from '@/components/About/About.vue';
import Projects from '@/components/Projects/Projects.vue';
import Stack from '@/components/Stack/Stack.vue';
import Tools from '@/components/Tools/Tools.vue';
import WorkExperience from '@/components/WorkExperience/WorkExperience.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>

<template>
    <!-- Main content -->
    <main class="col-12 col-lg-9 d-flex flex-column gap-5">
        <About />
        <Stack />
        <Tools />
        <Projects />
        <WorkExperience />
        <hr class="w-25 mx-auto my-2" />
        <Footer />
    </main>
</template>

<style scoped lang="scss"></style>