<script setup>
import About from '@/components/About.vue';
import Projects from '@/components/Projects.vue';
import Stack from '@/components/Stack.vue';
import Tools from '@/components/Tools.vue';
import WorkExperience from '@/components/WorkExperience.vue';
import Footer from '@/layouts/Footer.vue';
</script>

<template>
    <!-- Main content -->
    <main class="col-12 col-lg-9 d-flex flex-column">
        <About />
        <div>
            <Stack />
            <Tools />
        </div>
        <Projects />
        <WorkExperience />
        <hr class="w-50 mx-auto my-2" />
        <Footer />
    </main>
</template>

<style scoped lang="scss">
main {
    gap: 4rem;
}
</style>