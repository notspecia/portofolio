<script setup>
import { useGithubStore } from '../../stores/github';
import Labelsection from '../LablelSection/Labelsection.vue';
import Loader from '../Loader/Loader.vue';


/* REPOSITORIES + COMMITS PINIA STATE */
const githubStore = useGithubStore();
</script>

<template>
    <!-- section latest commits filtered -->
    <section>
        <labelsection label="Latest Commits" />
        <!-- 
        Card container with commits retrieved via GET and filtered from github.com
        Recycling the data via the v-for directive in a component with CardCommit.vue 
        -->
        <Loader v-if="githubStore.stateCommits.isLoading" />
        <p v-else-if="githubStore.stateCommits.error" class="text-danger">
            {{ githubStore.stateCommits.error }}
        </p>
        <div v-else class="row">
            <p v-for="(comm, index) in githubStore.stateCommits.commits" :key="index">
                {{ comm.commit.message }}
            </p>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>