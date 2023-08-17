<script>
    export let spaced;
</script>

<article class:spaced>
    <slot />
</article>

<style>
    article {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 70vw;
        gap: 25px;
    }

    .spaced {
        margin-top: 95px;
    }

    @media screen and (max-width: 1300px) {
        article {
            width: inherit;
        }
    }
</style>
