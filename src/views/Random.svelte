<script>
	import GameStore from "../store/runtime/gameStore";
	import Game from "../components/game/Game.svelte";

	const onLevel = ({ detail }) => {
		GameStore.createRandomLevel(detail);
	};

	GameStore.createRandomLevel(1);
</script>

<Game on:level={onLevel} />
