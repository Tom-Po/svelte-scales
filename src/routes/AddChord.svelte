<script>
  import PageTransition from '../lib/PageTransition.svelte'
  import { chords } from '../stores.js'

  let chordName = ''
  let fingering = ''
  let chordsData = []
  let success = {
    status: false,
    message: 'L\'accord à bien été créé',
  }

  const errors = {
    alreadyKnown: {
      status: false,
      message: 'Cet accord est déjà connu',
    },
    missingField: {
      status: false,
      message: 'Tout les champs sont requis',
    },
  }

  chords.subscribe(value => {
    chordsData = value
  })

  const onSubmit = () => {
    if (!fingering || !chordName) {
      errors.missingField.status = true
      return
    }
    console.log('submissions')
    console.log(chordName)
    chords.update(prev => [...prev, {
      chordName,
      fingering,
    }])
    success.status = true
    setTimeout(() => {
      success.status = false
    }, 2000)
  }

  const onChordNameChange = () => {
    errors.alreadyKnown.status = false
    const result = chordsData.filter(c => c.chordName === chordName)
    if (result.length) {
      errors.alreadyKnown.status = true
    }
  }
</script>

<PageTransition>
  <h1>Form add Chord</h1>
  <form on:submit|preventDefault={onSubmit}>
    {#if success.status}
      <div>L'accord à bien été ajouté</div>
    {/if}
    <div class='form-group'>
      <div class='form-label'>Chordname</div>
      <input type='text' bind:value={chordName} on:input={onChordNameChange}>
      {#if errors.alreadyKnown.status}
        <div class='form-error'>{errors.alreadyKnown.message}</div>
      {/if}
    </div>
    <div class='form-group'>
      <div class='form-label'>Fingering</div>
      <input type='text' bind:value={fingering}>
    </div>
    {#if errors.missingField.status}
      <div class='form-error'>{errors.missingField.message}</div>
    {/if}
    <input type='submit'>
  </form>
</PageTransition>

<style>
  .form-group {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    text-align: left;
  }

  .form-group,
  .form-label {
    margin-bottom: .5rem;
  }

  .form-error {
    padding: .5rem 0;
    font-size: 12px;
    color: var(--danger)
  }
</style>
