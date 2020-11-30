<script>
	import GameStore from "../store/runtime/gameStore";
	import Game from "../components/game/Game.svelte";
	import DIFFICULTIES from "../data/difficultySettings";
	import Button from "../components/Button.svelte";
	import Separator from "../components/Separator.svelte";

	let difficulty = null;

	const onLevel = ({detail}) => {
		GameStore.createRandomLevel(detail, difficulty);
	};

	const initDifficultyListener = (diff) => {
		return () => {
			difficulty = diff;
			if (difficulty != null) {
				onLevel({detail: 1});
			}
		};
	};

	GameStore.resetLevelIndex();
</script>

{#if difficulty === null}
	<h3>Select difficulty:</h3>
	<Button on:click={initDifficultyListener(DIFFICULTIES.EASY)} colorScheme="green" size="medium">Easy</Button>
	<Separator />
	<Button on:click={initDifficultyListener(DIFFICULTIES.MEDIUM)} colorScheme="orange" size="medium">Medium</Button>
	<Separator />
	<Button on:click={initDifficultyListener(DIFFICULTIES.HARD)} colorScheme="red" size="medium">Hard</Button>
{:else}
	<Game on:level={onLevel} />
{/if}
