<script>
	import LEVELS from "../../data/levels";
	import LevelItem from "./LevelItem.svelte";
	import PersistentStore, {REACHED_LEVEL} from "../../store/persistant/persistentStore";
	import {createEventDispatcher} from "svelte";
	import {groupLevels} from "../../utils/levelsGrouper";
	import ProgressBar from "../ProgressBar.svelte";
	import SnackBarStore from "../../store/runtime/snackBarStore";

	const dispatch = createEventDispatcher();

	const reachedLevel = PersistentStore.get(REACHED_LEVEL);

	const triggerLevel = (level) => {
		return () => {
			if(reachedLevel >= level) {
				dispatch("click", level);
			} else {
				SnackBarStore.showSnack({
					title: "Level blocked"
				});
			}
		}
	};

	const GROUPS = ["tutorial", "easy", "medium", "hard"];
	const levels = groupLevels(LEVELS);

</script>

<div class="container">
	{ #each GROUPS as group }
		<h3 class="on-background-text">{levels[group].title}</h3>
		<div class="levels">
			{ #each levels[group].levels as level, i }
				<LevelItem on:click={triggerLevel(level.index)} level={level} done={reachedLevel > level.index} active={reachedLevel === level.index} />
			{/each}
		</div>
	{/each}

</div>

<style>
	div.container {
		width: 100%;
	}

	div.levels {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 10px;
	}

	@media screen and (max-width: 500px) {
		div.levels {
			grid-template-columns: 1fr;
		}
	}
</style>
