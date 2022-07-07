<script>
  import PageTransition from '../lib/PageTransition.svelte'
  import Neck from '../lib/Neck.svelte'
  import { chords } from '../stores.js'

  export let params
  const { chordName } = params

  let chord
  let loading = false
  let strings = []

  chords.subscribe(chords => {
    [chord] = chords.filter(c => c.chordName === chordName)
    if(chord) {
      strings = chord.strings.split(',')
    }
  })

</script>

<PageTransition>
  <h1>{chordName}</h1>
  {#if chord}
    <div>{JSON.stringify(chord)}</div>
    <Neck chord={chord} />
  {:else}
    <div>Aucun accord n'est disponible pour le nom demandé</div>
    <a href='#/chords/add'>Ajouter un accord</a>
  {/if}
</PageTransition>
