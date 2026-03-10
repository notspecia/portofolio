<script setup>

// props label
defineProps({
    label: {
        type: String,
        required: true
    }
});
</script>

<template>
    <span class="custom-label">{{ label }}</span>
</template>

<style scoped lang="scss">
.custom-label {
    display: inline-block;
    color: var(--text-color);
    font-family: $font-family-hand;
    font-size: 1.1rem;
    font-weight: $font-weight-semibold;
    padding: 0.125rem 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 9999px;
    margin-bottom: 1.5rem;
}
</style>