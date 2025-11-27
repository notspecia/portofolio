<script setup>
import { computed } from 'vue';
import { useGithubStore } from '../../stores/github';
import commitLogo from '../../assets/images/stack-tools/commit.svg'


// props commits cycled into parent
const props = defineProps({
    comm: {
        required: true
    }
});


/* REPOSITORIES + COMMITS PINIA STATE */
const githubStore = useGithubStore();


/* COMPUTED */
// commit message sliced if too much long, otherwise show all message commit
const commitDescription = computed(() => {
    const description = props.comm.commit.message || "";
    return description.length > 40 ? `${description.slice(0, 40)}...` : description;
});


/* FUNCTIONS */
// function redirect to the github whit the commit clicked (open a new TAB)
const goToCommit = () => {
    window.open(props.comm.html_url, '_blank')
}

// function to extract the repository name from the commit URL
const extractRepoFromCommitUrl = () => {
    const match = props.comm.html_url.match(/github\.com\/([^\/]+\/[^\/]+)/);
    return match ? match[1] : '';
}
</script>


<template>
    <div class="card mb-4" @click="goToCommit">
        <div class="card-body">
            <div class="d-flex align-items-center gap-2 mb-2">
                <img :src="commitLogo" alt="commit logo" class="commit-logo">
                <h5 class="card-title mb-0">
                    {{ extractRepoFromCommitUrl() }}
                </h5>
            </div>
            <p class="card-text">
                {{ commitDescription }}
            </p>
        </div>
    </div>
</template>


<style scoped lang="scss">
.card {

    .commit-logo {
        width: 1.2rem;
    }

    .card-title {
        font-size: 0.9rem;
    }

    .card-text {
        font-size: 0.7rem;
    }
}
</style>