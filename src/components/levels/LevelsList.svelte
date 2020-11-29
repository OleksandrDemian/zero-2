<script>
	import LEVELS from "../../data/levels";
	import LevelItem from "./LevelItem.svelte";
	import PersistentStore, {REACHED_LEVEL} from "../../store/persistant/persistentStore";
	import {createEventDispatcher} from "svelte";

	const dispatch = createEventDispatcher();

	const reachedLevel = PersistentStore.get(REACHED_LEVEL);

	const triggerLevel = (level) => {
		return () => reachedLevel >= level && dispatch("click", level);
	};
</script>

<div class="container">
	<h3>Select level</h3>

	{ #each LEVELS as level, i }
		<LevelItem on:click={triggerLevel(i)} level={level} done={reachedLevel > i} active={reachedLevel === i} />
	{/each}
</div>

<style>
	div.container {
		width: 100%;
	}
</style>
