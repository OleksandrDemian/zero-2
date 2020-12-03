<script>
	import NumbersBoard from "./NumbersBoard.svelte";
	import ActionsBoard from "./ActionsBoard.svelte";
	import GameStore, {GAME_STATE} from "../../store/runtime/gameStore";
	import Button from "../ui/Button.svelte";
	import {onDestroy} from "svelte";
	import DIFFICULTIES from "../../data/difficultySettings";
	import ProgressBar from "../ProgressBar.svelte";
	import Separator from "../ui/Separator.svelte";

	const STAGES = [
		{
			difficulty: DIFFICULTIES.EASY,
			levels: 4,
			bonus: 2
		},
		{
			difficulty: DIFFICULTIES.MEDIUM,
			levels: 4,
			bonus: 3
		},
		{
			difficulty: DIFFICULTIES.HARD,
			levels: 4,
			bonus: 6
		},
	];

	let isPlaying = false;
	let end = false;

	let counter = 0;
	const levels = STAGES.reduce(((previousValue, currentValue) => previousValue + currentValue.levels), 0);

	let level = 0;
	let stage = 0;

	let seconds = 15;
	let intervalId = null;

	const unsubscribe = GameStore.subscribe(value => {
		if (isPlaying && value.gameState === GAME_STATE.WIN) {
			counter++;

			if (counter >= levels) {
				end = true;
			}

			seconds += STAGES[stage].bonus;

			stop();
		} else if (isPlaying && value.gameState === GAME_STATE.LOSE) {
			level--;
			stop();
			start();
		}
	});

	const start = () => {
		level++;

		if (level > STAGES[stage].levels) {
			level = 1;
			stage++;
		}

		GameStore.createRandomLevel(level, STAGES[stage].difficulty);
		isPlaying = true;

		intervalId = setInterval(() => {
			seconds--;

			if (seconds < 0) {
				seconds = 0;
				gameOver();
			}
		}, 1000);
	};

	const stop = () => {
		isPlaying = false;
		clearInterval(intervalId);
	};

	const gameOver = () => {
		stop();
		GameStore.setState(GAME_STATE.LOSE);
	};

	onDestroy(() => {
		stop();
		unsubscribe();
	});

	GameStore.resetLevelIndex();
	start();
</script>

<div class="level-head">
	<h3>Stage {stage}-{level}</h3>
	<h3 class:red={seconds < 5} class:green={seconds > 10}>Time: {seconds}s</h3>
</div>

{#if end}
	<h1 class="center green">Level clear</h1>
	<h3 class="center">Time Throne is yours now. You can be proud of yourself</h3>
	<Button colorScheme="orange" size="medium" on:click={() => GameStore.setMode(null)}>Go home</Button>
{:else if $GameStore.gameState === GAME_STATE.IN_PROGRESS}
	<NumbersBoard />
	<ActionsBoard />
{:else if $GameStore.gameState === GAME_STATE.WIN}
	<h1 class="center green">Level clear</h1>
	<h3 class="center">The Time Throne is nearer with each stage.</h3>

	<Separator />
	<ProgressBar fill={stage*4+level} />
	<Separator />

	<p class="center">Bonus +{STAGES[stage].bonus} seconds</p>
	<Button on:click={start} size="medium" colorScheme="green">Next level</Button>
{:else if $GameStore.gameState === GAME_STATE.LOSE}
	<h1 class="center red">Game over</h1>
	<h3 class="center">You didn't manage to become the time king. Maybe the next time.</h3>

	<Separator />
	<ProgressBar fill={stage*4+level} />
	<Separator />

	<p class="center">Try to exercise yourself in campaign or random play</p>
	<Button colorScheme="red" size="medium" on:click={() => GameStore.setMode(null)}>Go home</Button>
{/if}

<style>
	.center {
		text-align: center;
	}

	.red {
		color: var(--red);
	}

	.green {
		color: var(--green);
	}

	div.level-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
