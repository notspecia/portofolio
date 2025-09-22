<script setup>
import { useGithubStore } from '../../stores/github';
import CardRepo from '../CardRepo/CardRepo.vue';
import Labelsection from '../LablelSection/Labelsection.vue';
import Loader from '../Loader/Loader.vue';


/* REPOSITORIES + COMMITS PINIA STATE */
const githubStore = useGithubStore();
</script>

<template>
    <!-- section projects fetched -->
    <section>
        <labelsection label="Projects" />
        <!-- 
        Card container with repositories retrieved via GET from github.com
        Recycling the data via the v-for directive in a component with CardRepo.vue 
        -->
        <Loader v-if="githubStore.stateRepository.isLoading" />
        <p v-else-if="githubStore.stateRepository.error" class="text-danger">
            {{ githubStore.stateRepository.error }}
        </p>
        <div v-else class="row">
            <div v-for="(repo, index) in githubStore.stateRepository.repositories" :key="index" class="col-sm-6 g-4">
                <!-- component card for single repos -->
                <CardRepo :repo="repo" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>