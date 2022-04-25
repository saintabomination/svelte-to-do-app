<script>
  import Input from './Input.svelte';
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
  <Input on:change={e => todoText = e.target.value} todoText={todoText} />
  <Button buttonType="blue">Add Todo</Button>
</form>

<style>
  form {
    display: flex;
    align-items: center;
    margin-top: auto;
    gap: 8px;
  }
</style>
