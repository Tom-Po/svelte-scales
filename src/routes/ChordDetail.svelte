<script>
  import PageTransition from '../lib/PageTransition.svelte'
  import Neck from '../lib/Neck.svelte'
  import { chords } from '../stores.js'

  export let params
  const { chordName } = params

  let chord

  chords.subscribe(chords => {
    [chord] = chords.filter(c => c.chordName === chordName)
  })

</script>

<PageTransition>
  <h1>{chordName}</h1>
  {#if chord}
    <Neck chord={chord} />
  {:else}
    <div>Aucun accord n'est disponible pour le nom demandé</div>
    <a href='#/chords/add'>Ajouter un accord</a>
  {/if}
</PageTransition>
