<script>
  import Router from 'svelte-spa-router'
  import Index from './routes/Index.svelte'
  import Chords from './routes/Chords.svelte'
  import NotFound from './routes/NotFound.svelte'
  import About from './routes/About.svelte'
  import { theme } from './stores.js'
  import ChordTypes from './routes/ChordTypes.svelte'
  import CircleFifths from './routes/CircleFifths.svelte'
  import Nav from './lib/Nav.svelte'

  const routes = {
    '/': Index,
    '/chords': Chords,
    '/circle': CircleFifths,
    '/chords/:root': ChordTypes,
    '/about': About,
    // // Wildcard parameter
    // '/book/*': Book,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
  }
  let currentTheme;

  theme.subscribe((value => {
    currentTheme = value
  }))
</script>

<main>
  <Nav />
  <p>current Theme is {currentTheme}  </p>
  <Router routes={routes} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --bg-color: #012030;
    --bg-light-color: #13678A;
    --contrast-color: #45C4B0;
    --success-color: #9AEBA3;
    --accent-color: #DAFDBA;
  }

  :global(body) {
    margin: 0;
  }

  :global(a) {
    color: white;
    text-decoration: none;
  }

  :global(a):hover {
    color: var(--accent-color);
  }

  :global(ul) {
    margin: 0;
    padding: 0;
  }

  :global(li) {
    list-style: none;
  }

  main {
    margin: 0 auto;
    text-align: center;
    background: rgb(1, 32, 48);
    background: linear-gradient(146deg, rgba(1, 32, 48, 1) 0%, rgba(19, 103, 138, 1) 32%, rgba(69, 196, 176, 1) 58%, rgba(154, 235, 163, 1) 74%, rgba(218, 253, 186, 1) 86%);
    color: white;
    height: 100vh;
  }
</style>
