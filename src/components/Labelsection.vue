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
    color: #fff;
    font-family: $font-family-hand;
    font-size: 1.1rem;
    font-weight: $font-weight-semibold;
    padding: 0.125rem 0.75rem;
    border: 1px solid rgba(220, 220, 220, 0.288);
    border-radius: 9999px;
    margin-bottom: 1.5rem;
}
</style>