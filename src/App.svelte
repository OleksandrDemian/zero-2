<script>
	import NumbersBoard from "./components/game/NumbersBoard.svelte";
	import ActionsBoard from "./components/game/ActionsBoard.svelte";
	import GameStore, {GAME_STATE} from "./store/gameStore";
	import Button from "./components/Button.svelte";

	const onLoadLevel = (levelIndex) => () => GameStore.loadLevel(levelIndex);

	GameStore.loadLevel(1);
</script>

<main>
	<h1>Zero.2</h1>
	<div class="level-head">
		<h2>{$GameStore.title}</h2>
		{#if $GameStore.gameState === GAME_STATE.WIN}
			<Button on:click={onLoadLevel($GameStore.levelIndex++)} colorScheme="green">Next level</Button>
		{:else if $GameStore.gameState === GAME_STATE.LOSE}
			<Button on:click={onLoadLevel($GameStore.levelIndex)} colorScheme="red">Try again</Button>
		{:else}
			<Button on:click={onLoadLevel($GameStore.levelIndex)}>Restart</Button>
		{/if}
	</div>

	<NumbersBoard />
	<ActionsBoard />
</main>

<style>
	div.level-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

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
