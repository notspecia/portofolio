import { ref, watch } from 'vue';

// fuori dalla funzione = stato condiviso globale, get del valore iniziale dal localstorage
const isLightTheme = ref(localStorage.getItem('theme') === 'light');

// centralizzato funzione gestione theme e watch
export function useTheme() {
    const toggleTheme = () => {
        isLightTheme.value = !isLightTheme.value;
    };

    watch(isLightTheme, (isLight) => {
        document.documentElement.classList.toggle('light-theme', isLight); // aggiorna la classe html del document root
        localStorage.setItem('theme', isLight ? 'light' : 'dark'); // salva nel localStorage
    }, { immediate: true });

    return { isLightTheme, toggleTheme };
}