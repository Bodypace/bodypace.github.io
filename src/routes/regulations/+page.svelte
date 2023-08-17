<script>
    import Page from "$lib/components/page.svelte";
</script>

<Page name="regulations">
    <div id="logo">
        <img src="./favicon.ico" />
        <span translate="no">Bodypace</span>
    </div>
    <div id="document">
        <md-block id="markdown" src="https://raw.githubusercontent.com/Bodypace/Mobile/main/docs/terms-and-conditions.md">
            <h2 style="font-weight: lighter; color: grey;">Loading...</h2>
        </md-block>
    </div>
</Page>

<style>
    body {
        margin: 0px;
        padding: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: sans-serif;
    }

    #logo {
        margin-top: 50px;
        margin-bottom: 25px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    #logo > img {
        width: 72px;
        height: 72px;
    }

    #logo > span {
        text-align: center;
        vertical-align: center;
        font-size: 48px;
        font-weight: 300;
    }

    @media only screen and (min-width: 576px) {
        #logo {
            margin-top: 75px;
            margin-bottom: 75px;
        }
    }

    @media only screen and (max-width: 576px) {
        #logo > img {
            width: 64px;
            height: 64px;
        }

        #logo > span {
            font-size: 42px;
        }
    }

    #document {
        max-width: 90%;
        margin: auto;
        /* margin-top: 100px; */
        padding: 20px;
        color: grey;
    }

    @media only screen and (min-width: 992px) {
        #document {
            /* margin: 100px; */
            padding: 20px;
            max-width: 62%;
        }
    }

    md-block > h1 {
        color: black;
    }

    md-block > h2 {
        color: black;
    }

    #document > h2 {
        color: black;
    }
</style>
