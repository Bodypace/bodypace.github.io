<script>
    import Logo from "../lib/components/logo.svelte";
    import Page from "$lib/components/page.svelte";

    import Buttons from "./tmp/buttons.svelte";
    import Button from "./tmp/button.svelte";
    import Link from "./tmp/link.svelte";
    import Tiles from "./tmp/tiles.svelte";
    import Tile from "./tmp/tile.svelte";
</script>

<Page name="home">
    <Logo />
    <h1>Own your health data, share it, and get insights from it</h1>
    <Buttons>
        <Button target="download-app-mobile-android" noicon
            >Download mobile app</Button
        >
        <!-- <Button target="download-app-desktop">Download desktop app</Button> -->
        <!-- <Button target="app-mobile-download">Login to online account</Button> -->
    </Buttons>
    <Link href="/downloads">See other downloadable content</Link>
    <Tiles spaced>
        <Tile border>
            <h2>Personalized & Private</h2>
            <h3>
                Don't miss anything important health-wise while living care-free
            </h3>
            <p>
                Interpret your data with the latest medical knowledge to get
                personalized and cost-aware recommendations, both proactive and
                reactive. Every result generated has available explanations of
                where it came from.
            </p>
            <p>
                Our algorithms, which analyze your data, never expose it and can
                be run offline animously without any account.
            </p>
            <p>
                Our free and optional "Online account" supports data stored on
                local devices.
            </p>
        </Tile>
        <Tile border>
            <h2>Secure & Decentralized</h2>
            <h3>Even we don't have access to your data</h3>
            <p>
                When using Bodypace, your data is truly yours; there is no need
                to trust a company or a government. We don't have to make any
                claims that your data is safe, as it's impossible for us to read
                your data, analyze it, sell it, etc.
            </p>
            <h3>You can store your data in our cloud but don't have to</h3>
            <p>
                There is no obligatory central database. We provide you with an
                optional "Online account" which offers optional storage, but you
                may as well keep all or some data on your devices.
            </p>
        </Tile>
        <Tile border>
            <h2>Open & Trustless</h2>
            <h3>
                Our source code, finances and development process are an open
                book
            </h3>
            <p>
                Everyone can audit and contribute to Bodypace. Everything is
                shared under simple and permissive licenses.
            </p>
            <p>
                Data on our servers ("Online account") is fully encrypted, but
                if you don't trust it, you can read the source-code, spin up
                your own Bodypace server instance, or keep your data somewhere
                else.
            </p>
            <p>
                If you decide to use our cloud storage, that's is the only thing
                you pay for; features developed by Bodypace are actually free.
            </p>
        </Tile>
    </Tiles>
</Page>

<style>
    h1,
    h2,
    h3 {
        padding: 0;
    }

    h1 {
        margin: 25px 0 75px;
        padding: 0 30px;
        font-size: 40px;
        font-weight: lighter;
    }

    @media screen and (max-width: 1300px) {
        h1 {
            font-size: 24px;
            text-align: center;
        }
    }

    h2 {
        margin: 15px 0;
        font-size: 14px;
        font-weight: lighter;
    }

    h3 {
        margin: 15px 0;
        font-size: 18px;
        font-weight: normal;
        /* font-weight: lighter; */
    }

    p {
        font-weight: lighter;
    }
</style>
