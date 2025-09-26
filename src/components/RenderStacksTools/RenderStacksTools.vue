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
                    :class="tech.name === 'Bootstrap' ? 'more-large' : ''" />
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
        width: 45px;
        height: 45px;

        &.more-large {
            width: 55px;
        }
    }

    figcaption {
        font-size: 0.65rem;
        color: gainsboro;
    }
}
</style>