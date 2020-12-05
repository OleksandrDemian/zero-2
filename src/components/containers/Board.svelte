<script>
	export let title = "--";
</script>

<div class="container">
	<h3 class="center">{title}</h3>
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
