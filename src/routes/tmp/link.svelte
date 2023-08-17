<script>
    export let href;
</script>

<a {href}>
    <slot />
</a>

<style>
    a {
        margin-top: 15px;
        text-decoration: underline;
        cursor: pointer;
        color: black;
    }

    @media screen and (max-width: 1300px) {
        a {
            font-size: 14px;
        }
    }
</style>
