<script>
  export let buttonType = 'default';
</script>

<button class={buttonType} on:click>
  <slot></slot>
</button>

<style>
  button {
    padding: 4px 8px;
    width: max-content;
    border: none;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
  }

  button.default {
    color: #141414;
    border: 1px solid #cccccc;
  }

  button.blue {
    background: linear-gradient(to bottom, #73b6fa, #4a8ff3);
    color: #fafafa;
  }
</style>
