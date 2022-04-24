<script>
  import Navigation from './Navigation.svelte';
  import Footer from './Footer.svelte';

  let newTodo = '';
  let todos = [];

  const addTodo = () => {
    todos = [...todos, newTodo];
    newTodo = '';
  }

  const handleTodoChange = e => {
    newTodo = e.target.value;
  }
</script>

<main>
    <Navigation/>
    <h1>My To-Do App</h1>
    <p>{todos}</p>
    <input on:change={e => handleTodoChange(e)} value={newTodo} type="text">
    <button on:click={() => addTodo()}>Add Todo</button>
    <Footer/>
</main>

<style>

</style>
