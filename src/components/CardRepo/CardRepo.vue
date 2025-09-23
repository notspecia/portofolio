<script setup>

// props repo cycled into parent
const props = defineProps({
    repo: {
        required: true
    }
})
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ repo.name }}</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.7);
    }
}
</style>