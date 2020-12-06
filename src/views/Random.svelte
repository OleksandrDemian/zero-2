<script>
	import GameStore from "../store/runtime/gameStore";
	import SimpleGame from "../components/game/SimpleGame.svelte";

	export let difficulty = null;

	const onLevel = ({detail}) => {
		GameStore.createRandomLevel(detail, difficulty);
	};

	GameStore.resetLevelIndex();
	onLevel({detail: 1});
</script>

<SimpleGame on:level={onLevel} />
