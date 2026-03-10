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
            <div class="toggle-theme" @click="toggleTheme">
                <i v-if="!isLightTheme" class="bi bi-moon"></i>
                <i v-else class="bi bi-sun"></i>
            </div>
            <!-- CV -->
            <a :href="CVpdf" target="_blank" class="btn btn-dark btn-sm" data-bs-toggle="tooltip"
                title="Visualizza il CV">
                <i class="bi bi-file-earmark"></i>
            </a>
            <!-- Language Dropdown -->
            <div class="dropdown-center">
                <button class="btn btn-dark btn-sm dropdown-toggle" data-bs-toggle="dropdown" data-bs-placement="bottom"
                    title="Cambia lingua">
                    <i class="bi bi-translate"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-dark mt-2">
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
    background-color: rgba(17, 17, 17, 0.8);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(10px);
    padding: 13px 40px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 50px;

    @media (max-width: $breakpoint-sm) {
        width: 97%;
    }

    .toggle-theme {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: #212529;
        border-radius: 5px;
    }
}
</style>