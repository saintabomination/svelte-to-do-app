<script>
  import Button from './Button.svelte';

  export let todo;
  export let deleteTodo;
</script>

<div class="todo">
  <li>
    <p>{todo.text}</p>
    <Button on:click={() => deleteTodo(todo.id)}>Delete</Button>
  </li>
</div>

<style>
  .todo li {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .todo p {
    padding: 12px;
    flex-grow: 1;
  }
</style>
