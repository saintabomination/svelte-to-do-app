<script>
  import { v4 as uuidv4 } from 'uuid';

  import Navigation from './components/Navigation.svelte';
  import TodoList from './components/TodoList.svelte';
  import TodoForm from './components/TodoForm.svelte';
  import Footer from './components/Footer.svelte';

  let todos = [];

  const addTodo = text => {
    todos = [...todos, {
      id: uuidv4(),
      text: text,
      done: false,
    }];
  }

  const deleteTodo = id => {
    todos = todos.filter(
      todo =>
      todo.id !== id
    );
  }
</script>

<main class="main-wrap">
    <Navigation />
    <div class="content-part">
      <div class="content-wrap">
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <TodoForm addTodo={addTodo} />
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
    padding: 24px;
    background-color: #359c52;
  }

  .main-wrap .content-part .content-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    height: 100%;
    max-height: 500px;
    background-color: #fafafa;
  }
</style>
