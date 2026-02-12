<script setup>
import { stack } from '@/utils/costants';
import Labelsection from './Labelsection.vue';
import RenderStacksTools from './RenderStacksTools.vue';
</script>

<template>
    <!-- section stack used -->
    <section class="mb-3">
        <labelsection label="Stack" />
        <RenderStacksTools :array="stack" />
    </section>
</template>
