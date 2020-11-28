<script>
	import NumbersBoard from "./components/game/NumbersBoard.svelte";
	import ActionsBoard from "./components/game/ActionsBoard.svelte";
	import GameStore, {GAME_STATE} from "./store/gameStore";
	import Button from "./components/Button.svelte";

	const onLoadLevel = (levelIndex) => () => GameStore.loadLevel(levelIndex);

	GameStore.loadLevel(0);
</script>

<main>
	<h1>Zero.2 - {$GameStore.title}</h1>

	{#if $GameStore.gameState === GAME_STATE.WIN}
		<h3>Well done</h3>
		<Button on:click={onLoadLevel($GameStore.levelIndex++)}>Next level</Button>
	{:else if $GameStore.gameState === GAME_STATE.LOSE}
		<h3>Maybe the next time</h3>
		<Button on:click={onLoadLevel($GameStore.levelIndex)}>Try again</Button>
	{:else}
		<Button on:click={onLoadLevel($GameStore.levelIndex)}>Restart</Button>
	{/if}

	<NumbersBoard />
	<ActionsBoard />
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
		display: flex;
		flex-direction: column;

		margin-left: auto;
		margin-right: auto;
	}

	div.levels {
		display: flex;
	}

	div.levels > button {
		margin-right: 5px;
	}

	button {
		cursor: pointer;
	}
</style>
