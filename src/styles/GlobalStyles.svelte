<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    --bg-color: #012030;
    --bg-light-color: #13678A;
    --contrast-color: #45C4B0;
    --success-color: #9AEBA3;
    --accent-color: #DAFDBA;
    --danger: #F55851;

    --alpha: .8;
  }

  :global(body) {
    margin: 0;
  }

  :global(a) {
    color: white;
    text-decoration: none;
  }

  :global(a):hover {
    color: var(--accent-color);
  }

  :global(ul) {
    margin: 0;
    padding: 0;
  }

  :global(li) {
    list-style: none;
  }

  :global(.flex-center) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
