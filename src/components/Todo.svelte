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
      <Button on:click={() => deleteTodo(todo.id)} buttonType="blue">Delete</Button>
    </div>
  </li>
</div>

<style>
  .todo {
    padding-left: 12px;
    transition: .2s;
    transition-property: border-width, margin-left;
  }

  .todo.done {
    margin-left: 12px;
    border-left: 3px solid #27c93f;
  }

  .todo li {
    display: flex;
    align-items: center;
    padding: 12px 0;
    width: 100%;
  }
  
  .todo p {
    padding-right: 12px;
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
