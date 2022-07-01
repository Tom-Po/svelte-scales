<script>
  import { push } from 'svelte-spa-router'

  const degreesToRad = (deg) => deg * 0.017453

  const majorRootNotes = ['A', 'E', 'B', 'Gb/F#', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D']
  const minorRootNotes = ['F#', 'C#', 'G#', 'Eb/D#', 'Bb', 'F', 'C', 'G', 'D','A', 'E', 'B']
  const circleCenter = 300
  const offset = 120
  const minorOffset = 30

  let majorNotes = []
  let radius = 200
  let radian = degreesToRad(360 / majorRootNotes.length)

  $: majorNotes = majorRootNotes.map((note, index) => ({
    note,
    x: (radius + offset) * Math.cos(radian * index) + circleCenter,
    y: (radius + offset) * Math.sin(radian * index) + circleCenter,
  }))
  $: minorNotes = minorRootNotes.map((note, index) => ({
    note,
    x: (radius + minorOffset) * Math.cos(radian * index) + circleCenter,
    y: (radius + minorOffset) * Math.sin(radian * index) + circleCenter,
  }))

  const handleClick = (click) => {
    push('#/chords/' + click.note)
  }
</script>

<div class='note-pattern'>
  <div class='circle'></div>
  {#each majorNotes as note}
    <div class='circle-text' on:click={() => handleClick(note)}
         style='top: {note.y}px; left: {note.x}px'>{note.note}</div>
  {/each}
  {#each minorNotes as note}
    <div class='circle-text minor' on:click={() => handleClick(note)}
         style='top: {note.y}px; left: {note.x}px'>{note.note}</div>
  {/each}
</div>

<style>
  .note-pattern {
    max-width: 600px;
    max-height: 600px;
    position: relative;
    margin: 4rem auto;
  }

  .circle {
    border: 1px solid red;
    border-radius: 50%;
    position: absolute;
    height: inherit;
    width: inherit;
    top: 0;
    left: 0;
    overflow: visible;
  }

  .circle-text {
    position: absolute;
    background-color: red;
    width: 3rem;
    height: 3rem;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
  }
  .circle-text:not(.minor) {
    animation: growIn 2000ms forwards ease-in-out;
  }
  .circle-text.minor {
    background-color: var(--bg-light-color);
  }
  .circle-text:hover {
    color: var(--contrast-color)
  }

  @keyframes growIn {
    from {
      transform: translate(-50%, -50%) scale(1.1);
      background-color: red;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      background-color: blue;
    }
  }
</style>
