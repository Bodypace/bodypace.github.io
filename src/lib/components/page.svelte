<script>
    import Header from "./header.svelte";
    import Footer from "./footer.svelte";

    export let name;
</script>

<!-- class:contribute={name === "contribute"} -->
<Header selected={name} />
<main class:home={name === "home"} class:future={name === "future" || name === "development"} class:webapp={name === "webapp"}>
    <slot />
</main>
<Footer />

<style>
    :global(*, *::before, *::after) {
        box-sizing: border-box;
    }

    :global(body) {
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
</style>
