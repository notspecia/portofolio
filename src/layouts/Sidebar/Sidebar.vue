<script setup>
import Labelsection from '../../components/LablelSection/Labelsection.vue';
import LatestCommits from '../../components/LatestCommits/LatestCommits.vue';
</script>


<template>
    <!-- Sidebar -->
    <aside class="col-12 col-lg-3">
        <!-- profile picture (inside flex for center in mobile device) -->
        <div class="mb-4 d-flex justify-content-center justify-content-lg-start">
            <div class="profile-wrapper">
                <img src="https://i.pinimg.com/564x/5c/c1/50/5cc15081995e8aa881ac276e5b03f794.jpg" alt="Profile pic"
                    class="profile-img" />
            </div>
        </div>

        <!-- contacts and info about me -->
        <Labelsection label="Info" />
        <ul class="list-unstyled">
            <li>
                <i class="bi bi-github"></i>
                <a href="https://github.com/notspecia" target="_blank">notspecia</a>
            </li>
            <li>
                <i class="bi bi-envelope"></i>
                <a href="mailto:gabspec@gmail.com" target="_blank">gabspec@gmail.com</a>
            </li>
            <li>
                <i class="bi bi-geo-alt"></i>
                <span>Italy, Turin</span>
            </li>
            <li>
                <i class="bi bi-linkedin"></i>
                <a href="https://www.linkedin.com/in/speciale-gabriele-a6aa07312/" target="_blank">LinkedIn</a>
            </li>
        </ul>

        <!-- latest commits on my github account -->
        <LatestCommits />
    </aside>
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
        background-image: conic-gradient(blue, rgb(149, 175, 254), transparent 50%);
        padding: 84px;
        border-radius: 50%;
        animation: spin 2s linear infinite;
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



// link list
ul {
    display: flex;
    flex-direction: column;

    @media (max-width: $breakpoint-lg) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px;
    }

    li {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        transition: all 0.5s ease;

        @media (max-width: $breakpoint-lg) {
            gap: 5px;
        }

        a {
            color: inherit; // eredita dal <li>
        }

        &:hover {
            color: $color-white;
        }

    }
}
</style>