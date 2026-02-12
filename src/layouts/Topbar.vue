<script setup>
import CVpdf from '/cv-Speciale-Gabriele.pdf';
</script>


<template>
    <nav class="topbar">
        <div class="d-flex align-items-center gap-3">
            <!-- CV -->
            <a :href="CVpdf" target="_blank" class="btn btn-dark btn-sm" data-bs-toggle="tooltip"
                title="Visualizza il CV">
                <i class="bi bi-file-earmark"></i>
            </a>
            <!-- Language Dropdown -->
            <div class="dropdown">
                <button class="btn btn-dark btn-sm dropdown-toggle" data-bs-toggle="dropdown" data-bs-placement="bottom"
                    title="Cambia lingua">
                    <i class="bi bi-translate"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                        <button class="dropdown-item" @click="setLanguage('it')">Italiano</button>
                    </li>
                    <li>
                        <button class="dropdown-item" @click="setLanguage('en')">English</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<style scoped lang="scss">
.topbar {
    position: fixed;
    z-index: 9999;
    display: flex;
    justify-content: end;
    width: 100%;
    background-color: rgba(17, 17, 17, 0.8);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(10px);
    padding: 15px;
    border-bottom: 1px solid rgba(220, 220, 220, 0.288);
}
</style>