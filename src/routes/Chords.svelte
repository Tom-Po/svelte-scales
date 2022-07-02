<script>
  import ChordListItem from '../lib/ChordListItem.svelte'
  import CircleOfFiths from '../lib/CircleOfFiths.svelte'
  const rootNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A',  'A#', 'B']
  const onSubmit = () => {
    console.log("Submit")
  }
</script>

<svelte:head>
  <title>Scales - Chords</title>
</svelte:head>

<h1>List of chords</h1>
<form action='#' on:submit|preventDefault={onSubmit}>
  <input type='text' value='key'>
  <input type='submit'>
</form>
<ul>
  {#each rootNotes as note}
      <ChordListItem text={note} link={'#/chords/' + note} />
  {/each}
</ul>

<style>
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
