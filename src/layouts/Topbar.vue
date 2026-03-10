<script setup>
import { useTheme } from '@/composables/toggle-theme';
import { useI18n } from 'vue-i18n';
import CVpdf from '/cv-Speciale-Gabriele.pdf';

/* I18N LANG */
const { locale } = useI18n(); // rendiamolo reattivo per il cambio lingua

/* STORE COMPOSABLE */
const { isLightTheme, toggleTheme } = useTheme();

/* FUNCTIONS */
const setLanguage = (lang) => {
    locale.value = lang;
}
</script>


<template>
    <nav class="topbar">
        <div class="d-flex justify-content-end align-items-center gap-4">
            <!-- Toggle theme -->
            <button class="btn" @click="toggleTheme">
                <i v-if="!isLightTheme" class="bi bi-moon"></i>
                <i v-else class="bi bi-sun"></i>
            </button>
            <!-- CV -->
            <a :href="CVpdf" target="_blank" class="btn btn-sm" data-bs-toggle="tooltip" title="Visualizza il CV">
                <i class="bi bi-file-earmark"></i>
            </a>
            <!-- Language Dropdown -->
            <div class="dropdown-center">
                <button class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" data-bs-placement="bottom"
                    title="Cambia lingua">
                    <i class="bi bi-translate"></i>
                </button>
                <ul class="dropdown-menu mt-2" :class="isLightTheme ? 'dropdown-menu-light' : 'dropdown-menu-dark'">
                    <li>
                        <button class="dropdown-item" @click="setLanguage('it')">Italiano <i v-if="locale === 'it'"
                                class="bi bi-check-lg"></i>
                        </button>
                    </li>
                    <li>
                        <button class="dropdown-item" @click="setLanguage('en')">English <i v-if="locale === 'en'"
                                class="bi bi-check-lg"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<style scoped lang="scss">
.topbar {
    position: fixed;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    width: 90%;
    background-color: var(--navbar-bg);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(10px);
    padding: 10px 40px;
    border: 1px solid var(--border-color);
    border-radius: 50px;

    @media (max-width: $breakpoint-sm) {
        width: 97%;
    }

    .btn {
        color: var(--navabr-btn-color);
        background-color: var(--navabr-btn-bg);
    }

}
</style>