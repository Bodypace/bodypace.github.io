<script>
    import Page from "$lib/components/page.svelte";
</script>

<Page name="development">
    <h1>Development</h1>
    <!-- <h2>What Bodypace wants to handle</h2> -->

    <h2>Bodypace is open-source, feel free to contribute or copy it</h2>
    <p>
        Source code is on <a href="https://github.com/Bodypace">GitHub</a>. Everything is under
        <a href="https://choosealicense.com/licenses/apache-2.0/" target="_blank">Apache License 2.0</a>.
    </p>
    <p class="note">
        I (<a href="https://robert-dorna.github.io" target="_blank">Robert Dorna</a>) do this project for learning purposes (fullstack development), but wish
        for something like this to exist. Therefore, anyone can support me by contributing to Bodypace or coping its features. I don't guarantee this project to
        be developed long term as I would like to join a company that needs software engineers in healthtech, and that could create a conflict of interests
        forcing me to stop developing Bodypace.
    </p>

    <p>
        Here are useful links for contributors:
        <a href="https://www.figma.com/file/8MHd4BSbKtJgd2iLiF6zd1/Main-Design?node-id=0%3A1">User interface design</a>,
        <a href="https://github.com/orgs/Bodypace/projects/1">Project Board</a>,
        <a href="https://postman.com/bodypace ">Online account server API</a>.
    </p>
    <p class="note">More stuff will be added later, e.g. mobile app development builds (created with Expo EAS).</p>

    <p class="note warning">Below paragraphs are unfinished, a lot of staff is missing.</p>

    <h2>Vague set of integrations & functions that need to be developed</h2>

    <ul>
        <li>
            <b>devices/IoT</b>: smartphones, smart homes, smart watches, smart clothes, smart fridges, kitchen robots, air quality sensors, weighing scales,
            kitchen scales, computers, light sensors, blood pressure guagues, cameras,...
        </li>
        <li><b>diet</b>: water and food intake, calories, macros, microelements, superfoods, diet plans, products, recepies, shops, delivery,...</li>
        <li><b>exercises</b>: personal plans, stretching, yoga, cardio, sports, runninng, walks, weights lifting, pulse, breathing, posture,...</li>
        <li><b>medications</b>: drugs, supplements, prescriptions, accessories, guides,...</li>
        <li><b>tests</b>: blood work, x-rays, tomographies, doctor assesments, dna sequencing, self reported mood, energy levels etc.,...</li>
        <li><b>doctor</b>: scheduling visits, managing treatments, sharing data with doctors, accessing their treatmans plans,...</li>
        <li>
            <b>AI doctor</b>:
        </li>
        <li>and more...</li>
    </ul>

    <h2>Architecture</h2>

    <img src="diagrams/architecture.png" />

    <h3>Currnet database structure</h3>

    <img src="diagrams/database.alpha.png" />

    <h3>Planned database evolution</h3>

    <img src="diagrams/database.v0.png" />

    <img src="diagrams/database.v1.png" />

    <img src="diagrams/database.target.png" />

    <!-- <h3>Notes</h3>

    <table>
        <thead>
            <th>Sources</th>
            <th>Principles</th>
            <th>Categories</th>
            <th>Ideas</th>
        </thead>
        <tbody>
            <tr>
                <td>github "awesome" lists</td>
                <td>Security > Design > Features > Performance</td>
                <td>Business: Org, Payments, Legal, Telemetry</td>
                <td>NativeScript has nice roadmap</td>
            </tr>
            <tr>
                <td>google alternatives</td>
                <td>No code > low code > medium code > a lot of code</td>
                <td>**FullStack**: `DevOps`, `DX`</td>
                <td>cool interesting design stuff: https://brandname.tech/</td>
            </tr>
            <tr>
                <td>work relatives</td>
                <td>All reasons are "for now", in future it may change</td>
                <td>**Database**: `UML`,</td>
                <td>datascience</td>
            </tr>
            <tr>
                <td>company stacks, blogs, job requirements etc.</td>
                <td>No microfrontends and monorepos</td>
                <td>**Server**: `Serv`</td>
                <td>robotics</td>
            </tr>
        </tbody>
    </table> -->
    <!-- | given domain conferences, books & tutorials
    |
    | **Mobile/Website**: `UI/UX`, `Artwork`, 'Site', 'App',
    | VR, AR
    |
    | tools and news like [openbase](https://openbase.com) or [medium](https://medium.com/)
    |
    | **Rest**: `Random`, `Javascript`, `Inspiration`
    | https://www.nocode.tech/category/app-builders
    |
    | technology sponsors and integrations -->

    <!-- <h4>Ideas</h4> -->

    <!-- Explain why we dont user microfrontends and monorepo

the idea that:

- Is dedicated to a unique concern of the user experience
- Can be built and deployed in isolation

Is incorrect. You cannot const and orient product around those ideas.

[Canva founder Melanie Perkins&#x27;s $26 billion design startup is ready to take on Microsoft and Google | Fortune](https://fortune.com/longform/melanie-perkins-canva-founder-ceo-interview/)

sleep masterclass, drop tmp 2-3' to init sleep

6 hours sleep 10 years older cuz of drop in testosterone -->

    <!-- <h4>Radar</h4> -->

    <!-- | Using rn                                    | Noted for future                                                      | Why                                              | Ruled out for now                                                        | Reasons                                                                           |
| ------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| `Org` `DevOps` [GitHub](https://github.com) | `Org` [Aragon](https://aragon.org/)                                   | Voting and ownership on blockchain               | `Org` [YouTrack](https://jetbrains.com/youtrack/)                        | *using github projects instead*                                                   |
| `UI/UX` [Figma](https://figma.com)          | `UI/UX` `Site` `DevOps` [Webflow](https://webflow.com)                | Easy design and deploy website                   | `Org` [Code Climate](https://codeclimate.com)                            | *instinct + no devs to manage with it*                                            |
|                                             | `UI/UX` `Site` `DevOps` [Framer](https://framer.com)                  | Webflow alternative                              | `Org` [Upside](https://myupside.io)                                      | *sticking to simple GH project rn*                                                |
|                                             | `UI/UX` [Sketch](https://sketch.com/)                                 | Figma alternative                                | `Org` `DevOps` [Contentful](https://contentful.com)                      | *can't even understand it, looks like cloud storage + lots of bloat and hoax*     |
|                                             | `Artwork` [Canva](https://canva.com/)                                 | We need something like that                      | `DX` [CodeSandbox](https://codesandbox.io)                               | *no need rn for collaborative rapid live prototyping frontend code*               |
|                                             | `Org` [Creately](https://creately.com)                                | Visual planning, docs, workflow etc.             | `UI/UX` `App` `DevOps` [FlutterFlow](https://flutterflow.io)             | *looks very interesting, but rn we are not using flutter.* Also `Site`?           |
|                                             | `Site` [Hugo](https://gohugo.io/)                                     | Minimalistic good static site generator          | `Org` `Payments` [Square](https://squareup.com)                          | *this is oriented for retail, inventory, items selling and appointments*          |
|                                             | `Payments` [Stripe](https://stripe.com)                               | Great DX tool for internet payments              | `Site` [Web Components](https://www.webcomponents.org)                   | *small support, low popularity, at first glance looks ugly, litte benefits*       |
|                                             | `Payments` [FastSpring](https://fastspring.com)                       | Stripe alternative focused on SaaS               | `Site` `App` [Web Assembly](https://webassembly.org)                     | *avoid premature optimizations and writing lots of code. tho prob minimalistic*   |
|                                             | `Site` `DX` [Svelte](https://svelte.dev/)                             | Less bloat, BS and better DX+Perf than React?    | `Site` [Vue](https://vuejs.org)                                          | *if no `App` then svelte is probably even better so why bother.* Also `App`?      |
|                                             | `Site` `App` `DX` [Flutter](https://flutter.dev)                      | Less bloat, BS and better DX+Perf than JS stuff? | `App` [Ionic](https://ionicframework.com)                                | *why bother with cross-frontend-framework part of cross-mobile-platform SDK?*     |
|                                             | `DevOps` `DX` `Serv` `Site` [Next.js](https://nextjs.org)             | AFAIK leader in React FWs so prob worth checking | `DevOps` `DX` `Serv` `Site` [NuxtJS](https://nuxtjs.org)                 | *NextJS wannabe for Vue, AFAIK with more features/bloat. Whatever... < Svelte*    |
|                                             | `DX` [GitHub Copilot](https://github.com/features/copilot)            | AI that writes code chunks for you. Got better.  | `DX` `Site` [Polymer](https://polymer-library.polymer-project.org)       | *outdated, in maintainance mode. replaced by Lit*                                 |
|                                             | `DX` `Site` `App` [Zustand](https://zustand-demo.pmnd.rs)             | Good simple state management for JS/React,       | `DX` `Site` [Lit](https://lit.dev)                                       | *Web Components are ruled out, but it looks promising. maybe possible PWA?*       |
|                                             | `Serv` `DevOps` [SupaBase](https://supabase.com)                      | OS Firebase alternative. DB, auth, API, edge,... | `DX` `Site` [Bootstrap](https://getbootstrap.com)                        | *seems nice but usually it's still simple and more flexible to do it manually*    |
|                                             | `Legal` [TermsFeed](https://www.termsfeed.com)                        | Generate Compliance Agreements. Nice but risky   | `DX` `Site` [Sass](https://sass-lang.com)                                | *if css is enough stick to css*                                                   |
|                                             | `Legal` [Termly](https://termly.io)                                   | Alternative to TermsFeed. For small business     | `DX` `Site` [Less](https://lesscss.org)                                  | *if css is enough stick to css*                                                   |
|                                             | `Legal` [PrivacyPolicies](https://www.privacypolicies.com)            | Alternative to TermsFeed and Termly. Many things | `DX` `App` [NativeScript](https://nativescript.org)                      | *we don't need such native APIs in JS and if, Expo also has that*                 |
|                                             | `Legal` [GDPRPrivacyPolicy](https://www.gdprprivacypolicy.net)        | Yet another one, probably free Compliance alter. | `DX` `DevOps` [StackBlitz](https://stackblitz.com)                       | *aiming for simple stack that does't need such dev workstation mng tools*         |
|                                             | `Site` `App` [react-motion](https://github.com/chenglou/react-motion) | Spring animations                                | `DX` `DevOps` [Gitpod](https://www.gitpod.io)                            | *aiming for simple stack that does't need such dev workstation mng tools*         |
|                                             | `Site` `App` [Format.JS](https://formatjs.io)                         | Internationalize web apps on client & server     | `DX` `DevOps` [GiHub Codespaces](https://github.com/features/codespaces) | *aiming for simple stack that does't need such dev workstation mng tools*         |
|                                             | `Site` `App` [i18n](https://www.npmjs.com/package/i18n)               | Alternative to Format.JS                         | `DX` `Site` [cypress](https://www.cypress.io)                            | *no idea if such browser site end result testing will be needed or good*          |
|                                             |                                                                       |                                                  | `DX` `App` [ignite](https://github.com/infinitered/ignite)               | *nice buy project setup work has already been done, made minimalistic manually*   |
|                                             |                                                                       |                                                  | `DX` `Serv` `Site` `App` [RedwoodJS](https://redwoodjs.com)              | *cool but don't need such full stack. same reasons as for ignite, it's not min*   |
|                                             |                                                                       |                                                  | `DevOps` [JFrog](https://jfrog.com)                                      | *bloat, doing fine without it*                                                    |
|                                             |                                                                       |                                                  | `Org` [Kaggle](https://www.kaggle.com)                                   | *not needed, maybe in future Bodypace could have acc there for community*         |
|                                             |                                                                       |                                                  | `Org` [Dribbble](https://dribbble.com)                                   | *site for designers to show portfolio work, but we don't show extra designs*      |
|                                             |                                                                       |                                                  | `Site` `App` [Redux](https://redux.js.org)                               | *terrible DX overengineered bloated bad approach & solution to avoidable problem* |
|                                             |                                                                       |                                                  | `Site` `App` [MST](https://mobx-state-tree.js.org)                       | *probably better than redux but still worse than zustand or redux query*          |
|                                             |                                                                       |                                                  | `Site` `App` [React Query](https://tanstack.com/query/v4)                | *good but Apollo GraphQL covers it*                                               |
|                                             |                                                                       |                                                  | `Site` `App` [Immutable.js](https://immutable-js.com)                    | *seems unnecessarry and AFAIK gives shitty performance/memory usage*              |
|                                             |                                                                       |                                                  | `Telemetry` [Amplitude](https://amplitude.com)                           | *product analytics, not needed. btw many products there, potentially its bloat*   |
|                                             |                                                                       |                                                  | `Telemetry` [Comscore](https://www.comscore.com)                         | *Amplitude alternative, not needed*                                               |
|                                             |                                                                       |                                                  | `Telemetry` [Nielsen](https://www.nielsen.com)                           | *Amplitude is an alternative to this, not needed. Not sure if primarily TV stuff* |
|                                             |                                                                       |                                                  | `Telemetry` [drip](https://www.drip.com)                                 | *this is for ecommerce, looks unnecessary for SaaS*                               |
|                                             |                                                                       |                                                  | `Inspiration` [Unusual Whales](https://unusualwhales.com)                | *great inspiration, some dude did it all initially, beautiful and useful*         |
|                                             |                                                                       |                                                  | `Inspiration` [Uprise](https://uprise.us)                                | *looks nice, useful, a personal financial advisor*                                |
|                                             |                                                                       |                                                  | `Inspiration` [Stocktwits](https://stocktwits.com)                       | *aggregator of what is happening/been said in social media related to finances*   | -->

    <!-- <h4>Adder</h4> -->

    <!-- | Decision                                                                                     | Tags | Name                                         | Url                                                                                                       | Reason |
| -------------------------------------------------------------------------------------------- | ---- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------ |
|                                                                                              |      | onfido                                       |                                                                                                           |        |
|                                                                                              |      | retool                                       |                                                                                                           |        |
|                                                                                              |      | react -- next                                |                                                                                                           |        |
|                                                                                              |      | vue -- nuxt                                  |                                                                                                           |        |
|                                                                                              |      | svelte -- kit                                |                                                                                                           |        |
|                                                                                              |      | angular -- analog                            |                                                                                                           |        |
|                                                                                              |      | quick -- city                                |                                                                                                           |        |
|                                                                                              |      | solidjs -- start                             |                                                                                                           |        |
|                                                                                              |      | clickup                                      | https://clickup.com                                                                                       |        |
|                                                                                              |      | notion                                       | https://www.notion.so                                                                                     |        |
|                                                                                              |      | evernote                                     | https://evernote.com                                                                                      |        |
|                                                                                              |      | storybook                                    |                                                                                                           |        |
|                                                                                              |      | appwrite                                     |                                                                                                           |        |
|                                                                                              |      | digitalocean                                 |                                                                                                           |        |
|                                                                                              |      | gitpod                                       |                                                                                                           |        |
|                                                                                              |      | supabase                                     |                                                                                                           |        |
|                                                                                              |      | neovim                                       |                                                                                                           |        |
|                                                                                              |      | vscode                                       |                                                                                                           |        |
|                                                                                              |      | feathresjs                                   |                                                                                                           |        |
|                                                                                              |      | redwoodjs                                    |                                                                                                           |        |
|                                                                                              |      | parcel                                       | https://parceljs.org                                                                                      |        |
|                                                                                              |      | sequelizejs                                  |                                                                                                           |        |
|                                                                                              |      | prisma                                       | https://www.prisma.io/dataguide/managing-databases/database-replication/database-replication-introduction |        |
|                                                                                              |      | apollo graphql                               |                                                                                                           |        |
|                                                                                              |      | linode                                       |                                                                                                           |        |
|                                                                                              |      | surrealDB                                    | https://surrealdb.com/docs                                                                                |        |
|                                                                                              |      | pouchdb                                      | https://pouchdb.com/                                                                                      |        |
|                                                                                              |      | termshub.io                                  |                                                                                                           |        |
|                                                                                              |      | PrivacyPolicies.com                          |                                                                                                           |        |
|                                                                                              |      | freeprivacypolicy.com                        |                                                                                                           |        |
|                                                                                              |      | termsfeed.com                                |                                                                                                           |        |
|                                                                                              |      | getterms.io                                  |                                                                                                           |        |
|                                                                                              |      | https://www.termsandconditionsgenerator.com/ |                                                                                                           |        |
|                                                                                              |      | app-privacy-policy.com (used for TOC)        | https://www.app-privacy-policy.com/download.php?lang=en&token=uBt4wKG4FYvW9BnzeiGdYI90ekFgMLrg            |        |
| there are not in any particular format, text does not mean things below/above it are related |      |                                              |                                                                                                           |        | -->

    <!-- [Curated list of 18 App Builders - NoCode.Tech](https://www.nocode.tech/category/app-builders) [SurrealDB | Documentation | The ultimate serverless cloud database](https://surrealdb.com/docs) https://www.prisma.io/dataguide/managing-databases/database-replication/database-replication-introduction [https://pouchdb.com/](https://pouchdb.com/) -->

    <!-- IPFS, access control https://ethereum.org/en/developers/docs/ https://docs.filecoin.io/ https://crane.vc/
    https://crane.vc/announcing-mailchain-the-future-of-web3-communication/
    https://cryptodaily.co.uk/2022/09/backed-by-46m-in-seed-funding-mailchain-launches-the-first-multi-wallet-web3-email-platform
    https://docs.mailchain.com/user/concepts/understanding-mailchain-authentication/#will-my-data-be-accessible-after-i-have-recovered-my-account
    https://mailchain.com/ https://ledgermail.io/ https://medium.com/fabric-ventures/ethermail-reimagining-email-for-web3-443e39541736
    https://cointelegraph.com/news/this-is-what-your-email-could-look-like-in-web3 https://ethermail.io/ https://skiff.com/crypto
    https://blockworks.co/south-korea-to-roll-out-blockchain-based-identity-report/
    https://www.entrepreneur.com/en-au/technology/this-blockchain-based-messaging-app-is-providing-real-data/435918 https://cryptodata.com/
    https://cryptodata.com/wispr https://www.wired.com/story/signal-mobilecoin-payments-messaging-cryptocurrency/ https://skiff.com/ https://dmail.ai/
    https://cardstack.com/ https://www.investopedia.com/best-bitcoin-debit-cards-5114761 decentralized escrow, decentralized exchanges and p2p exchanges
    https://www.smartlink.so/ https://www.smartlink.so/escrow-smart-contract/ https://mobilecoin.com/ https://www.quora.com/Why-do-some-people-hate-technology
    non custodial crypto exchange https://defiprime.com/ethereum https://zengo.com/ (wallet) buy crypto non-custodial https://localcryptos.com/
    https://beldex.io/ bchat binance - custodial, they are probably developing something for non-custodial KYC on BSC coinbase coinbase card coinbase wallet
    bitpay metamask status minix grapherex https://paxful.com/ https://adamant.im/ https://www.dialect.to/ https://www.web3messaging.online/ status loses your
    contacts on another device localmonero, agoradesk itp. bisq Docker DockerHub Postman Heroku Slack Wix Wix Logo Maker iubenda ngrok zeplin stigg.io microsoft
    Azure swagger bitrise CircleCI Sentry Firebase Dotenv-vault - Tech details - Mobile app: [React Native](https://reactnative.dev/),
    [Expo](https://expo.dev/), - Server: FeathersJS, Node.js, [Sequelize](https://sequelize.org/), [Docker](https://www.docker.com/), - Website:
    [Namecheap](https://www.namecheap.com/), [React](https://reactjs.org/), *in progress* -->
</Page>

<style src="./style.css">
</style>
