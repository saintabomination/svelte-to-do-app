<script>
  import Navigation from './Navigation.svelte';
  import Footer from './Footer.svelte';

  let newTodo = '';
  let todos = [
    { id: 0, text: 'Todo 1', done: false },
    { id: 1, text: 'Todo 2', done: false },
    { id: 2, text: 'Todo 3', done: false },
    { id: 3, text: 'Todo 4', done: false },
    { id: 4, text: 'Todo 5', done: false },
  ];

  const addTodo = () => {
    todos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text: newTodo,
      done: false,
    }];
    newTodo = '';
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
          <li>{todo.text}</li>
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
