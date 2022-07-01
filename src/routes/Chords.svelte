<script>
  import ChordListItem from '../lib/ChordListItem.svelte'
  import CircleOfFiths from '../lib/CircleOfFiths.svelte'
  const rootNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A',  'A#', 'B']
</script>

<svelte:head>
  <title>Scales - Chords</title>
</svelte:head>

<h1>List of chords</h1>
<ul>
  {#each rootNotes as note}
      <ChordListItem text={note} link={'#/chords/' + note} />
  {/each}
</ul>
<CircleOfFiths />

<style>
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
