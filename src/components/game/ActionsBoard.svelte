<script>
	import Action from "./Action.svelte";
	import ActionsStore from "../../store/actionsStore";
	import Board from "../containers/Board.svelte";
</script>

<Board title="Actions">
	{ #each $ActionsStore as action }
		<Action action={action} />
	{/each}
</Board>

<style>
</style>
