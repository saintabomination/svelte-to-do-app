<script>
  import Todo from './Todo.svelte';

  export let todos;
  export let deleteTodo;
</script>

<div class="todo-list">
  {#if todos.length}
    <ul>
      {#each todos as todo (todo.id)}
        <Todo todo={todo} on:click={() => deleteTodo(todo.id)} />
      {/each}
    </ul>
    {:else}
    <p>There are no to-dos to show.</p>
  {/if}
</div>

<style>
  .todo-list {
    flex: 1;
    overflow-y: auto;
  }
</style>
