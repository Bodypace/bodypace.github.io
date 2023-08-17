<script>
    import Page from "$lib/components/page.svelte";
    import Tiles from "../tmp/tiles.svelte";
    import Tile from "../tmp/tile.svelte";
    import Button from "../tmp/button.svelte";
</script>

<Page name="download">
    <h1>Downloads</h1>
    <Tiles>
        <Tile center wide>
            <h2>Desktop app</h2>
            <Button target="download-app-desktop-apple" large>MacOS app</Button>
            <Button target="download-app-desktop-windows" large>Windows 10 app</Button>
            <Button target="download-app-desktop-linux" large>Linux app</Button>
        </Tile>

        <Tile center wide>
            <h2>Mobile app</h2>
            <Button target="download-app-mobile-apple" large>iOS app</Button>
            <Button target="download-app-mobile-android" large>Android app</Button>
            <a href="https://github.com/Bodypace/Mobile" target="_blank">see source code</a>
        </Tile>

        <Tile center wide>
            <h2>Server app</h2>
            <Button target="download-app-server-apple" large>MacOS app</Button>
            <Button target="download-app-server-windows" large>Windows 10 app</Button>
            <Button target="download-app-server-linux" large>Linux app</Button>
        </Tile>
    </Tiles>
</Page>

<style>
    h1 {
        /* font-size: 40px; */
        margin: 75px 0;
        padding: 0;
        font-weight: lighter;
    }

    h2 {
        font-weight: lighter;
    }

    a {
        margin-top: 15px;
        color: inherit;
        font-weight: lighter;
    }

    a:hover {
        text-decoration: none;
    }
</style>
