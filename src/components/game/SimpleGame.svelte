<script>
	import NumbersBoard from "./NumbersBoard.svelte";
	import ActionsBoard from "./ActionsBoard.svelte";
	import GameStore, {GAME_STATE} from "../../store/runtime/gameStore";
	import Button from "../ui/Button.svelte";
	import {createEventDispatcher} from "svelte";
	import Column from "../containers/Column.svelte";
	import Separator from "../ui/Separator.svelte";

	const dispatch = createEventDispatcher();
	const onNext = () => dispatch("next");
	const onRestart = () => dispatch("restart");
</script>

<Column>
	<NumbersBoard title={$GameStore.title} />
	<ActionsBoard />
</Column>
<Separator />

{#if $GameStore.gameState === GAME_STATE.WIN}
	<Button on:click={onNext} colorScheme="green" bold>Next level</Button>
{:else if $GameStore.gameState === GAME_STATE.LOSE}
	<Button on:click={onRestart} colorScheme="red" bold>Try again</Button>
{:else if $GameStore.gameState !== GAME_STATE.GAME_OVER}
	<Button on:click={onRestart} colorScheme="blue" bold>Restart</Button>
{/if}
