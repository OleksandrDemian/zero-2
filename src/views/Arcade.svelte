<script>
	import ViewContainer from "../components/containers/ViewContainer.svelte";
	import SimpleGame from "../components/game/SimpleGame.svelte";
	import GameStore, {GAME_STATE} from "../store/runtime/gameStore";
	import {onDestroy} from "svelte";
	import DIFFICULTIES from "../data/difficultySettings";
	import Column from "../components/containers/Column.svelte";
	import Separator from "../components/ui/Separator.svelte";
	import Button from "../components/ui/Button.svelte";
	import router from "../store/runtime/router";
	import PersistentStore, {BEST_ARCADE_SCORE} from "../store/persistant/persistentStore";

	let level = 0;
	let state = GAME_STATE.NONE;
	let score = 0;

	let startTime = null;

	const LEVELS = 15;
	const LEVEL_DONE_POINTS = 20;

	const startLevel = () => {
		GameStore.createRandomLevel("Arcade " + (level+1), level < 10 ? DIFFICULTIES.EASY : DIFFICULTIES.MEDIUM);
		state = GAME_STATE.IN_PROGRESS;
		startTime = Date.now();
	};

	const unsubscribe = GameStore.subscribe(value => {
		if(state === GAME_STATE.IN_PROGRESS){
			if (value.gameState === GAME_STATE.WIN) {
				level++;

				if (level < LEVELS) {
					const deltaTime = Date.now() - startTime;
					score += LEVEL_DONE_POINTS;
					score += 10000 - deltaTime;
					startLevel();
				} else {
					state = GAME_STATE.WIN;

					const currentBest = PersistentStore.get(BEST_ARCADE_SCORE);
					if(score > currentBest){
						PersistentStore.set(BEST_ARCADE_SCORE, score);
						PersistentStore.save();
					}
				}
			} else if (value.gameState === GAME_STATE.LOSE) {
				GameStore.restoreLevel();
			}
		}
	});

	onDestroy(() => unsubscribe());

	const onRestart = () => {
		GameStore.restoreLevel();
	};

	startLevel();
</script>

<ViewContainer>
	{#if state === GAME_STATE.WIN}
		<!--WIN-->
		<Column>
			<h1 class="center on-background-text">Score: {score}</h1>
		</Column>

		<Button colorScheme="green" on:click={() => router.back()}>Restart</Button>
		<Separator />
<!--		<Button colorScheme="blue">Share</Button>-->
<!--		<Separator />-->
		<Button colorScheme="red" on:click={() => router.navigate("")}>Go home</Button>
	{:else if state === GAME_STATE.IN_PROGRESS}
		<!--IN_PROGRESS-->
		<SimpleGame on:restart={onRestart} title={$GameStore.title + "(" + score + ")"} />
	{/if}
</ViewContainer>
