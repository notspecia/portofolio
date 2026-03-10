<script setup>
import Labelsection from './Labelsection.vue';

// rendiamo i bullets delle esperienza lavorative reactive al cambio lingua
// const bullets = computed(() => tm('FAQ.shipping'))
</script>

<template>
    <!-- section work experiences -->
    <section>
        <Labelsection label="Work experience" />
        <!-- i18n arrays of work experiences cycled -->
        <div v-for="exp in $tm('workExperience')" :key="exp.company" class="mb-5">
            <div class="d-flex flex-column flex-sm-row justify-content-between mb-4">
                <div class="mb-3 mb-sm-0">
                    <span class="company">{{ exp.company }}</span>
                    <span class="role">{{ exp.role }}</span>
                </div>
                <span class="date">{{ exp.from }} - {{ exp.to }}</span>
            </div>
            <ul>
                <li v-for="(bullet, i) in exp.bullets" :key="i" v-html="bullet" />
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss">
.company {
    font-size: 1.2rem;
    font-weight: $font-weight-bold;
    letter-spacing: 0.25px;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--border-color);
    margin-right: 20px;
}

.role {
    font-size: 0.95rem;
    font-weight: $font-weight-light;
}

.date {
    font-family: $font-family-hand;
    font-size: 0.9rem;
}

ul {
    font-size: 0.9rem;
    font-weight: $font-weight-light;
}
</style>