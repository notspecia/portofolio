<script setup>
const props = defineProps({
    array: {
        type: Array,
        required: true
    }
});

console.log(props.array);

</script>

<template>
    <div class="row g-3">
        <div v-for="tech in array" :key="tech.name" class="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
            <figure class="shake">
                <img :src="tech.logo" :alt="tech.name" class="mb-2" :class="tech.moreLarge ? 'more-large' : ''" />
                <figcaption>{{ tech.name }}</figcaption>
            </figure>
        </div>
    </div>
</template>

<style lang="scss">
figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    // per le immagini MODIFICABILI tramite css 
    img {
        width: 50px;
        height: 50px;
    }

    figcaption {
        font-size: 0.65rem;
        transition: color 0.3s ease;
    }

    // effetti aggiuntivi all hover
    &:hover {
        figcaption {
            color: $color-white;
        }
    }
}
</style>