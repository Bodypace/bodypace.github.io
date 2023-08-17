<script>
    import Logo from "../lib/components/logo.svelte";
    import Page from "$lib/components/page.svelte";
</script>

<Page name="home">
    <Logo />
    <h1>Own your data, share it, and get insights from it</h1>
    <div class="buttons">
        <a href="https://play.google.com/store/apps/details?id=com.bodypace.mobileapp" target="_blank" class="download">Download mobile app</a>
        <!-- <span class="download">Download desktop app</span> -->
        <!-- <span class="download">Login to online account</span> -->
    </div>
    <a href="/downloads" class="dlink">See other downloadable content</a>
    <h3 />
    <article class="tiles">
        <div class="col">
            <section>
                <h4>Personalized & Private</h4>
                <h5>Don't miss anything important health-wise while living care-free</h5>
                <p>
                    Interpret your data with the latest medical knowledge to get personalized and cost-aware recommendations, both proactive and reactive. Every
                    result generated has available explanations of where it came from.
                </p>
                <p>Our algorithms, which analyze your data, never expose it and can be run offline animously without any account.</p>
                <p>Our free and optional "Online account" supports data stored on local devices.</p>
            </section>
        </div>
        <div class="col">
            <section>
                <h4>Secure & Decentralized</h4>
                <h5>Even we don't have access to your data</h5>
                <p>
                    When using Bodypace, your data is truly yours; there is no need to trust a company or a government. We don't have to make any claims that
                    your data is safe, as it's impossible for us to read your data, analyze it, sell it, etc.
                </p>
                <h5>You can store your data in our cloud but don't have to</h5>
                <p>
                    There is no obligatory central database. We provide you with an optional "Online account" which offers optional storage, but you may as well
                    keep all or some data on your devices.
                </p>
            </section>
        </div>
        <div class="col">
            <section>
                <h4>Open & Trustless</h4>
                <h5>Our source code, finances and development process are an open book</h5>
                <p>Everyone can audit and contribute to Bodypace. Everything is shared under simple and permissive licenses.</p>
                <p>
                    Data on our servers ("Online account") is fully encrypted, but if you don't trust it, you can read the source-code, spin up your own
                    Bodypace server instance, or keep your data somewhere else.
                </p>
                <p>If you decide to use our cloud storage, that's is the only thing you pay for; features developed by Bodypace are actually free.</p>
            </section>
        </div>
    </article>
</Page>

<style>
    .dlink {
        margin-top: 15px;
        text-decoration: underline;
        cursor: pointer;
    }

    .buttons {
        display: flex;
        flex-direction: row;
    }

    .download {
        padding: 15px 30px;
        margin: 15px;
        border: 1px solid grey;
        /* background-color: #f55557; */
        cursor: pointer;
        user-select: none;
        text-decoration: none;
        color: black;
    }

    .download:hover {
        background-color: aliceblue;
    }

    :global(*, *::before, *::after) {
        box-sizing: border-box;
    }

    :global(body) {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    h1 {
        font-size: 40px;
        margin: 0;
        /* margin-top: 75px; */
        margin-top: 25px;
        margin-bottom: 75px;
        padding: 0;
        font-weight: lighter;
    }

    h2 {
        font-size: 30px;
        margin: 0;
        margin-top: 75px;
        margin-bottom: 25px;
        padding: 0;
        font-weight: lighter;
    }

    h3 {
        margin: 15px 0;
        margin-bottom: 75px;
        padding: 0;
        font-weight: lighter;
        font-size: 20px;
    }

    h4 {
        margin: 15px 0;
        padding: 0;
        font-weight: lighter;
        font-size: 14px;
    }

    h5 {
        margin: 15px 0;
        padding: 0;
        /* font-weight: lighter; */
        font-weight: normal;
        font-size: 18px;
    }

    article {
        display: flex;
        flex-direction: row;
        min-height: 60vh;
    }

    .col {
        display: flex;
        flex-direction: column;
        width: 22vw;
        /* background-color: brown; */
        margin: 0 20px;
    }

    section {
        display: flex;
        flex: 1;
        flex-direction: column;
        border: 1px solid silver;
        border-radius: 8px;
        padding: 15px 30px;
        margin: 20px 0;
        /* width: 18vw; */
    }

    p {
        font-weight: lighter;
    }
</style>
