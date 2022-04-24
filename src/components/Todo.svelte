<script>
  export let todo;
</script>

<div class="todo">
  <li>
    <p>{todo.text}</p>
    <button on:click>Delete</button>
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
  }

  .todo button {
    margin-left: auto;
    padding: 12px;
  }
</style>
