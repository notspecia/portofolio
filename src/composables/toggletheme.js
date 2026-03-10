import { ref, watch } from 'vue';

// fuori dalla funzione = stato condiviso globale
const isLightTheme = ref(false);

// centralizzato funzione gestione theme e watch
export function useTheme() {
    const toggleTheme = () => {
        isLightTheme.value = !isLightTheme.value;
    };

    watch(isLightTheme, (isLight) => {
        document.documentElement.classList.toggle('light-theme', isLight);
    });

    return { isLightTheme, toggleTheme };
}