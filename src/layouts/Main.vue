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
    <main class="col-12 col-lg-9 d-flex flex-column gap-5">
        <About />
        <div class="stack-tools">
            <Stack class="mb-4" />
            <Tools />
        </div>
        <Projects class="projects" />
        <WorkExperience class="section-reveal" />
        <hr class="w-50 mx-auto my-2" />
        <Footer />
    </main>
</template>

<style scoped lang="scss">
// desktop + laptops
.stack-tools {
    animation: sectionReveal both;
    animation-timeline: view(85% 30%);

    // tablets
    @media (max-width: $breakpoint-md) {
        animation-timeline: view(90% 30%);
    }

    // mobile small screen 
    @media (max-width: $breakpoint-sm) {
        animation-timeline: view(110% 1%);
    }
}

// desktop + laptops
.projects {
    animation: sectionReveal both;
    animation-timeline: view(140% 30%);

    // tablets
    @media (max-width: $breakpoint-md) {
        animation-timeline: view(200% 30%);
    }

    // mobile small screen 
    @media (max-width: $breakpoint-sm) {
        animation-timeline: view(310% 25%);
    }
}
</style>