<script>
  import { draw } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  import PageTransition from '../lib/PageTransition.svelte'
  let condition = false
</script>

<PageTransition>
  <h1>Sandbox page</h1>

  <button on:click={() => condition = !condition}>
    show svg
  </button>
</PageTransition>

<svg viewBox='0 0 300 300'>
  {#if condition}
    <rect transition:draw='{{duration: 1500, easing: quintOut}}'
          style='stroke: rgb(0, 0, 0); paint-order: stroke; fill: rgba(172, 224, 52, 0);'
          transform='matrix(0.707107, 0.707107, -0.707107, 0.707107, 166.943146, -89.23568) translate(-100, -90)'
          x='153.928' y='220.64' width='150' height='150' rx='2' ry='2' />
    <rect transition:draw='{{duration: 1500, easing: quintOut}}'
          style='stroke: rgb(0, 0, 0); paint-order: stroke; fill: rgba(172, 224, 52, 0);'
          transform='matrix(0.707107, 0.707107, -0.707107, 0.707107, 166.943146, -89.23568) translate(-100, -90)'
          x='160.928' y='225.64' width='150' height='150' rx='2' ry='2' />
    <rect transition:draw='{{duration: 1500, easing: quintOut}}'
          style='stroke: rgb(0, 0, 0); paint-order: stroke; fill: rgba(172, 224, 52, 0);'
          transform='matrix(0.707107, 0.707107, -0.707107, 0.707107, 166.943146, -89.23568) translate(-100, -90)'
          x='170.928' y='230.64' width='150' height='150' rx='2' ry='2' />
    <rect transition:draw='{{duration: 1500, easing: quintOut}}'
          style='stroke: rgb(0, 0, 0); paint-order: stroke; fill: rgba(172, 224, 52, 0);'
          transform='matrix(0.707107, 0.707107, -0.707107, 0.707107, 166.943146, -89.23568) translate(-100, -90)'
          x='180.928' y='235.64' width='150' height='150' rx='2' ry='2' />
    <rect transition:draw='{{duration: 1500, easing: quintOut}}'
          style='stroke: rgb(0, 0, 0); paint-order: stroke; fill: rgba(172, 224, 52, 0);'
          transform='matrix(0.707107, 0.707107, -0.707107, 0.707107, 166.943146, -89.23568) translate(-100, -90)'
          x='190.928' y='240.64' width='150' height='150' rx='2' ry='2' />
  {/if}
</svg>


<style>
  svg {
    height: 200px;
    width: 200px;
    display: block;
    margin: 0 auto;
    /*transform: rotate(-45deg);*/
    fill: var(--accent-color)
  }

  svg {
    filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, .5));
  }
</style>
