<script>
	import NumbersBoard from "../components/game/NumbersBoard.svelte";
	import ActionsBoard from "../components/game/ActionsBoard.svelte";
	import GameStore, {GAME_STATE} from "../store/gameStore";
	import Button from "../components/Button.svelte";

	const onLoadLevel = (levelIndex) => () => GameStore.createRandomLevel(levelIndex);

	GameStore.createRandomLevel(1);
</script>

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

<style>
	div.level-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
