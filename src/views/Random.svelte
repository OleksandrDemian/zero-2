<script>
	import GameStore from "../store/runtime/gameStore";
	import SimpleGame from "../components/game/SimpleGame.svelte";
	import ViewContainer from "../components/containers/ViewContainer.svelte";

	export let difficulty = null;
	let index = 0;

	const onNext = () => {
		index++;
		GameStore.createRandomLevel(`${difficulty.name} [${index}]`, difficulty);
	};

	const onRestart = () => {
		GameStore.restoreLevel();
	};

	onNext();
</script>

<ViewContainer>
	<SimpleGame on:next={onNext} on:restart={onRestart} />
</ViewContainer>
