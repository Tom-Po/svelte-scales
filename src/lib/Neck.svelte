<script>
  import { neck } from '../stores.js'

  export let chord = {
    chordName: 'Em',
    rootNote: 'E',
    third: 'G',
    fifth: 'B',
    strings: '0,2,2,0,0,0',
  }

  let showNotes = false
  const strings = chord.strings.split(',')

  let neckNotes = []
  let rootNote = chord.chordName.charAt(0)

  neck.subscribe(notes => {
    neckNotes = notes
  })

  const getRange = (arr) => {
    const nums = []
    arr.forEach((el) => {
      if (el.noteNumber !== -1) nums.push(el.noteNumber)
    })
    return {
      min: Math.min(...nums),
      max: Math.max(...nums),
    }
  }

  const getNotes = (items) => items.map((item, index) => {
    const num = parseInt(item, 10)
    const note = {
      stringIndex: index,
      noteLabel: item,
      isMuted: item === 'X',
      noteNumber: -1,
    }
    if (!Number.isNaN(num)) {
      note.noteNumber = num
    }
    return note
  })

  const notes = getNotes(strings)
  const range = getRange(notes)
</script>

<div class='neck'>
  <h1>Neck</h1>
  <h2>lowest {range.min} | highest: {range.max}</h2>
  <h3>Showing : {showNotes ? 'Notes' : 'Fingering'}</h3>
  <button on:click={()=> showNotes = !showNotes}>Show  {showNotes ? 'Fingering' : 'Notes'}</button>
    <div class='indicator' class:muted={!showNotes}>
      <div class='root'>Root</div>
      <div class='third'>Third</div>
      <div class='fifth'>Fifth</div>
    </div>
  <div class='neck-template'
       style='--height: {range.max - range.min + 1}; --neck-border: {range.min === 0 ? "5px solid" : ""}'>
    {#each notes as string, i}
      {#if string.isMuted}
        <div class='string muted flex-center' style='--top-factor: 0'>X</div>
      {:else}
        {#if showNotes}
          <div
            class={
              neckNotes[i][string.noteNumber] === rootNote
              ? 'string flex-center root'
              : neckNotes[i][string.noteNumber] === chord.third
              ? 'string flex-center third'
              : neckNotes[i][string.noteNumber] === chord.fifth
              ? 'string flex-center fifth'
              : 'string flex-center '
            }
            style='--top-factor: {string.noteNumber - range.min}'>
            {neckNotes[i][string.noteNumber]}
          </div>
        {:else}
          <div class='string flex-center' style='--top-factor: {string.noteNumber - range.min}'>
            {string.noteNumber}
          </div>
        {/if}
      {/if}
    {/each}
    {#each notes as _, i}
      <div class='string-wave' style='--left-factor: {i}'></div>
    {/each}
    {#each Array(range.max - range.min + 1) as _, i}
      <div class='fret'></div>
    {/each}
  </div>
</div>

<style>
  .neck-template {
    --width: 33vw;
    --string-width: calc(var(--width) / 6);
    --neck-border: 0;

    border-top: var(--neck-border);
    background-color: var(--bg-color);

    position: relative;

    width: var(--width);
    height: calc(var(--height) * var(--string-width));

    margin: 0 auto;
  }

  .string-wave {
    --half-string-wave: calc(var(--string-width) / 2 - 2px);
    --left: calc(var(--left-factor) * var(--string-width) + var(--half-string-wave));
    background-color: blue;

    position: absolute;
    bottom: 0;
    top: 0;
    left: var(--left);
    width: 4px;
  }

  .string {
    --top: calc(var(--top-factor) * var(--string-width));
    cursor: pointer;
    position: absolute;
    top: var(--top);
    width: var(--string-width);
    height: var(--string-width);
    background-color: red;
    border-radius: 50%;
    transform: translateY(-1px) scale(.9);
    transform-origin: center center;
    z-index: 10;
  }

  .root {
    background-color: green;
  }

  .third {
    background-color: yellow;
  }

  .fifth {
    background-color: violet;
  }

  .string.muted {
    background-color: gray;
  }

  .string:nth-of-type(2) {
    left: var(--string-width);
  }

  .string:nth-of-type(3) {
    left: calc(var(--width) / 6 * 2);
  }

  .string:nth-of-type(4) {
    left: calc(var(--width) / 6 * 3);
  }

  .string:nth-of-type(5) {
    left: calc(var(--width) / 6 * 4);
  }

  .string:nth-of-type(6) {
    left: calc(var(--width) / 6 * 5);
  }

  .fret {
    border-bottom: 2px solid grey;
    height: calc(var(--string-width) - 2px);
    width: 100%;
  }

  .indicator {
    margin: 1rem auto;
    width: 200px;
  }
  .indicator.muted {
    filter: contrast(0);
  }

  @media screen and (max-width: 768px) {
    .neck-template {
      --width: 300px;
    }
  }
</style>
