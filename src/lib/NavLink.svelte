<script>
  import {link} from 'svelte-spa-router'
  export let text = 'Lien'
  export let to = '/';
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
