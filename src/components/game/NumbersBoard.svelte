<script>
	import Number from "./Number.svelte";
	import NumbersStore from "../../store/runtime/numbersStore";
	import Board from "../containers/Board.svelte";
	import GameStore from "../../store/runtime/gameStore";

	export let title = "--";
</script>

<Board title={title}>
	{ #each $NumbersStore as number, i }
		<Number number={number} />
	{/each}
</Board>

<style>
</style>
