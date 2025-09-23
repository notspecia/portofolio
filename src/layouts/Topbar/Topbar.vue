<script setup>
</script>

<template>
    <!-- Top bar -->
    <nav class="topbar">
        <!-- Right content (icone pulsanti) -->
        <div class="d-flex align-items-center gap-3">
            <button class="btn btn-dark btn-sm">
                <i class="bi bi-file-earmark"></i>
            </button>
            <button class="btn btn-dark btn-sm">
                <i class="bi bi-clipboard"></i>
            </button>
            <button class="btn btn-dark btn-sm">
                <i class="bi bi-translate"></i>
            </button>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.topbar {
    position: fixed;
    z-index: 9999;
    display: flex;
    justify-content: end;
    padding: 15px;
    width: 100%;
    background-color: rgba(17, 17, 17, 0.8);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(220, 220, 220, 0.288);
}
</style>