<script>
	import NumbersBoard from "../components/game/NumbersBoard.svelte";
	import ActionsBoard from "../components/game/ActionsBoard.svelte";
	import GameStore, {GAME_STATE} from "../store/gameStore";
	import Button from "../components/Button.svelte";

	const onLoadLevel = (levelIndex) => () => GameStore.loadLevel(levelIndex);

	GameStore.loadLevel();
</script>

<div class="level-head">
	<h2>{$GameStore.title}</h2>
    {#if $GameStore.gameState === GAME_STATE.WIN}
		<Button on:click={onLoadLevel($GameStore.levelIndex++)} colorScheme="green">Next level</Button>
    {:else if $GameStore.gameState === GAME_STATE.LOSE}
		<Button on:click={onLoadLevel($GameStore.levelIndex)} colorScheme="red">Try again</Button>
    {:else if $GameStore.gameState !== GAME_STATE.GAME_OVER}
		<Button on:click={onLoadLevel($GameStore.levelIndex)}>Restart</Button>
    {/if}
</div>

{#if $GameStore.gameState !== GAME_STATE.GAME_OVER}
	<NumbersBoard />
	<ActionsBoard />
{:else}
	<h1>Wow, wow, wow, you have finished the game!</h1>
	<h3>Enjoy random mode now (it gets much harder)</h3>
{/if}

<style>
	div.level-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
