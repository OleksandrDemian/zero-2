<script>
	import router from "./store/runtime/router";
	import SnackBar from "./components/snackBar/SnackBar.svelte";
	import Router from "./components/misc/Router.svelte";
	import Header from "./components/misc/Header.svelte";

	import Home from "./views/Home.svelte";
	import Campaign from "./views/Campaign.svelte";
	import TimeAttack from "./views/TimeAttack.svelte";
	import Random from "./views/Random.svelte";
	import HowToPlay from "./views/HowToPlay.svelte";
	import TimeAttackIntro from "./views/TimeAttackIntro.svelte";
	import Game from "./views/Game.svelte";
	import RandomLevelChooser from "./views/RandomLevelChooser.svelte";
	import Play from "./views/Play.svelte";
	import Objectives from "./views/Objectives.svelte";

	router.addRoute("", Home);
	router.addRoute("play", Play, {showBack: true});
	router.addRoute("random-level-chooser", RandomLevelChooser, {showBack: true});
	router.addRoute("random", Random, {showBack: true});
	router.addRoute("campaign", Campaign, {showBack: true});
	router.addRoute("level", Game, {showBack: true});
	router.addRoute("time-intro", TimeAttackIntro, {showBack: true});
	router.addRoute("time-game", TimeAttack, {showBack: true});
	router.addRoute("how-it-works", HowToPlay, {showBack: true});
	router.addRoute("objectives", Objectives, {showBack: true});
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
		max-height: 100vh;
		min-height: 100vh;
	}

	@media screen and (max-width: 500px) {
		main {
			padding: 45px;
		}
	}
</style>
