<script>
    import Header from "./header.svelte";
    import Footer from "./footer.svelte";

    export let name;
</script>

<Header selected={name} />
<main
    class:home={name === "home"}
    class:download={name === "download"}
    class:future={name === "future" || name === "development"}
    class:webapp={name === "webapp"}
>
    <slot />
</main>
<Footer />

<style>
    :global(*, *::before, *::after) {
        box-sizing: border-box;
    }

    :global(html) {
        display: flex;
        min-height: 100%;
    }

    :global(body) {
        display: flex;
        flex: 1;
        max-width: 100%;
        flex-direction: column;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    .home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .download {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .future {
        display: flex;
        flex-direction: column;
        max-width: 60vw;
        margin: 0 auto;
        letter-spacing: 1px;
        /* line-height: 2; */
        gap: 10px;
    }

    .contribute {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .webapp {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 1300px) {
        .future {
            /* background-color: royalblue; */
            width: 75vw;
            max-width: inherit;
        }
    }
</style>
