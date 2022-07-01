<script>
  import Router from 'svelte-spa-router'
  import Index from './routes/Index.svelte'
  import Chords from './routes/Chords.svelte'
  import NotFound from './routes/NotFound.svelte'

  const routes = {
    // Exact path
    '/': Index,

    // Chords
    '/chords': Chords,

    // // Using named parameters, with last being optional
    // '/author/:first/:last?': Author,
    //
    // // Wildcard parameter
    // '/book/*': Book,
    //
    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
  }
</script>

<main>
  <nav>
    <a href='#/'>Home</a>
    <a href='#/chords'>Chords</a>
  </nav>
  <Router routes={routes} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    padding: 1em;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  a {
    color: black;
    cursor: pointer;
    padding: 1rem;
  }

  a:hover {
    color: orangered;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
