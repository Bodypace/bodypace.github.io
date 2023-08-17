<div class="logo">
    <img src="./favicon.ico" />
    <span translate="no">Bodypace</span>
</div>

<style>
    .logo {
        margin: 50px 20px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
        cursor: pointer;
        user-select: none;
    }

    img {
        width: 64px;
        height: 64px;
    }

    span {
        text-align: center;
        vertical-align: center;
        font-size: 48px;
        padding: 15px 0;
        /* font-weight: 300; */
        font-weight: lighter;
        /* font-size: 12px; */
    }

    @media screen and (max-width: 1300px) {
        .logo {
            margin-top: 20px;
            gap: 5px;
        }

        img {
            width: 32px;
            height: 32px;
        }

        span {
            font-size: 28px;
        }
    }
</style>
