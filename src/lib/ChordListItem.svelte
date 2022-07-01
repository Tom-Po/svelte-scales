<script>
  export let text = 'List item'
  export let link = '/'
</script>

<li>
  <a href={link}>{text}</a>
</li>

<style>
  li {
    font-size: 1.5rem;
    border-radius: 4px;
    background-color: var(--bg-light-color);
    margin: .5rem;
    overflow: hidden;
    position: relative;
    z-index: 10;
    cursor: pointer;
    flex-shrink: 0;
    width: 10ch;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  }

  li,
  li:before {
    transition: 200ms ease-in-out;
  }

  li:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--accent-color);
    width: 0;
    height: 0;
    border-radius: 50%;
    z-index: -1;
  }

  li:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 8px 0px;
  }

  li:hover:before {
    transform: scale(400);
    width: 2px;
    height: 1px;
  }

  li:hover a {
    color: var(--bg-light-color)
  }

  a {
    text-decoration: none;
    z-index: 100;
    padding: 2rem;
    display: block;
    transition: all 200ms ease-in-out;
    transition-delay: 100ms;
  }
</style>
