<script>
    export let selected;
</script>

<nav>
    <ul>
        <li>
            <a href="/" class:selected={selected === "home"}>Home</a>
        </li>
        <li>
            <a href="/downloads" class:selected={selected === "download"}>Download apps</a>
        </li>
        <li>
            <a href="/future" class:selected={selected === "future"}>Future plans</a>
        </li>
        <li>
            <a href="/development" class:selected={selected === "development"}>Development</a>
        </li>
    </ul>
    <div class="spacer" />
    <ul>
        <!-- <li>
            <a href="">Language</a>
        </li> -->
        <!-- <li>
            <a href="/todo_webapp">Login</a>
        </li> -->
        <li>
            <a href="/todo_webapp" class="highlight" class:selected={selected === "webapp"}>Online account</a>
        </li>
    </ul>
</nav>

<style>
    nav {
        display: flex;
        flex: 1;
    }

    ul {
        padding: 0;
        margin: 0 20px;
        display: flex;
        /* background-color: brown; */
        list-style-type: none;
    }

    ul li a {
        display: flex;
        align-items: center;
        justify-content: center;
        /* flex: 1; */
        height: 100%;
        padding: 0 20px;
        text-decoration: none;
        color: inherit;
    }

    ul li a:hover {
        /* background-color: black; */
        /* background-color: #f55557; */
        background-color: #f0f0f0;
        /* box-shadow: 8px 8px 24px 0px rgba(244, 240, 240, 1); */
    }

    ul li a:hover.selected {
        background-color: #ebebeb;
    }

    .spacer {
        display: flex;
        flex: 1;
        /* background-color: rosybrown; */
        /* height: 10px; */
        /* width: 200px; */
    }

    .selected {
        /* text-decoration: underline; */
        /* border-left: 1px solid silver; */
        /* border-right: 1px solid silver; */
        background-color: #ebebeb;
    }

    .highlight {
        /* background-color: #f55557; */
        /* color: white; */
        /* color: white; */
        /* color: #f55557; */
        /* font-weight: bold; */
    }
</style>
