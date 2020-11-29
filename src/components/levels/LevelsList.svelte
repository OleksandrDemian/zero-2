<script>
	import LEVELS from "../../data/levels";
	import LevelItem from "./LevelItem.svelte";
	import PersistentStore, {REACHED_LEVEL} from "../../store/persistant/persistentStore";
	import {createEventDispatcher} from "svelte";
	import {groupLevels} from "../../utils/levelsGrouper";

	const dispatch = createEventDispatcher();

	const reachedLevel = PersistentStore.get(REACHED_LEVEL);

	const triggerLevel = (level) => {
		return () => reachedLevel >= level && dispatch("click", level);
	};

	const GROUPS = ["tutorial", "easy", "medium", "hard"];
	const levels = groupLevels(LEVELS);

</script>

<div class="container">
	<h3>Select level</h3>

	{ #each GROUPS as group }
		<h4>{levels[group].title}</h4>
		{ #each levels[group].levels as level, i }
			<LevelItem on:click={triggerLevel(level.index)} level={level} done={reachedLevel > level.index} active={reachedLevel === level.index} />
		{/each}
	{/each}

</div>

<style>
	div.container {
		width: 100%;
	}
</style>
