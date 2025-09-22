<script setup>
import About from '../../components/About/About.vue';
import Projects from '../../components/Projects/Projects.vue';
import Stack from '../../components/Stack/Stack.vue';
import Tools from '../../components/Tools/Tools.vue';
import WorkExperience from '../../components/WorkExperience/WorkExperience.vue';
</script>

<template>
    <!-- Main content -->
    <main class="col-12 col-lg-9 d-flex flex-column gap-5">
        <About />
        <Projects />
        <WorkExperience />
        <Stack />
        <Tools />
        <!-- contacts -->
        <!-- footer -->
    </main>
</template>

<style scoped lang="scss"></style>