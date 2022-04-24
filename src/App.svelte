<script>
  import { v4 as uuidv4 } from 'uuid';

  import Navigation from './Navigation.svelte';
  import Todo from './components/Todo.svelte';
  import Footer from './Footer.svelte';

  let newTodo = '';
  let todos = [];

  const addTodo = () => {
    if (newTodo) {
      todos = [...todos, {
        id: uuidv4(),
        text: newTodo,
        done: false,
      }];
      newTodo = '';
    }
  }

  const deleteTodo = id => {
    todos = todos.filter(
      todo =>
      todo.id !== id
    );
  }

  const handleTodoChange = e => {
    newTodo = e.target.value;
  }
</script>

<main>
    <Navigation />
    <h1>My To-Do App</h1>
    {#if todos.length}
      <ul>
        {#each todos as todo (todo.id)}
          <Todo todo={todo} deleteTodo={deleteTodo} />
        {/each}
      </ul>
      {:else}
      <p>There are no to-dos to show.</p>
    {/if}
    <input on:change={e => handleTodoChange(e)} value={newTodo} type="text">
    <button on:click={() => addTodo()}>Add Todo</button>
    <Footer />
</main>

<style>

</style>
