<script>
	import SimpleGame from "../components/game/SimpleGame.svelte";
	import GameStore from "../store/runtime/gameStore";
	import PersistentStore, {REACHED_LEVEL} from "../store/persistant/persistentStore";
	import ViewContainer from "../components/containers/ViewContainer.svelte";

	export let index;

	const start = () => {
		GameStore.loadLevel(index);
	};

	const onNext = () => {
		index++;

		if (index > PersistentStore.get(REACHED_LEVEL)) {
			PersistentStore.set(REACHED_LEVEL, index);
			PersistentStore.save();
		}

		start();
	};

	const onRestart = () => {
		GameStore.restoreLevel();
	};

	start();
</script>

<ViewContainer>
	<SimpleGame on:next={onNext} on:restart={onRestart} title={$GameStore.title} />
</ViewContainer>
