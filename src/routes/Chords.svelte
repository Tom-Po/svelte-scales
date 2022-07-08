<script>
  import ChordListItem from '../lib/ChordListItem.svelte'
  import PageTransition from '../lib/PageTransition.svelte'
  import { chords } from '../stores.js'
  import { onMount } from 'svelte'
  import SineWave from '../lib/SineWave.svelte'

  let jsonChords = []
  let chordsFromAPI

  onMount(async () => {
    const response = await fetch('http://localhost:8001/chords')
    chordsFromAPI = await response.json()
  })

  chords.subscribe(chords => {
    const groupByLetter = ((items) => items.reduce((rv, x) => {
      (rv[x.chordName.charAt(0)] = rv[x.chordName.charAt(0)] || []).push(x)
      return rv
    }, {}))
    jsonChords = groupByLetter(chords)
  })

</script>

<svelte:head>
  <title>Scales - Chords</title>
</svelte:head>

<PageTransition>
  <!--{#if chordsFromAPI}-->
  <!--  <h2>List of chords from Mongo</h2>-->
  <!--  <ul>-->
  <!--    {#each chordsFromAPI as chord}-->
  <!--      <ChordListItem text={chord.chordName} link={'#/chords/' + chord.chordName} />-->
  <!--    {/each}-->
  <!--  </ul>-->
  <!--{/if}-->
  <div class='list'>
    <h2>List of chords from store from json</h2>
    {#each Object.keys(jsonChords) as rootChord}
      <h1>{rootChord}</h1>
      <ul>
        {#each jsonChords[rootChord] as chord}
          <ChordListItem text={chord.chordName} link={'#/chords/detail/' + chord.chordName} />
        {/each}
      </ul>
    {/each}
  </div>
</PageTransition>

<style>
  .list {
    overflow-y: scroll;
    max-height: calc(100vh - 50px);
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  ul li {
    justify-content: center;
  }
</style>
