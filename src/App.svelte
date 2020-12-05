<script>
	import Home from "./views/Home.svelte";
	import Campaign from "./views/Campaign.svelte";
	import TimeAttack from "./views/TimeAttack.svelte";
	import router from "./store/runtime/router";
	import SnackBar from "./components/snackBar/SnackBar.svelte";
	import Router from "./components/Router.svelte";
	import Random from "./views/Random.svelte";
	import HowToPlay from "./views/HowToPlay.svelte";
	import Header from "./components/Header.svelte";

	router.addRoute("", Home);
	router.addRoute("random", Random);
	router.addRoute("campaign", Campaign);
	router.addRoute("time", TimeAttack);
	router.addRoute("how-it-works", HowToPlay);
</script>

<SnackBar />

<main>
	<Header />
	<Router />
</main>

<style>
	@media screen and (max-width: 768px) {
		main {
			padding: 45px;
		}
	}

	main {
		width: 100%;
		max-width: 500px;
		min-height: 100vh;
		display: flex;
		flex-direction: column;

		margin-left: auto;
		margin-right: auto;
	}
</style>
