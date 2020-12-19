<script>
	import SnackBar from "./components/snackBar/SnackBar.svelte";
	import Router from "./components/misc/Router.svelte";
	import Header from "./components/misc/Header.svelte";
</script>

<SnackBar />

<main>
	<Header />
	<Router />
</main>

<style>
	main {
		width: 100%;
		max-width: 500px;
		padding: 45px 0;
		display: flex;
		flex-direction: column;

		margin-left: auto;
		margin-right: auto;
		min-height: 100vh;
	}

	@media screen and (max-width: 500px) {
		main {
			padding: 45px;
		}
	}
</style>
