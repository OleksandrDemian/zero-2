<script>
	export let title = "--";
</script>

<div class="container">
	<h3><b>{title}</b></h3>
	<div class="board">
		<slot></slot>
	</div>
</div>

<style>
	div.container {
		width: 100%;
	}

	div.board {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;

		background-color: var(--board-background-color);
		padding: 15px 0;
	}
</style>
