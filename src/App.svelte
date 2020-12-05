<script>
	import router from "./store/runtime/router";
	import SnackBar from "./components/snackBar/SnackBar.svelte";
	import Router from "./components/Router.svelte";
	import Header from "./components/Header.svelte";

	import Home from "./views/Home.svelte";
	import Campaign from "./views/Campaign.svelte";
	import TimeAttack from "./views/TimeAttack.svelte";
	import Random from "./views/Random.svelte";
	import HowToPlay from "./views/HowToPlay.svelte";
	import TimeThroneIntro from "./views/TimeThroneIntro.svelte";
	import Game from "./views/Game.svelte";

	router.addRoute("", Home);
	router.addRoute("random", Random);
	router.addRoute("campaign", Campaign);
	router.addRoute("level", Game);
	router.addRoute("time-intro", TimeThroneIntro);
	router.addRoute("time-game", TimeAttack);
	router.addRoute("how-it-works", HowToPlay);
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
	}

	@media screen and (max-width: 500px) {
		main {
			padding: 45px;
			min-height: 100vh;
		}
	}
</style>
