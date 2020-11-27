<script>
	import Number from "./Number.svelte";
	import NumbersStore from "../store/numbersStore";
</script>

<div class="container">
	<p><b>Numbers</b></p>
	<div class="numbers-container">
		{ #each $NumbersStore as number }
			<Number number={number} />
		{/each}
	</div>
</div>

<style>
	h3 {
		color: #202124;
	}

	div.container {
		width: 100%;
	}

	div.numbers-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
