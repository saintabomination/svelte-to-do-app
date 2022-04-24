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

<main class="main-wrap">
    <Navigation />
    <div class="content-part">
      {#if todos.length}
        <ul>
          {#each todos as todo (todo.id)}
            <Todo todo={todo} on:click={() => deleteTodo(todo.id)} />
          {/each}
        </ul>
        {:else}
        <p>There are no to-dos to show.</p>
      {/if}
      <input on:change={e => handleTodoChange(e)} value={newTodo} type="text">
      <button on:click={() => addTodo()}>Add Todo</button>
    </div>
    <Footer />
</main>

<style>
  .main-wrap {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content-part {
    flex: 1;
  }
</style>
