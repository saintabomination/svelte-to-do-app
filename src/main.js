import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		text: 'Initial Commit',
	}
});

export default app;
