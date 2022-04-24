<script>
  import { v4 as uuidv4 } from 'uuid';

  import TodoList from './components/TodoList.svelte';
  import TodoForm from './components/TodoForm.svelte';

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
    <div class="content-part">
      <div class="content-wrap">
        <div class="titlebar">
          <div class="button"></div>
          <div class="button"></div>
          <div class="button"></div>
        </div>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
</main>

<style>
  .main-wrap {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .main-wrap .content-part {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 24px;
    background-color: #232323;
  }

  .main-wrap .content-part .content-wrap {
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 100%;
    max-width: 480px;
    height: 100%;
    max-height: 500px;
    background-color: #151718;
    box-shadow: 0 20px 68px rgb(0 0 0 / 55%);
    border-radius: 8px;
  }

  .main-wrap .content-part .content-wrap .titlebar {
    display: flex;
    align-items: center;
    padding: 12px;
    width: 100%;
    height: 36px;
  }

  .main-wrap .content-part .content-wrap .titlebar .button {
    margin-right: 8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }

  .main-wrap .content-part .content-wrap .titlebar .button:nth-child(1) {
    background-color: #ff5f56;
  }

  .main-wrap .content-part .content-wrap .titlebar .button:nth-child(2) {
    background-color: #ffbd2e;
  }

  .main-wrap .content-part .content-wrap .titlebar .button:nth-child(3) {
    background-color: #27c93f;
  }
</style>
