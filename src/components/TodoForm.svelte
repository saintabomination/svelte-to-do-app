<script>
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
  <button>Add Todo</button>
</form>

<style>
  form {
    display: flex;
    margin-top: auto;
  }

  form input {
    flex: 1;
    padding: 12px;
  }

  form button {
    padding: 0 12px;
  }
</style>
