<script>
  import { push } from 'svelte-spa-router'

  const degreesToRad = (deg) => deg * 0.017453

  const majorRootNotes = ['A', 'E', 'B', 'Gb/F#', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D']
  const minorRootNotes = ['F#', 'C#', 'G#', 'Eb/D#', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B']
  const circleCenter = 320
  const offset = 125
  const minorOffset = 45.5

  let radius = 190
  let radian = degreesToRad(360 / majorRootNotes.length)

  const getPosition = (notes, offset) => notes.map((note, index) => ({
    note,
    x: (radius + offset) * Math.cos(radian * index) + circleCenter,
    y: (radius + offset) * Math.sin(radian * index) + circleCenter,
  }))

  $: majorNotes = getPosition(majorRootNotes, offset)
  $: minorNotes = getPosition(minorRootNotes, minorOffset)

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
  .circle,
  .note-pattern {
    max-width: 600px;
    max-height: 600px;
  }

  .note-pattern {
    position: relative;
    margin: 4rem auto;
  }

  .circle {
    border: 1px solid var(--contrast-color);
    border-radius: 50%;
    position: absolute;
    width: 600px;
    height: 600px;
    overflow: visible;
    background-color: rgba(var(--contrast-color), .5);
    transform: scale(1.05);
    transform-origin: top left;
  }

  .circle-text {
    position: absolute;
    width: 4rem;
    height: 4rem;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    transition: 200ms ease-in-out;
  }

  .circle-text:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    width: 100px;
    height: 2px;
    background-color: red;
  }

  .circle-text:not(.minor) {
    animation: major 2000ms forwards ease-in-out;
  }

  .circle-text.minor {
    background-color: var(--bg-light-color);
    animation: minor 2000ms forwards ease-in-out;
    animation-delay: 20ms;
  }

  .circle-text:hover {
    opacity: .75;
    font-size: 2rem;
    vertical-align: middle;
  }

  @keyframes major {
    from {
      transform: translate(-50%, -50%) scale(1.1);
      background-color: var(--bg-light-color);
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      background-color: var(--accent-color);
      color: var(--bg-color)
    }
  }

  @keyframes minor {
    0% {
      transform: translate(-50%, -50%) scale(1.1);
      background-color: var(--accent-color);
    }
    80% {
      transform: translate(-50%, -50%) scale(1);
      background-color: var(--bg-light-color);
      color: white;
    }
  }
</style>
