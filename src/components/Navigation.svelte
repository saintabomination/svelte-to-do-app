<nav class="page-navigation">
  <h2>Page Navigation</h2>
  <ul class="navigation-items">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</nav>

<style>
  .page-navigation {
    display: flex;
    align-items: center;
    padding: 12px;
  }

  .navigation-items {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .navigation-items > li:not(:last-child) {
    margin-right: 12px;
  }
</style>
