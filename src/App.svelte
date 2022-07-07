<script>
  import Router from 'svelte-spa-router'
  import Index from './routes/Index.svelte'
  import Chords from './routes/Chords.svelte'
  import NotFound from './routes/NotFound.svelte'
  import About from './routes/About.svelte'
  import ChordTypes from './routes/ChordTypes.svelte'
  import CircleFifths from './routes/CircleFifths.svelte'
  import Nav from './lib/Nav.svelte'
  import ChordDetail from './routes/ChordDetail.svelte'
  import AddChord from './routes/AddChord.svelte'
  import GlobalStyles from './styles/GlobalStyles.svelte'
  import { onMount } from 'svelte'
  import { chords } from './stores.js'
  import chordFile from './assets/output.json'
  import SandBox from './routes/SandBox.svelte'

  onMount(() => {
    chords.update(() => (chordFile))
  })

  const routes = {
    '/': Index,
    '/chords': Chords,
    '/chords/add': AddChord,
    '/chords/:root': ChordTypes,
    '/chords/detail/:chordName': ChordDetail,
    '/circle': CircleFifths,
    '/about': About,
    '/sandbox': SandBox,
    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
  }
</script>

<main>
  <Nav />
  <Router routes={routes} />
  <div class='sandbox'>
    <a href='#/sandbox'>Sandbox</a>
  </div>
</main>

<style>
  main {
    margin: 0 auto;
    text-align: center;
    background: rgb(1, 32, 48);
    background: linear-gradient(146deg, rgba(1, 32, 48, 1) 0%, rgba(19, 103, 138, 1) 32%, rgba(69, 196, 176, 1) 58%, rgba(154, 235, 163, 1) 74%, rgba(218, 253, 186, 1) 86%);
    color: white;
    height: 100vh;
    overflow: hidden;
  }

  .sandbox {
    position: fixed;
    bottom: .5rem;
    right: .5rem;
    background-color: var(--bg-color);
    padding: 1rem 2rem;
    border-radius: 4px;
    z-index: 1000;
  }
</style>
