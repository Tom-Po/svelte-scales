<script>
  import { onDestroy } from 'svelte'
  import { push } from 'svelte-spa-router'
  import { majorRootNotes, minorRootNotes } from '../stores.js'

  const degreesToRad = (deg) => deg * 0.017453
  const radian = degreesToRad(360 / 12)
  const radius = 190
  const circleCenter = 300
  const offset = 120
  const minorOffset = 30

  let majorNotes = []
  let minorNotes = []

  const unsubscribeMajor = majorRootNotes.subscribe(value => {
    majorNotes = value
  })
  const unsubscribeMinor = minorRootNotes.subscribe(value => {
    minorNotes = value
  })

  const getPosition = (notes, offset) => notes.map((note, index) => ({
    note,
    x: (radius + offset) * Math.cos(radian * index) + circleCenter,
    y: (radius + offset) * Math.sin(radian * index) + circleCenter,
  }))

  $: majorNotes = getPosition(majorNotes, offset)
  $: minorNotes = getPosition(minorNotes, minorOffset)

  const handleClick = (note) => {
    push('#/chords/' + note)
  }

  onDestroy(unsubscribeMajor)
  onDestroy(unsubscribeMinor)
</script>

<div class='note-pattern'>
  <div class='circle'></div>
  <div class='minor-label'>Minor</div>
  {#each majorNotes as note}
    <div class='circle-text' on:click={() => handleClick(note.note)}
         style='top: {note.y}px; left: {note.x}px'><span>{note.note}</span></div>
  {/each}
  {#each minorNotes as note}
    <div class='circle-text minor' on:click={() => handleClick(note.note)}
         style='top: {note.y}px; left: {note.x}px'><span>{note.note}</span></div>
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
    background-color: var(--bg-color);

    width: 600px;
    height: 600px;

    /*transform: scale(1.05);*/
    transform-origin: top left;
  }

  .circle:after {
    content: '';
    background-color: var(--accent-color);

    width: 525px;
    height: 525px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .circle,
  .circle:after {

    transform-origin: top left;
  }

  .circle,
  .circle-text,
  .circle:after {
    border-radius: 50%;
    position: absolute;
  }

  .circle-text {
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-weight: 600;
    cursor: pointer;

    width: 4rem;
    height: 4rem;

    transform: translate(-50%, -50%);
    transition: 200ms ease-in-out;
  }

  .circle-text:not(.minor) {
    animation: major 2000ms forwards ease-in-out;
  }

  .circle-text.minor {
    background-color: var(--bg-light-color);
    animation: minor 2000ms forwards ease-in-out;
    animation-delay: 20ms;
  }

  .circle-text:hover span {
    transform: scale(1.2);
  }

  .minor-label {
    position: absolute;
    top: 150px;
    left: 50%;
    color: var(--bg-color);
    font-size: 2rem;
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
