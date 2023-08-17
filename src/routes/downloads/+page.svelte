<script>
    import Footer from "../../lib/components/footer.svelte";
    import Header from "../../lib/components/header.svelte";
</script>

<Header selected="download" />
<main>
    <!-- <LogoBig /> -->
    <h1>Downloads</h1>
    <article>
        <section>
            <h2>Desktop app</h2>
            <a class="button unavailable" href="">
                <i class="fa-brands fa-apple icon-apple" />
                MacOS app</a
            >
            <a class="button unavailable" href="">
                <i class="fa-brands fa-windows icon-windows" />
                Windows 10 app</a
            >
            <a class="button unavailable" href="">
                <i class="fa-brands fa-linux icon-linux" />
                Linux app</a
            >
        </section>

        <section>
            <h2>Mobile app</h2>
            <a class="button unavailable" href="">
                <i class="fa-brands fa-apple icon-apple" />
                iOS app</a
            >
            <a class="button" href="https://play.google.com/store/apps/details?id=com.bodypace.mobileapp" target="_blank">
                <i class="fa-brands fa-android icon-android" />
                <!-- <i class="fa-brands fa-android" style="color: green;" /> -->
                Android app</a
            >
            <a>see source code</a>
        </section>

        <section>
            <h2>Server app</h2>
            <a class="button unavailable" href="">
                <i class="fa-brands fa-apple icon-apple" />
                MacOS app</a
            >
            <a class="button unavailable" href="">
                <i class="fa-brands fa-windows icon-windows" />
                Windows 10 app</a
            >
            <a class="button unavailable" href="">
                <i class="fa-brands fa-linux icon-linux" />
                Linux app</a
            >
        </section>
    </article>
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

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        /* font-size: 40px; */
        margin: 75px 0;
        padding: 0;
        font-weight: lighter;
    }

    article {
        display: flex;
        flex-direction: row;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* height: 60vh; */
        width: 20vw;
        /* border: 1px solid black; */
        margin: 50px;
        margin-top: 0;
    }

    h2 {
        font-weight: lighter;
    }

    .button {
        border: 1px solid black;
        padding: 20px 25px;
        padding-left: 15px;
        width: 20vw;
        margin: 20px;
        color: black;
        text-decoration: none;
    }
    .button:hover {
        background-color: aliceblue;
    }

    a.unavailable {
        color: grey;
        border-color: darkgrey;
        cursor: initial;
    }
    a.unavailable:hover {
        background-color: white;
    }
    a.unavailable::after {
        content: " (not released)";
    }

    i[class*="icon-"] {
        margin: 0 10px;
        font-size: 24px;
        color: silver;
    }

    .icon-apple {
        /* color: black; */
    }

    i[class*="icon-"].icon-android {
        color: #2ec27e;
    }

    .icon-windows {
        /* color: #1c71d8; */
    }

    .icon-linux {
        /* color: #000000; */
    }
</style>
