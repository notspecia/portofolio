<script setup>
import { stack } from '../../utils/costants';
import Labelsection from '../LablelSection/Labelsection.vue';
import RenderStacksTools from '../RenderStacksTools/RenderStacksTools.vue';
</script>

<template>
    <!-- section stack used -->
    <section>
        <labelsection label="Stack" />
        <RenderStacksTools :array="stack" />
    </section>
</template>

<style scoped lang="scss"></style>