<script setup>
import { stack } from '@/utils/costants';
import Labelsection from './Labelsection.vue';
import RenderStacksTools from './RenderStacksTools.vue';
</script>

<template>
    <!-- section stack used -->
    <section>
        <labelsection label="Stack" />
        <RenderStacksTools :array="stack" />
    </section>
</template>
