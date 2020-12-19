<script>
	import GameStore, {GAME_STATE} from "../../store/runtime/gameStore";
	import Button from "../ui/Button.svelte";
	import {onDestroy} from "svelte";
	import ProgressBar from "./ProgressBar.svelte";
	import Separator from "../ui/Separator.svelte";
	import router from "../../store/runtime/router";
	import SimpleGame from "./SimpleGame.svelte";
	import Column from "../containers/Column.svelte";
	import {getStage, getRandomFailMessage, START_TIME_LIMIT} from "../../game/timeAttackController";
	import {MAX_LEVELS} from "../../game/timeAttackController";

	let state = GAME_STATE.NONE;

	let level = 0;

	let seconds = START_TIME_LIMIT;
	let intervalId = null;

	const unsubscribe = GameStore.subscribe(value => {
		if(state === GAME_STATE.IN_PROGRESS){
			if (value.gameState === GAME_STATE.WIN) {
				level ++;
				startLevel();
			} else if (value.gameState === GAME_STATE.LOSE) {
				GameStore.restoreLevel();
			}
		}
	});

	const startGame = () => {
		state = GAME_STATE.IN_PROGRESS;
		intervalId = setInterval(() => {
			seconds--;

			if (seconds < 0) {
				seconds = 0;
				gameOver();
			}
		}, 1000);

		startLevel();
	};

	const startLevel = () => {
		const stageSetting = getStage(level);

		if(level > 0) {
			seconds += stageSetting.timeBonus;
		}

		GameStore.createRandomLevel(stageSetting.name + " " + level, stageSetting.difficulty);
	};

	const stop = () => {
		clearInterval(intervalId);
	};

	const gameOver = () => {
		stop();
		state = GAME_STATE.LOSE;
	};

	onDestroy(() => {
		stop();
		unsubscribe();
	});

	const onRestart = () => {
		GameStore.restoreLevel();
	};

	startGame();
</script>

<!--<h3 class="center on-background-text" class:red={seconds < 5} class:green={seconds > 10}>Time: {seconds}s</h3>-->

{#if state === GAME_STATE.WIN}
	<!--VICTORY-->

	<h1 class="center green on-background-text">Congrats</h1>
	<h3 class="center on-background-text">You can be proud of yourself</h3>
	<Button colorScheme="orange" size="medium" on:click={() => router.navigate("")}>Go home</Button>
{:else if state === GAME_STATE.IN_PROGRESS}
	<!--IN PROGRESS-->
	<ProgressBar fill={level} max={MAX_LEVELS()} />

	<SimpleGame on:restart={onRestart} title={`Stage ${level+1}: ${seconds}s`} />
{:else if state === GAME_STATE.LOSE}
	<!--TIME OUT-->

	<h1 class="center red on-background-text">Game over</h1>

	<Column>
		<h3 class="center">{getRandomFailMessage(level)}</h3>
		<Separator />
		<ProgressBar fill={level} max={MAX_LEVELS()} />
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
