<script>
	import ActionsStore from "../../store/runtime/actionsStore";

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

		/*transition: all var(--animation-speed) ease-in-out;*/
		margin: 5px;
		padding: 0 5px;
		background-color: var(--action-background-color);
	}

	/*div.container:not(.used):hover {*/
	/*	transform: translateY(-3px);*/
	/*	box-shadow: 0 3px 0 0 rgba(28, 24, 0, .1);*/
	/*}*/

	div.container.used {
		opacity: 0.3;
	}

	span.value {
		font-weight: bold;
		font-size: var(--board-item-font-size);
		color: var(--action-text-color);
	}
</style>
