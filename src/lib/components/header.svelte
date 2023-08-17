<script>
    import Logo from "./header-logo.svelte";
    import Navigation from "./header-navigation.svelte";

    export let selected;
</script>

<header>
    <Logo />
    <Navigation {selected} />
</header>

<style>
    header {
        position: sticky;
        top: 0;
        display: flex;
        border-bottom: 1px solid silver;
        background-color: white;
    }
</style>
