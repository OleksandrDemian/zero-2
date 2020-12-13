<script>
	export let level;
	export let done = false;
	export let active = false;

	const getScheme = () => {
		if(active){
			return "orange";
		} else if(done){
			return "green";
		} else {
			return "red";
		}
	}
</script>

<div class="container" on:click scheme={getScheme()}>
	<span class="name">{level.name}</span>
</div>

<style>
	div.container {
		min-width: var(--board-item-size);
		padding: 5px 15px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 10px;

		border-radius: var(--border-radius);
		cursor: pointer;
	}

	div.container[scheme="green"] {
		background-color: var(--green);
	}

	div.container[scheme="orange"] {
		background-color: var(--blue);
	}

	div.container[scheme="red"] {
		background-color: var(--red);
	}

	span.name {
		color: var(--number-text-color);
		font-size: var(--small-font-size);
		text-align: center;
	}
</style>
