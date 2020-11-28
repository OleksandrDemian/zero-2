<script>
	export let title = "--";
</script>

<div class="container">
	<b>{title}</b>
	<div class="board">
		<slot></slot>
	</div>
</div>

<style>
	div.container {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	div.container > b {
		/*writing-mode: vertical-rl;*/
		text-orientation: upright;
		text-align: center;
		margin: 10px 0;

		border-bottom: 1px solid var(--action-background-color);
		padding-bottom: 10px;
	}

	div.board {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		background-color: var(--board-background-color);
		padding: 15px 0;
	}
</style>
