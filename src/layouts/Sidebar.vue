<script setup>
import ProfilePicture from '@/components/ProfilePicture.vue';
import Labelsection from '@/components/Labelsection.vue';
import LatestCommits from '@/components/LatestCommits.vue';
</script>


<template>
    <!-- Sidebar -->
    <aside class="col-12 col-lg-3">
        <ProfilePicture />
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
// link list
ul {
    display: flex;
    flex-direction: column;

    @media (max-width: $breakpoint-lg) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
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
            text-decoration: none;
            color: inherit; // eredita dal <li>
        }

        &:hover {
            color: $color-white;
        }

    }
}
</style>