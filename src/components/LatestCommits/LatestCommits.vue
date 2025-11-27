<script setup>
import { useGithubStore } from '../../stores/github';
import CardCommit from '../CardCommit/CardCommit.vue';
import Labelsection from '../LablelSection/Labelsection.vue';
import Loader from '../Loader/Loader.vue';


/* REPOSITORIES + COMMITS PINIA STATE */
const githubStore = useGithubStore();
</script>

<template>
    <!-- section latest commits filtered -->
    <section>
        <labelsection label="Recent Commits" />
        <!-- 
        Card container with commits retrieved via GET and filtered from github.com
        Recycling the data via the v-for directive in a component with CardCommit.vue 
        -->
        <Loader v-if="githubStore.stateCommits.isLoading" />
        <p v-else-if="githubStore.stateCommits.error" class="text-danger">
            {{ githubStore.stateCommits.error }}
        </p>
        <div v-else v-for="(comm, index) in githubStore.stateCommits.commits" :key="index">
            <!-- component card for single commit -->
            <CardCommit :comm="comm" />
        </div>
    </section>
</template>

<style scoped lang="scss"></style>