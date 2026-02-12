<script setup>
import { tools } from '@/utils/costants';
import Labelsection from './Labelsection.vue';
import RenderStacksTools from './RenderStacksTools.vue';
</script>

<template>
    <!-- section stack used -->
    <section>
        <labelsection label="Tools" />
        <RenderStacksTools :array="tools" />
    </section>
</template>