<script>
	import GameStore, {GAME_STATE} from "../../store/runtime/gameStore";
	import Button from "../ui/Button.svelte";
	import {onDestroy} from "svelte";
	import DIFFICULTIES from "../../data/difficultySettings";
	import ProgressBar from "./ProgressBar.svelte";
	import Separator from "../ui/Separator.svelte";
	import router from "../../store/runtime/router";
	import SimpleGame from "./SimpleGame.svelte";
	import Column from "../containers/Column.svelte";

	const STATE = {
		NONE: -1,
		IN_PROGRESS: 0,
		STAGE_CLEAR: 1,
		ATTACK_COMPLETE: 2,
		TIME_OUT: 3
	};

	const TIME_LIMIT = 15;

	const STAGES = [
		{
			difficulty: DIFFICULTIES.TUTORIAL,
			name: "Cave",
			levels: 4,
			bonus: 4,
			messages: {
				success: "Good",
				fail: "No comments"
			}
		},
		{
			difficulty: DIFFICULTIES.EASY,
			name: "Void",
			levels: 4,
			bonus: 5,
			messages: {
				success: "Now we start talking",
				fail: "Maybe a bit of exercise?"
			}
		},
		{
			difficulty: DIFFICULTIES.MEDIUM,
			name: "Platform",
			levels: 6,
			bonus: 6,
			messages: {
				success: "Bravo, you got some skills",
				fail: "Close enough"
			}
		},
		{
			difficulty: DIFFICULTIES.HARD,
			name: "Hall",
			levels: 2,
			bonus: 1,
			messages: {
				success: "We got champion here!",
				fail: "Well, at least you beat medium difficulty"
			}
		},
	];

	let state = STATE.NONE;

	let level = 0;
	let stage = -1;

	let seconds = TIME_LIMIT;
	let intervalId = null;

	const unsubscribe = GameStore.subscribe(value => {
		if(state === STATE.IN_PROGRESS){
			if (value.gameState === GAME_STATE.WIN) {
				if (level < STAGES[stage].levels) {
					nextLevel();
				} else {
					stageClear();
				}
			} else if (value.gameState === GAME_STATE.LOSE) {
				GameStore.restoreLevel();
			}
		}
	});

	const nextLevel = () => {
		const stageSetting = STAGES[stage];

		level++;
		seconds += 2;

		GameStore.createRandomLevel(stageSetting.name + " " + level, stageSetting.difficulty);

		stop();
		intervalId = setInterval(() => {
			seconds--;

			if (seconds < 0) {
				seconds = 0;
				gameOver();
			}
		}, 1000);
	};

	const nextStage = () => {
		//this is called also at the beginning. Do not add bonus
		// if(stage > -1){
		// 	seconds += STAGES[stage].bonus;
		// }

		stage ++;
		state = STATE.IN_PROGRESS;

		level = 0;
		nextLevel();
	};

	const stageClear = () => {
		stop();

		if(stage >= STAGES.length){
			state = STATE.ATTACK_COMPLETE;
		} else {
			state = STATE.STAGE_CLEAR;
			level = 0;
		}
	};

	const stop = () => {
		clearInterval(intervalId);
	};

	const gameOver = () => {
		stop();
		state = STATE.TIME_OUT;
	};

	onDestroy(() => {
		stop();
		unsubscribe();
	});

	const onRestart = () => {
		GameStore.restoreLevel();
	};

	nextStage();
</script>

<!--<h3 class="center on-background-text" class:red={seconds < 5} class:green={seconds > 10}>Time: {seconds}s</h3>-->

{#if state === STATE.ATTACK_COMPLETE}
	<!--VICTORY-->

	<h1 class="center green on-background-text">Congrats</h1>
	<h3 class="center on-background-text">You can be proud of yourself</h3>
	<Button colorScheme="orange" size="medium" on:click={() => router.navigate("")}>Go home</Button>
{:else if state === STATE.IN_PROGRESS}
	<!--IN PROGRESS-->

	<SimpleGame on:restart={onRestart} title={`Time: ${seconds}s`} />
{:else if state === STATE.STAGE_CLEAR}
	<!--STAGE CLEAR-->

	<h1 class="center green on-background-text">Stage clear</h1>

	<Column>
		<h3 class="center">{STAGES[stage].messages.success}</h3>
		<Separator />
		<ProgressBar fill={stage+1} max={STAGES.length} />
		<Separator />
	</Column>

	<Button on:click={nextStage} size="medium" colorScheme="green">Next stage</Button>
{:else if state === STATE.TIME_OUT}
	<!--TIME OUT-->

	<h1 class="center red on-background-text">Game over</h1>

	<Column>
		<h3 class="center">{STAGES[stage].messages.fail}</h3>
		<Separator />
		<ProgressBar fill={stage} max={STAGES.length} />
		<Separator />
	</Column>

	<Button colorScheme="orange" size="medium" on:click={() => router.navigate("time-intro")}>Retry</Button>
	<Separator />
	<Button colorScheme="red" size="medium" on:click={() => router.navigate("")}>Go home</Button>
{/if}

<style>
	.red {
		color: var(--red);
	}

	.green {
		color: var(--green);
	}
</style>
