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

	let level = 0;
	let state = GAME_STATE.NONE;
	let startTime = Date.now();
	let deltaTime = null;
	const LEVELS = 10;

	const startLevel = () => {
		GameStore.createRandomLevel("Arcade " + (level+1), DIFFICULTIES.EASY);
		state = GAME_STATE.IN_PROGRESS;
	};

	const unsubscribe = GameStore.subscribe(value => {
		if(state === GAME_STATE.IN_PROGRESS){
			if (value.gameState === GAME_STATE.WIN) {
				level++;

				if (level < LEVELS) {
					startLevel();
				} else {
					deltaTime = Date.now() - startTime;
					state = GAME_STATE.WIN;
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

	const calculateScore = () => {
		return parseInt((1000000 / deltaTime));
	};

	startLevel();
</script>

<ViewContainer>
	{#if state === GAME_STATE.WIN}
		<Column>
			<h1 class="center on-background-text">Score: {calculateScore()}</h1>
		</Column>

		<Button colorScheme="green" on:click={() => router.back()}>Restart</Button>
		<Separator />
		<Button colorScheme="blue">Share</Button>
		<Separator />
		<Button colorScheme="red" on:click={() => router.navigate("")}>Go home</Button>
	{:else}
		<SimpleGame on:restart={onRestart} title={$GameStore.title} />
	{/if}
</ViewContainer>
