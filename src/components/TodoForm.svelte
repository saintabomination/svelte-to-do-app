<script>
  import Button from './Button.svelte';

  export let addTodo;
  let todoText = '';

  const handleSubmit = () => {
    if (todoText) {
      addTodo(todoText);
      todoText = '';
    }
  }
</script>

<form on:submit|preventDefault={() => handleSubmit()}>
  <input type="text" bind:value={todoText}>
  <Button>Add Todo</Button>
</form>

<style>
  form {
    display: flex;
    align-items: center;
    margin-top: auto;
  }

  form input {
    flex: 1;
    padding: 12px;
    outline: none;
    border: none;
  }
</style>
