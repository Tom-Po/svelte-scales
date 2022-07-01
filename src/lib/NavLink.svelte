<script>
  import {link} from 'svelte-spa-router'
  export let text = 'Toto'
  export let to = '/';
  export let toto = 'toto'
</script>

<a href={to} use:link>
  {text}
</a>

<style>
  a {
    cursor: pointer;
  }

  a:hover {
    color: red
  }
</style>
