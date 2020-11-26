<script>
	import ActionsStore from "../store/actionsStore";

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

		width: 100px;
		height: 75px;

		box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
		border-radius: var(--border-radius);

		cursor: pointer;

		transition: all var(--animation-speed) ease-in-out;
		margin: 5px;
	}

	div.container.used {
		background-color: #202124;
		color: white;
	}

	span.value {
		font-weight: bold;
		font-size: 25px;
	}
</style>
