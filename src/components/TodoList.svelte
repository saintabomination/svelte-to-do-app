<script>
  import Todo from './Todo.svelte';

  export let todos;
  export let markTodoDone;
  export let deleteTodo;
</script>

<div class="todo-list">
  {#if todos.length}
    <ul>
      {#each todos as todo (todo.id)}
        <Todo todo={todo} markTodoDone={markTodoDone} deleteTodo={deleteTodo} />
      {/each}
    </ul>
    {:else}
    <div class="no-todos">
      <p>There are no to-dos to show.</p>
    </div>
  {/if}
</div>

<style>
  .todo-list {
    flex: 1;
    overflow-y: auto;
  }

  .todo-list .no-todos {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
  }
</style>
