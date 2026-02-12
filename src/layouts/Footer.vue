<script setup>

</script>


<template>
    <footer>
        <div>
            <p class="text-center">© 2026 Speciale Gabriele. All rights reserved.</p>
        </div>
        <div class="container-tools">
            <p>Made whit
                <img src="@/assets/images/footer-tools/vue.svg" alt="Vue logo" class="icon" />
                <a href="https://vuejs.org/" target="_blank" style="color: #41b883;">Vue</a>
                and
                <img src="@/assets/images/footer-tools/bootstrap.svg" alt="Boostrap logo" class="icon" />
                <a href="https://getbootstrap.com/" target="_blank" style="color: #7311f6;">Boostrap</a>
            </p>
            <span>.</span>
            <p>Data from
                <img src="@/assets/images/footer-tools/github.webp" alt="Github logo" class="icon" />
                <a href="https://docs.github.com/en/rest" target="_blank" style="color: #e4ebf1;">github API</a>
            </p>
            <span>.</span>
            <p>Deploy at
                <img src="@/assets/images/footer-tools/vercel.png" alt="Vercel logo" class="icon" />
                <a href="https://vercel.com/" target="_blank" style="color: #e4ebf1;">Vercel</a>
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

        a {
            font-weight: $font-weight-bold;
            text-decoration: none;
            margin-right: 7px;
        }
    }
}
</style>