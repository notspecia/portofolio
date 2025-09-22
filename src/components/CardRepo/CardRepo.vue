<script setup>

// props repo cycled into parent
defineProps({
    repo: {
        required: true
    }
})
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title"> {{ repo.name }}</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>