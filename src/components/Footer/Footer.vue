<script setup>

</script>


<template>
    <footer>
        <div>
            <p class="text-center">© 2025 Speciale Gabriele. All rights reserved.</p>
        </div>
        <div class="container-tools">
            <p>Made whit
                <img src="@/assets/images/footer-tools/vue.svg" alt="Vue logo" class="icon" />
                <span style="color: #41b883;">Vue</span>
                and
                <img src="@/assets/images/footer-tools/bootstrap.svg" alt="Boostrap logo" class="icon" />
                <span style="color: #7311f6;">Boostrap</span>
            </p>
            <span>.</span>
            <p>Data from
                <img src="@/assets/images/footer-tools/github.webp" alt="Github logo" class="icon" />
                github API
            </p>
            <span>.</span>
            <p>Deploy at
                <img src="@/assets/images/footer-tools/vercel.png" alt="Vercel logo" class="icon" />
                <span>Vercel</span>
            </p>
        </div>
    </footer>
</template>


<style scoped lang="scss">
footer {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
        font-size: 0.85rem;
        margin: 0;
    }

    // tools container con spaziatura tra gli elementi con maring
    .container-tools {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.7rem;

        img {
            width: 25px;
            margin-right: 3px;
            margin-left: 7px;
        }

        span {
            margin-right: 7px;
        }
    }
}
</style>