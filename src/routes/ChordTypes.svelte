<script>
  import ChordListItem from '../lib/ChordListItem.svelte'
  import PageTransition from '../lib/PageTransition.svelte'

  export let params
  const { root } = params
  const majorTypes = ['maj', 'maj7', 'maj9', 'maj6']
  const minorTypes = ['m', 'm6', 'm7', 'm9']
  const alteredTypes = ['m7b5', 'dim', '7b5', '7#9']
</script>

<PageTransition>

  <h1>Chord types</h1>

  <h3>Major types</h3>
  <ul>
    {#each majorTypes as chordType}
      <ChordListItem text={root + chordType} link={'#/chords/detail/' + root + chordType} />
    {/each}
  </ul>

  <h3>Minor types</h3>
  <ul>
    {#each minorTypes as chordType}
      <ChordListItem text={root + chordType} link={'#/chords/detail/' + root + chordType} />
    {/each}
  </ul>

  <h3>Altered types</h3>
  <ul>
    {#each alteredTypes as chordType}
      <ChordListItem text={root + chordType} link={'#/chords/detail/' + root + chordType} />
    {/each}
  </ul>
</PageTransition>

<style>
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
