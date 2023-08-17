<footer>
    <ul>
        <li>
            <a href="/regulations">Terms and conditions</a>
        </li>
        <li>
            <a href="/policy">Privacy Policy</a>
        </li>
    </ul>
</footer>

<style>
    footer {
        display: flex;
        margin-top: 100px;
        border-top: 1px dashed silver;
    }

    footer ul {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 40px 0;
        list-style-type: none;
    }

    a {
        display: block;
        padding: 10px 20px;
        color: inherit;
    }

    a:hover {
        text-decoration: none;
        cursor: pointer;
    }

    @media screen and (max-width: 1300px) {
        footer ul {
            flex-direction: column;
        }

        a:first-child {
            margin-bottom: 15px;
        }
    }
</style>
