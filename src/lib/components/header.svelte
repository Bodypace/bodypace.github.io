<script>
    import Logo from "./header-logo.svelte";
    import NavigationLong from "./header-navigation-long.svelte";
    import NavigationShort from "./header-navigation-short.svelte";

    export let selected;

    let menu = false;
    function toggleMenu() {
        menu = !menu;
    }
</script>

<header class="long">
    <Logo />
    <NavigationLong {selected} />
</header>
<header class="short">
    <Logo />
    <NavigationShort {selected} on:click={toggleMenu} />
</header>

<!-- <div class="test"> -->
<div class:hidden={!menu} class:menu>
    <ul>
        <li>
            <a href="/" class:selected={selected === "home"}>Home</a>
        </li>
        <li>
            <a href="/downloads" class:selected={selected === "download"}
                >Download apps</a
            >
        </li>
        <li>
            <a href="/future" class:selected={selected === "future"}
                >Future plans</a
            >
        </li>
        <li>
            <a href="/development" class:selected={selected === "development"}
                >Development</a
            >
        </li>
        <li>
            <a
                href="/todo_webapp"
                class="highlight"
                class:selected={selected === "webapp"}>Online account</a
            >
        </li>
        <li>
            <a href="/regulations" class:selected={selected === "regulations"}
                >Terms and conditions</a
            >
        </li>
        <li>
            <a href="/policy" class:selected={selected === "policy"}
                >Privacy Policy</a
            >
        </li>
    </ul>
</div>

<!-- </div> -->

<style>
    /* header common */
    header {
        position: sticky;
        top: 0;
        display: flex;
        border-bottom: 1px solid silver;
        background-color: white;
    }

    .short {
        display: none;
    }

    @media screen and (max-width: 1000px) {
        .long {
            display: none;
        }

        .short {
            display: flex;
        }
    }

    /* mobile navigation */
    .hidden {
        display: none;
    }
    .menu {
        position: sticky;
        top: 63px;
        right: 0;
        z-index: 5;
        display: flex;
        flex-direction: column;
        background-color: white;
        border-bottom: 1px solid silver;
    }

    ul {
        margin: 0;
        padding: 20px 0;
        list-style-type: none;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        padding: 5px 10px;
        margin: 10px 5px;
        color: inherit;
        text-decoration: none;
        font-size: 20px;

        border-left: 1px solid silver;
        width: 80vw;
        background-color: #fafafa;
    }

    .selected {
        border-left: 4px solid black;
        font-weight: bold;
        background-color: #f0f0f0;
    }
</style>
