<script>
	import GameStore, {GAME_STATE} from "../store/runtime/gameStore";
	import LevelsList from "../components/levels/LevelsList.svelte";
	import SimpleGame from "../components/game/SimpleGame.svelte";

	const onLevel = ({ detail }) => {
		GameStore.loadLevel(detail)
	};

	GameStore.setState(GAME_STATE.NONE);
	GameStore.resetLevelIndex();
</script>

{#if $GameStore.gameState === GAME_STATE.NONE}
	<LevelsList on:click={onLevel} />
{:else if $GameStore.gameState === GAME_STATE.GAME_OVER}
	<h1>Wow, wow, wow, you have finished the game!</h1>
	<h3>Enjoy random mode now (it gets much harder)</h3>
{:else}
	<SimpleGame on:level={onLevel} />
{/if}
