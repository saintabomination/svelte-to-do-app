<script>
  import { v4 as uuidv4 } from 'uuid';

  import Navigation from './Navigation.svelte';
  import Footer from './Footer.svelte';

  let newTodo = '';
  let todos = [];

  const addTodo = () => {
    todos = [...todos, {
      id: uuidv4(),
      text: newTodo,
      done: false,
    }];
    newTodo = '';
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
    <Navigation/>
    <h1>My To-Do App</h1>
    {#if todos.length}
      <ul>
        {#each todos as todo (todo.id)}
          <li>
            {todo.text}
            <button on:click={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        {/each}
      </ul>
      {:else}
      <p>There are no to-dos to show.</p>
    {/if}
    <input on:change={e => handleTodoChange(e)} value={newTodo} type="text">
    <button on:click={() => addTodo()}>Add Todo</button>
    <Footer/>
</main>

<style>

</style>
