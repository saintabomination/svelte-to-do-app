<script>
  export let todoText;
</script>

<input type="text" value={todoText} on:change />

<style>
  input {
    padding: 4px 8px;
    flex-grow: 1;
    background-color: #686868;
    color: #fafafa;
    outline: none;
    border: none;
    border-radius: 4px;
  }
</style>
