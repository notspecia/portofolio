<script setup>
import { useGithubStore } from '../../stores/github';
import Labelsection from '../../components/LablelSection/Labelsection.vue';
import LatestCommits from '../../components/LatestCommits/LatestCommits.vue';


/* REPOSITORIES + COMMITS PINIA STATE */
const githubStore = useGithubStore();
</script>

<template>
    <!-- Sidebar -->
    <aside class="col-12 col-lg-3">
        <!-- profile picture -->
        <div class="mb-4 d-flex justify-content-center justify-content-lg-start">
            <img src="https://i.pinimg.com/564x/5c/c1/50/5cc15081995e8aa881ac276e5b03f794.jpg" alt="Profile pic"
                class="rounded-circle profile-img" />
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
            <li>
                <i class="bi bi-tiktok"></i>
                <a href="https://www.tiktok.com/@specia_" target="_blank">Tik tok</a>
            </li>
            <li>
                <i class="bi bi-youtube"></i>
                <a href="https://www.youtube.com/@notspecia" target="_blank">YouTube</a>
            </li>
        </ul>

        <!-- latest commits on my github account -->
        <LatestCommits />
    </aside>
</template>

<style scoped lang="scss">
// pic image 
.profile-img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 50%;
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