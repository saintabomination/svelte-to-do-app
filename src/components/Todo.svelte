<script>
  export let todo;
  export let deleteTodo;
</script>

<div class="todo">
  <li>
    {todo.text}
    <button on:click={() => deleteTodo(todo.id)}>Delete</button>
  </li>
</div>

<style>

</style>
