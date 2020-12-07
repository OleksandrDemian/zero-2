<script>
	import NumbersBoard from "./NumbersBoard.svelte";
	import ActionsBoard from "./ActionsBoard.svelte";
	import GameStore, {GAME_STATE} from "../../store/runtime/gameStore";
	import Button from "../ui/Button.svelte";
	import {createEventDispatcher} from "svelte";
	import Column from "../containers/Column.svelte";
	import Separator from "../ui/Separator.svelte";

	const dispatch = createEventDispatcher();
	const onLoadLevel = (levelIndex) => () => dispatch("level", levelIndex);
</script>

<Column>
	<NumbersBoard title={"Stage " + $GameStore.title} />
	<ActionsBoard />
</Column>
<Separator />

{#if $GameStore.gameState === GAME_STATE.WIN}
	<Button on:click={onLoadLevel($GameStore.levelIndex++)} colorScheme="green" bold>Next level</Button>
{:else if $GameStore.gameState === GAME_STATE.LOSE}
	<Button on:click={onLoadLevel($GameStore.levelIndex)} colorScheme="red" bold>Try again</Button>
{:else if $GameStore.gameState !== GAME_STATE.GAME_OVER}
	<Button on:click={onLoadLevel($GameStore.levelIndex)} colorScheme="blue" bold>Restart</Button>
{/if}
