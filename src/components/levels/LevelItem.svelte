<script>
	import Button from "../Button.svelte";
	export let level;
	export let done = false;
	export let active = false;

	const getScheme = () => {
		if(active){
			return "green";
		} else if(done){
			return "default";
		} else {
			return "red";
		}
	}
</script>

<div class="container">
	<Button colorScheme={getScheme()} on:click>{level.name}</Button>
</div>

<style>
	div.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: 10px;
	}
</style>
