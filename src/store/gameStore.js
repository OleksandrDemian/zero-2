import {writable} from "svelte/store";
import LEVELS from "../data/levels";
import NumbersStore from "./numbersStore";
import ActionsStore from "./actionsStore";

export const GAME_STATE = {
	IN_PROGRESS: 0,
	WIN: 1,
	LOSE: 2
};

const { set, update, subscribe } = writable({
	levelIndex: 0,
	title: "🤡",
	gameState: GAME_STATE.IN_PROGRESS
});

const loadLevel = (levelIndex) => {
	const level = LEVELS[levelIndex];
	
	update(() => ({
		levelIndex,
		title: level.name,
		gameState: GAME_STATE.IN_PROGRESS
	}));
	
	NumbersStore.init(level.numbers);
	ActionsStore.init(level.actions);
};

const checkVictory = (numbers) => {
	const inProgress = numbers.some(numb => (numb.value !== 0));
	
	if(!inProgress){
		update(state => {
			if(state.gameState === GAME_STATE.IN_PROGRESS) {
				return {...state, gameState: GAME_STATE.WIN};
			} else {
				return state;
			}
		});
	}
};

const checkLose = (actions) => {
	const inProgress = actions.some(action => (!action.used));
	
	if(!inProgress){
		update(state => {
			if(state.gameState === GAME_STATE.IN_PROGRESS) {
				return {...state, gameState: GAME_STATE.LOSE};
			} else {
				return state;
			}
		});
	}
};

const GameStore = {
	subscribe,
	
	loadLevel
};

NumbersStore.subscribe(checkVictory);
ActionsStore.subscribe(checkLose);

export default GameStore;
