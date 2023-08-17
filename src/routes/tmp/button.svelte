<script>
    export let target;
    export let large;
    export let noicon;

    const icons = {
        apple: "fa-brands fa-apple icon-apple",
        android: "fa-brands fa-android icon-android",
        windows: "fa-brands fa-windows icon-windows",
        linux: "fa-brands fa-linux icon-linux",
    };

    function notAvailableButton(icon) {
        return {
            href: "",
            target: "_self",
            class: "unavailable",
            icon,
        };
    }

    const data = {
        // desktop
        "download-app-desktop-apple": notAvailableButton(icons.apple),
        "download-app-desktop-windows": notAvailableButton(icons.windows),
        "download-app-desktop-linux": notAvailableButton(icons.linux),

        // mobile
        "download-app-mobile-apple": notAvailableButton(icons.apple),
        "download-app-mobile-android": {
            href: "https://play.google.com/store/apps/details?id=com.bodypace.mobileapp",
            target: "_blank",
            icon: icons.android,
        },

        // server
        "download-app-server-apple": notAvailableButton(icons.apple),
        "download-app-server-windows": notAvailableButton(icons.windows),
        "download-app-server-linux": notAvailableButton(icons.linux),
    };

    $: values = data[target];
</script>

<a href={values.href} target={values.target} class="x y {values.class}" class:large>
    {#if !noicon && values.icon}
        <i class={values.icon} />
    {/if}
    <slot />
</a>

<style>
    a {
        margin: 15px;
        padding: 15px 30px;
        border: 1px solid grey;
        color: black;
        text-decoration: none;
        cursor: pointer;
        user-select: none;
    }

    .large {
        border: 1px solid black;
        padding: 20px 25px;
        padding-left: 15px;
        width: 20vw;
        margin: 20px;
    }

    a:hover {
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

    @media screen and (max-width: 1300px) {
        .x.y {
            font-size: 14px;
            width: 100%;
        }
    }

    .icon-apple {
        /* color: black; */
    }
    .icon-windows {
        /* color: #1c71d8; */
    }
    .icon-linux {
        /* color: #000000; */
    }

    i[class*="icon-"] {
        margin: 0 10px;
        font-size: 24px;
        color: silver;
    }

    i[class*="icon-"].icon-android {
        color: #2ec27e;
    }
</style>
