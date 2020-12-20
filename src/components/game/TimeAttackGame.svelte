<script>
	import GameStore, {GAME_STATE} from "../../store/runtime/gameStore";
	import Button from "../ui/Button.svelte";
	import {onDestroy} from "svelte";
	import ProgressBar from "./ProgressBar.svelte";
	import Separator from "../ui/Separator.svelte";
	import router from "../../store/runtime/router";
	import SimpleGame from "./SimpleGame.svelte";
	import Column from "../containers/Column.svelte";
	import {getStage, getRandomFailMessage, MAX_LEVELS, START_TIME_LIMIT} from "../../game/timeAttackController";
	import PersistentStore, {SUCCESSFUL_OVERDRIVES, SUCCESSFUL_TIME_ATTACKS} from "../../store/persistant/persistentStore";

	let state = GAME_STATE.NONE;

	let level = 0;
	let isOverdrive = false;
	let maxLevels = 0;

	let seconds = START_TIME_LIMIT;
	let intervalId = null;

	const unsubscribe = GameStore.subscribe(value => {
		if(state === GAME_STATE.IN_PROGRESS){
			if (value.gameState === GAME_STATE.WIN) {
				level ++;
				if(level >= maxLevels) {
					stop();
					state = GAME_STATE.WIN;

					const prop = isOverdrive ? SUCCESSFUL_OVERDRIVES : SUCCESSFUL_TIME_ATTACKS;
					const successfulRuns = PersistentStore.get(prop);
					PersistentStore.set(prop, successfulRuns+1);
					PersistentStore.save();
				} else {
					startLevel();
				}
			} else if (value.gameState === GAME_STATE.LOSE) {
				GameStore.restoreLevel();
			}
		}
	});

	const startGame = () => {
		maxLevels = MAX_LEVELS(isOverdrive);
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
		const stageSetting = getStage(level, isOverdrive);

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

	const startOverdrive = () => {
		isOverdrive = true;
		level = 0;
		startGame();
	};

	startGame();
</script>

<!--<h3 class="center on-background-text" class:red={seconds < 5} class:green={seconds > 10}>Time: {seconds}s</h3>-->

{#if state === GAME_STATE.WIN}
	<!--VICTORY-->
	<Column>
		<h1 class="center green on-background-text">Congrats</h1>
		{#if isOverdrive}
			<h3 class="center on-background-text">You can be proud of yourself</h3>
		{:else}
			<h3 class="center on-background-text">Wow man, good overdrive.</h3>
		{/if}
	</Column>

	{#if !isOverdrive && seconds > 5}
		<Button colorScheme="green" size="medium" on:click={startOverdrive}>OVERDRIVE</Button>
		<Separator />
	{/if}

	<Button colorScheme="red" size="medium" on:click={() => router.navigate("")}>Go home</Button>
{:else if state === GAME_STATE.IN_PROGRESS}
	<!--IN PROGRESS-->
	<ProgressBar fill={level} max={maxLevels} />

	<SimpleGame on:restart={onRestart} title={`Stage ${level+1}: ${seconds}s`} />
{:else if state === GAME_STATE.LOSE}
	<!--TIME OUT-->

	<ProgressBar fill={level} max={maxLevels} />

	<Column>
		<h1 class="center red on-background-text">Game over</h1>
		<Separator />
		<h3 class="center">{getRandomFailMessage(level, isOverdrive)}</h3>
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
