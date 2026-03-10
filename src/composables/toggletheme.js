import { ref, watch } from 'vue';

// fuori dalla funzione = stato condiviso globale, get del valore iniziale dal localstorage
const isLightTheme = ref(localStorage.getItem('theme') === 'light');

// centralizzato funzione gestione theme e watch
export function useTheme() {
    const toggleTheme = () => {
        isLightTheme.value = !isLightTheme.value;
    };

    watch(isLightTheme, (isLight) => {
        // aggiorna la classe html del document root
        document.documentElement.classList.toggle('light-theme', isLight);
        // salva nel localStorage
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }, { immediate: true });

    return { isLightTheme, toggleTheme };
}