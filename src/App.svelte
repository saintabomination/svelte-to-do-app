<script>
  import { v4 as uuidv4 } from 'uuid';

  import Navigation from './components/Navigation.svelte';
  import Todo from './components/Todo.svelte';
  import Footer from './components/Footer.svelte';

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
      <div class="content-wrap">
        {#if todos.length}
          <ul>
            {#each todos as todo (todo.id)}
              <Todo todo={todo} on:click={() => deleteTodo(todo.id)} />
            {/each}
          </ul>
          {:else}
          <p>There are no to-dos to show.</p>
        {/if}
        <div class="todo-input">
          <input on:change={e => handleTodoChange(e)} value={newTodo} type="text">
          <button on:click={() => addTodo()}>Add Todo</button>
        </div>
      </div>
    </div>
    <Footer />
</main>

<style>
  .main-wrap {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .main-wrap .content-part {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .main-wrap .content-part .content-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    height: 100%;
    max-height: 500px;
  }

  .main-wrap .content-part .content-wrap .todo-input {
    margin-top: auto;
  }
</style>
