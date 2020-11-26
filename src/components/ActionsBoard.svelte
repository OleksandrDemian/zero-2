<script>
	import Action from "./Action.svelte";
	import ActionsStore from "../store/actionsStore";
</script>

<div class="container">
	<h3>Actions</h3>
	<div class="actions-container">
        { #each $ActionsStore as action }
			<Action action={action} />
        {/each}
	</div>
</div>

<style>
	h3 {
		color: #202124;
	}

	div.container {
		width: 100%;
	}

	div.actions-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
