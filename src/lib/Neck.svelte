<script>
  export let chord = {
    strings: '0,2,2,0,0,0',
  }
  const strings = chord.strings.split(',')

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
  <div class='neck-template' style='--height: {range.max - range.min}'>
    {#each notes as string}
      {#if string.isMuted}
        <div class='string flex-center' style='--top-factor: 0'>X</div>
      {:else}
        <div class='string flex-center' style='--top-factor: {string.noteNumber - range.min}'>{string.noteNumber}</div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .neck-template {
    --width: 300px;
    position: relative;
    background-color: var(--bg-color);
    width: var(--width);
    height: calc(var(--height) * calc(var(--width) / 3));
    margin: 0 auto;
  }

  .string {
    cursor: pointer;
    position: absolute;
    top: calc(var(--top-factor) * calc(var(--width) / 6));
    width: calc(var(--width) / 6);
    height: calc(var(--width) / 6);
    background-color: red;
    border-radius: 50%;
    /*box-shadow: #DAFDBA;*/
  }

  .string:nth-of-type(2) {
    left: calc(var(--width) / 6);
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
</style>
