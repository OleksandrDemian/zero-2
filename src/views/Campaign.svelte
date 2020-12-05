<script>
	import GameStore, {GAME_STATE} from "../store/runtime/gameStore";
	import LevelsList from "../components/levels/LevelsList.svelte";
	import SimpleGame from "../components/game/SimpleGame.svelte";
	import router from "../store/runtime/router";

	const onLevel = ({ detail }) => {
		router.navigate("level", {
			index: detail
		});
	};

	GameStore.setState(GAME_STATE.NONE);
	GameStore.resetLevelIndex();
</script>

{#if $GameStore.gameState === GAME_STATE.GAME_OVER}
	<h1>Wow, wow, wow, you have finished the game!</h1>
	<h3>Enjoy time throne or random mode (it gets much harder)</h3>
{:else}
	<LevelsList on:click={onLevel} />
{/if}
