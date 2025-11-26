<script setup>
import { tools } from '../../utils/costants';
import Labelsection from '../LablelSection/Labelsection.vue';
import RenderStacksTools from '../RenderStacksTools/RenderStacksTools.vue';
</script>

<template>
    <!-- section stack used -->
    <section>
        <labelsection label="Tools" />
        <RenderStacksTools :array="tools" />
    </section>
</template>

<style scoped lang="scss"></style>