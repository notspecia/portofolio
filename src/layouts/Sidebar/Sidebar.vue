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
        <div class="mb-4">
            <img src="https://i.pinimg.com/564x/5c/c1/50/5cc15081995e8aa881ac276e5b03f794.jpg" alt="Profile pic"
                class="hover-zoom rounded-circle profile-img" />
        </div>

        <!-- contacts and info about me -->
        <Labelsection label="Info" />
        <ul class="list-unstyled">
            <li>
                <i class="bi bi-github"></i>
                <a href="https://github.com/notspecia">notspecia</a>
            </li>
            <li>
                <i class="bi bi-envelope"></i>
                <a href="mailto:gabspec@gmail.com">gabspec@gmail.com</a>
            </li>
            <li>
                <i class="bi bi-geo-alt"></i>
                <span>Italy, Turin</span>
            </li>
            <li>
                <i class="bi bi-linkedin"></i>
                <a href="https://www.linkedin.com/in/speciale-gabriele-a6aa07312/">LinkedIn</a>
            </li>
            <li>
                <i class="bi bi-tiktok"></i>
                <a href="https://www.tiktok.com/@specia_">Tik tok</a>
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
    border: 2px solid #4863ff;
    border-radius: 50%;
}

// link list
ul {
    display: flex;
    flex-direction: column;

    li {
        display: flex;
        align-items: center;
        gap: 10px;
        color: white; // colore base
        margin-bottom: 10px;
        transition: all 0.5s ease;

        a {
            color: inherit; // eredita dal <li>
        }

        &:hover {
            color: rgb(164, 164, 164);
        }

    }
}
</style>