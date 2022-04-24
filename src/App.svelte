<script>
  import Navigation from './Navigation.svelte';
  import Footer from './Footer.svelte';

  let todos = [
    'Todo',
    'Todo',
    'Todo',
  ];

  const addTodo = () => {
    todos = [...todos, 'Todo'];
  }
</script>

<main>
    <Navigation/>
    <h1>My To-Do App</h1>
    <p>{todos}</p>
    <button on:click={addTodo}>Add Todo</button>
    <Footer/>
</main>

<style>

</style>
