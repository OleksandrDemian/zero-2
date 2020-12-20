<script>
	import GameStore from "../store/runtime/gameStore";
	import SimpleGame from "../components/game/SimpleGame.svelte";
	import ViewContainer from "../components/containers/ViewContainer.svelte";
	import DIFFICULTIES from "../data/difficultySettings";
	import Objectives, {OBJECTIVES_ID} from "../data/objectives";
	import SnackBarStore from "../store/runtime/snackBarStore";

	export let difficulty = null;
	let index = 0;
	let startTime = Date.now();

	const completeDifficulty = (dif) => {
		if(dif === DIFFICULTIES.HARD){
			return Objectives.complete(OBJECTIVES_ID.ROCK);
		} else if(dif === DIFFICULTIES.SUPER_HARD){
			return Objectives.complete(OBJECTIVES_ID.MAD_SCIENTIST);
		} else if(dif === DIFFICULTIES.EXTREME){
			return Objectives.complete(OBJECTIVES_ID.TRANSCENDENT_ENTITY);
		}
	};

	const checkObjective = () => {
		if(index === 8){
			const deltaTime = Date.now() - startTime;
			return deltaTime < 5 * 60 * 1000;
		}

		return false;
	};

	const onNext = () => {
		if(checkObjective() && completeDifficulty(difficulty)) {
			SnackBarStore.pushSnack({
				title: "Objective complete",
				message: `Unlocked new objective`
			})
		}

		index++;
		GameStore.createRandomLevel(`${difficulty.name} ${index}`, difficulty);
	};

	const onRestart = () => {
		GameStore.restoreLevel();
	};

	onNext();
</script>

<ViewContainer>
	<SimpleGame on:next={onNext} on:restart={onRestart} title={$GameStore.title} />
</ViewContainer>
