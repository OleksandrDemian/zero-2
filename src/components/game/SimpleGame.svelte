<script>
	import NumbersBoard from "./NumbersBoard.svelte";
	import ActionsBoard from "./ActionsBoard.svelte";
	import GameStore, {GAME_STATE} from "../../store/runtime/gameStore";
	import Button from "../ui/Button.svelte";
	import {createEventDispatcher} from "svelte";
	import Column from "../containers/Column.svelte";
	import Separator from "../ui/Separator.svelte";
	import router from "../../store/runtime/router";

	const dispatch = createEventDispatcher();
	const onNext = () => dispatch("next");
	const onRestart = () => dispatch("restart");
	export let title;
</script>

<Column>
	<NumbersBoard title={title} />
	<ActionsBoard />
</Column>
<Separator />

{#if $GameStore.gameState === GAME_STATE.WIN}
	<Button on:click={onNext} colorScheme="green">Next level</Button>
{:else if $GameStore.gameState === GAME_STATE.LOSE}
	<Button on:click={onRestart} colorScheme="red">Try again</Button>
{:else if $GameStore.gameState !== GAME_STATE.GAME_OVER}
	<Button on:click={onRestart} colorScheme="blue">Restart</Button>
{/if}

<Separator />
<Button on:click={() => router.back()} colorScheme="red" outline>Back</Button>
