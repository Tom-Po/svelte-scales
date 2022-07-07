<script>
  export let text = 'Button';
  export let onClick = () => {};

</script>

<button on:click={onClick()}>{text}</button>

<style>
  button {
    border: none;
    padding: 0.75rem 1.375rem;
    font-size: 1rem;
    color: white;
    text-decoration: none;
    cursor: pointer;
    background-color: var(--bg-light-color);
    transition: all 100ms ease;
  }

  button:hover {
    background-color: var(--contrast-color);
  }
</style>
