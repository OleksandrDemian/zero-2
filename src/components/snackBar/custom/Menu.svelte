<script>
	import Button from "../../ui/Button.svelte";
	import GameStore from "../../../store/runtime/gameStore";

	const onHome = () => GameStore.setMode(null);
</script>

<div class="button-container">
	<Button colorScheme="yellow" size="medium" on:click={onHome}>Home</Button>
</div>

<style>
	div.button-container {
		margin: 50px 0;
		display: grid;
		grid-gap: 10px;
		grid-template-columns: 1fr;
	}
</style>
