<script>
	import GameStore from "../store/runtime/gameStore";
	import SimpleGame from "../components/game/SimpleGame.svelte";
	import DIFFICULTIES from "../data/difficultySettings";
	import Button from "../components/ui/Button.svelte";
	import Separator from "../components/ui/Separator.svelte";

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
	<SimpleGame on:level={onLevel} />
{/if}
