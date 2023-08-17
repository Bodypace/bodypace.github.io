<script>
    export let border;
    export let center;
    export let wide;
</script>

<section class:border class:center class:wide>
    <slot />
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        margin: 0 auto 20px;
        padding: 15px 30px;
        width: 22vw;
    }

    .border {
        border: 1px solid silver;
        border-radius: 8px;
    }

    .center {
        align-items: center;
    }

    @media screen and (max-width: 1300px) {
        section {
            width: 80vw;
        }

        .wide {
            padding: 0;
        }
    }
</style>
