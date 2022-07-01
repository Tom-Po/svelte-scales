<script>
  import Audio from '../lib/Audio.svelte'
  import Button from '../lib/Button.svelte'
  import A from '../assets/audio/samples/A.mp3'
  import B from '../assets/audio/samples/B.mp3'
  import D from '../assets/audio/samples/D.mp3'
  import G from '../assets/audio/samples/G.mp3'
  import E from '../assets/audio/samples/lowE.mp3'
  import e from '../assets/audio/samples/highE.mp3'

</script>
<svelte:head>
  <title>Scales - Home</title>
</svelte:head>

<h1>Homepage of Scales app</h1>
<Button text='Click me' onClick={()=> console.log('clicked')} />
<p>List of colors</p>
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
<Audio source={e}/>
<Audio source={B}/>
<Audio source={G}/>
<Audio source={D}/>
<Audio source={A}/>
<Audio source={E}/>
<a href='#/chords'>Chords</a>

<style>
  ul {
    display: flex;
    justify-content: center;
  }

  li {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: 5px;
  }

  li:first-of-type {
    background-color: var(--bg-color);
    outline: 1px solid black;
  }

  li:nth-of-type(2) {
    background-color: var(--bg-light-color);
  }

  li:nth-of-type(3) {
    background-color: var(--contrast-color);
  }

  li:nth-of-type(4) {
    background-color: var(--success-color);
  }

  li:nth-of-type(5) {
    background-color: var(--accent-color);
  }
</style>
