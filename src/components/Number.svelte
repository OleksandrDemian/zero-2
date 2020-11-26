<script>
	import NumbersStore from "../store/numbersStore";

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

		width: 100px;
		height: 75px;

		box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
		border-radius: var(--border-radius);

		cursor: pointer;

		transition: all var(--animation-speed) ease-in-out;
		margin: 5px;

		border: 2px solid transparent;
	}

	div.container.active {
		border: 2px solid coral;
		box-shadow: 0 4px 6px 0 rgba(32, 33, 36, .28);
		transform: translateY(-3px);
	}

	span.value {
		font-weight: bold;
		font-size: 25px;
	}
</style>
