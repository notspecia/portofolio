<script setup>
import { computed } from 'vue';
import { useGithubStore } from '../../stores/github';

// props commits cycled into parent
const props = defineProps({
    comm: {
        required: true
    }
});


/* REPOSITORIES + COMMITS PINIA STATE */
const githubStore = useGithubStore();


/* COMPUTED */
// commit message sliced if too much long
const commitDescription = computed(() => {
    const description = props.comm.commit.message || "";
    return description.length > 80 ? `${description.slice(0, 80)}...` : description;
});

/* FUNCTIONS */
// function redirect to the github whit the commit clicked (open a new TAB)
const goToCommit = () => {
    window.open(props.comm.html_url, '_blank')
}

const extractRepoFromCommitUrl = () => {
    const match = props.comm.html_url.match(/github\.com\/([^\/]+\/[^\/]+)/);
    return match ? match[1] : '';
}
</script>


<template>
    <div class="card mb-4" @click="goToCommit">
        <div class="card-body">
            <div class="d-flex align-items-start gap-3">
                <h5 class="card-title">
                    {{ extractRepoFromCommitUrl() }}
                </h5>
            </div>
            <p class="card-text">
                {{ commitDescription }}
            </p>
        </div>
    </div>
</template>


<style scoped lang="scss"></style>