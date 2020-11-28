<script>
	import NumbersStore from "../../store/numbersStore";

	export let number;

	const onClick = () => {
		NumbersStore.triggerSelection(number);
	};
</script>

<div class="container" class:active={number.selected} on:click={onClick}>
	<span class="value">{number.value}</span>
</div>

<style>
	div.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: var(--board-item-size);
		height: var(--board-item-size);

		border-radius: var(--border-radius);

		cursor: pointer;

		transition: all var(--animation-speed) ease-in-out;
		margin: 5px;

		border: 2px solid var(--board-item-background-color);
		background-color: transparent;
		color: var(--board-item-background-color);
	}

	div.container.active {
		transform: translateY(-5px);
		box-shadow: 0 5px 0 0 rgba(28, 24, 0, 0.2);
		background-color: var(--board-item-background-color);
		border: 2px solid transparent;
		color: var(--board-item-text-color);
	}

	span.value {
		font-weight: bold;
		font-size: 25px;
	}
</style>
