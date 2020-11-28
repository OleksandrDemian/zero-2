<script>
	import ActionsStore from "../../store/actionsStore";

	export let action;

	const onClick = () => {
		ActionsStore.useAction(action);
	};
</script>

<div class="container" class:used={action.used} on:click={onClick}>
	<span class="value">{action.label}</span>
</div>

<style>
	div.container {
		display: flex;
		justify-content: center;
		align-items: center;

		min-width: var(--board-item-size);
		height: var(--board-item-size);

		border-radius: var(--border-radius);

		cursor: pointer;

		transition: all var(--animation-speed) ease-in-out;
		margin: 5px;
		background-color: var(--board-item-background-color);
	}

	div.container.used {
		opacity: 0.3;
	}

	span.value {
		font-weight: bold;
		font-size: 25px;
		color: var(--board-item-text-color);
	}
</style>
