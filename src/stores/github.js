import { defineStore } from "pinia"
import { reactive } from "vue"


export const useGithubStore = defineStore("github", () => {

    /* STATE */
    // state reactive of the object whit array of repos[] + bool loading and string error
    const stateRepository = reactive({
        repositories: [],
        isLoading: false,
        error: null
    });

    // state reactive of the object whit array of commits[] + bool loading and string error
    const stateCommits = reactive({
        commits: [],
        isLoading: false,
        error: null
    });

    // username GitHub + token private for full access on github public repo
    const username = "notspecia";
    const headers = {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
    };


    /* ACTIONS */
    // fetching of arrays of repos[] 
    const fetchRepositories = async () => {
        try {
            stateRepository.isLoading = true;
            const res = await fetch(`https://api.github.com/users/${username}/repos`, { headers });
            const data = await res.json();
            stateRepository.repositories = data;
            console.log(stateRepository.repositories);
        } catch (err) {
            stateRepository.error = err.message;
        } finally {
            stateRepository.isLoading = false;
        }
    }

    // fetching every repos[] in my account github, then take all the commits and filter them in cronologic order
    const fetchAllCommits = async () => {
        try {
            stateCommits.isLoading = true;
            const allCommits = [];

            // resolve pending all promise and push into a generic array all the commits
            const commitArrays = await Promise.all(
                stateRepository.repositories.map(async (repo) => {
                    try {
                        // take from every repo latest 20 commits
                        const res = await fetch(
                            `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=5`,
                            { headers }
                        );
                        return await res.json();
                    } catch {
                        return [];
                    }
                })
            );

            commitArrays.forEach((c) => allCommits.push(...c));
            allCommits.sort(
                (a, b) => new Date(b.commit.author.date) - new Date(a.commit.author.date)
            );
            stateCommits.commits = allCommits.slice(0, 5); // render latest 5 commits on all the repo's
            console.log(stateCommits.commits);
        } catch (err) {
            stateCommits.error = err.message;
        } finally {
            stateCommits.isLoading = false;
        }
    };


    // invocate handle functions whit te GET data's of github on App.vue
    const initGithubData = async () => {
        await fetchRepositories();
        await fetchAllCommits();
    }

    return { stateRepository, stateCommits, initGithubData }
})
