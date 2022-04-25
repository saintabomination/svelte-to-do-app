<script>
  import Button from './Button.svelte';

  export let todo;
  export let markTodoDone;
  export let deleteTodo;
</script>

<div class="todo" class:done={todo.done}>
  <li>
    <p>{todo.text}</p>
    <div class="todo-buttons">
      <Button on:click={() => markTodoDone(todo.id)}>Mark done</Button>
      <Button on:click={() => deleteTodo(todo.id)}>Delete</Button>
    </div>
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

  .todo.done p {
    text-decoration: line-through;
  }

  .todo .todo-buttons {
    display: flex;
    gap: 8px;
  }
</style>
