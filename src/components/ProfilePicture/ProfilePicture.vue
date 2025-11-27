<script setup>
</script>

<template>
    <!-- profile picture (inside flex for center in mobile device) -->
    <div class="mb-4 d-flex justify-content-center justify-content-lg-start">
        <div class="profile-wrapper">
            <img src="https://i.pinimg.com/564x/5c/c1/50/5cc15081995e8aa881ac276e5b03f794.jpg" alt="Profile pic"
                class="profile-img" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.profile-wrapper {
    position: relative;
    width: 160px;
    height: 160px;

    &::after,
    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        width: 100%;
        height: 100%;
        background-image: conic-gradient(blue, rgb(191, 206, 249), transparent 50%);
        padding: 83px;
        border-radius: 50%;
        animation: spin 7s linear infinite
    }

    &::before {
        filter: blur(1rem);
        opacity: 0.7;
    }

    .profile-img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
}
</style>