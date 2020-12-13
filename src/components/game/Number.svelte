<script>
	import NumbersStore from "../../store/runtime/numbersStore";

	export let number;

	const onClick = () => {
		NumbersStore.triggerSelection(number);
	};
</script>

<div class="number-container" class:positive={number.value > 0} class:negative={number.value < 0} class:zero={number.value === 0} class:active={number.selected} on:click={onClick}>
	<span class="value">{number.value}</span>
</div>

<style>
	div.number-container {
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

		background-color: var(--number-background-color);
		color: var(--number-text-color);
	}

	/*div.number-container:hover {*/
	/*	transform: translateY(-3px);*/
	/*	box-shadow: 0 3px 0 0 rgba(28, 24, 0, .1);*/
	/*}*/

	div.number-container.active {
		transform: translateY(-8px);
		box-shadow: 0 8px 0 0 rgba(28, 24, 0, .1);
	}

	div.number-container.positive {
		background-color: var(--orange);
	}

	div.number-container.zero {
		background-color: var(--green);
	}

	div.number-container.negative {
		background-color: var(--red);
	}

	span.value {
		font-weight: bold;
		font-size: var(--board-item-font-size);
	}
</style>
