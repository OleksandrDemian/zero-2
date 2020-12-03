<script>
	import NumbersBoard from "./NumbersBoard.svelte";
	import ActionsBoard from "./ActionsBoard.svelte";
	import GameStore, {GAME_STATE} from "../../store/runtime/gameStore";
	import Button from "../ui/Button.svelte";
	import {createEventDispatcher} from "svelte";

	const dispatch = createEventDispatcher();
	const onLoadLevel = (levelIndex) => () => dispatch("level", levelIndex);
</script>

<div class="level-head">
	<h3>Level {$GameStore.title}</h3>
    {#if $GameStore.gameState === GAME_STATE.WIN}
		<Button on:click={onLoadLevel($GameStore.levelIndex++)} colorScheme="green">Next level</Button>
    {:else if $GameStore.gameState === GAME_STATE.LOSE}
		<Button on:click={onLoadLevel($GameStore.levelIndex)} colorScheme="red">Try again</Button>
    {:else if $GameStore.gameState !== GAME_STATE.GAME_OVER}
		<Button on:click={onLoadLevel($GameStore.levelIndex)} colorScheme="blue">Restart</Button>
    {/if}
</div>

{#if $GameStore.gameState !== GAME_STATE.GAME_OVER}
	<NumbersBoard />
	<ActionsBoard />
{/if}

<style>
	div.level-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
