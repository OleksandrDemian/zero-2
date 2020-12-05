<script>
	import SimpleGame from "../components/game/SimpleGame.svelte";
	import GameStore from "../store/runtime/gameStore";

	export let index;

	const start = () => {
		GameStore.loadLevel(index);
	};

	const onLevel = ({ detail }) => {
		index = detail;
		start();
	};

	start();
</script>

<SimpleGame on:level={onLevel} />
