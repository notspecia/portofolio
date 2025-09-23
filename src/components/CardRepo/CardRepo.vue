<script setup>
import { computed, onMounted, ref } from 'vue';
import { useGithubStore } from '../../stores/github';
import commitLogo from '../../assets/images/stack-tools/commit.svg'


// props repo cycled into parent
const props = defineProps({
    repo: {
        required: true
    }
});

/* REPOSITORIES + COMMITS PINIA STATE */
const githubStore = useGithubStore();

/* REF */
const commitCount = ref(null);

/* COMPUTED */
// description sliced if too much long
const repoDescription = computed(() => {
    const description = props.repo.description || "";
    return description.length > 80 ? `${description.slice(0, 80)}...` : description;
});

/* ONMOUNTED */
onMounted(async () => {
    commitCount.value = await githubStore.fetchRepoCommits(props.repo.name)
})
</script>


<template>
    <div class="card">
        <div class="card-body">
            <div class="d-flex align-items-start gap-3">
                <img :src="repo.owner.avatar_url" alt="logo repo" class="repo-logo">
                <h5 class="card-title">
                    {{ repo.name }} <br>
                    <span> {{ repo.full_name }}</span>
                </h5>
            </div>
            <p class="card-text">
                {{ repoDescription }}
            </p>
            <div class="repo-infos">
                <div class="info">
                    <img :src="commitLogo" alt="commit logo">
                    <span class="ms-2">{{ commitCount }}</span>
                </div>
                <div class="info">
                    <i class="bi bi-star-fill"></i>
                    <span class="ms-2">{{ repo.stargazers_count }}</span>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.card {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.7);
    }

    .repo-logo {
        width: 40px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 5px;
    }

    .card-title {
        font-size: 1.1rem;

        span {
            font-size: 0.9rem;
        }
    }

    .card-text {
        font-size: 0.9rem;
    }

    .repo-infos {
        display: flex;
        align-items: center;
        gap: 20px;

        .info {
            display: flex;
            align-items: center;

            i,
            img {
                font-size: 13px;
                width: 13px;
            }
        }
    }
}
</style>