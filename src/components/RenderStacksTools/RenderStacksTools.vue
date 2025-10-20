<script setup>
defineProps({
    array: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="row g-3">
        <div v-for="tech in array" :key="tech.name" class="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
            <figure class="shake">
                <img :src="tech.logo" :alt="tech.name" class="mb-2"
                    :class="tech.moreLarge ? 'more-large' : ''" />
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

    img {
        width: 50px;
        height: 50px;

        &.more-large {
            width: 57px;
        }
    }

    figcaption {
        font-size: 0.65rem;
        color: gainsboro;
    }
}
</style>