<script>
	import Number from "./Number.svelte";
	import NumbersStore from "../../store/runtime/numbersStore";
	import Board from "../containers/Board.svelte";
</script>

<Board title="Numbers">
	{ #each $NumbersStore as number, i }
		<Number number={number} />
	{/each}
</Board>

<style>
</style>
