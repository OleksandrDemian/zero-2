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
	import ArcadeIntro from "./views/ArcadeIntro.svelte";
	import Arcade from "./views/Arcade.svelte";

	router.addRoute("", Home);
	router.addRoute("play", Play);
	router.addRoute("random-level-chooser", RandomLevelChooser, { header: "Random" });
	router.addRoute("random", Random);
	router.addRoute("campaign", Campaign, { header: "Campaign" });
	router.addRoute("level", Game);
	router.addRoute("time-intro", TimeAttackIntro, { header: "Time attack" });
	router.addRoute("time-game", TimeAttack);
	router.addRoute("how-it-works", HowToPlay, { header: "How to play" });
	router.addRoute("objectives", Objectives, { header: "Objectives" });
	router.addRoute("arcade-intro", ArcadeIntro, { header: "Arcade" });
	router.addRoute("arcade", Arcade);
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
