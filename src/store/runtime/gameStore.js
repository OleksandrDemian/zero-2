import {writable} from "svelte/store";
import LEVELS from "../../data/levels";
import NumbersStore from "./numbersStore";
import ActionsStore from "./actionsStore";
import {createLevel} from "../../utils/levelGenerator";

export const GAME_STATE = {
	NONE: -1,
	IN_PROGRESS: 0,
	WIN: 1,
	LOSE: 2,
	GAME_OVER: 3
};

const { set, update, subscribe } = writable({
	title: "🤡",
	gameState: GAME_STATE.IN_PROGRESS,
	mode: null
});

const storeHelper = {
	levelPref: null
};

const loadLevel = (levelIndex) => {
	const level = LEVELS[levelIndex];
	console.log(levelIndex)
	if(level == null){
		//todo: handle the end of campaign
		//todo: this statement can be also triggered by some error (?)
		update((state) => ({
			...state,
			title: "Victory!",
			gameState: GAME_STATE.GAME_OVER
		}));
	} else {
		setLevel(level);
	}
};

const createRandomLevel = (name, settings) => {
	const level = createLevel({ ...settings, name });
	setLevel(level);
};

const setLevel = (level) => {
	storeHelper.levelPref = level;
	
	update((state) => ({
		...state,
		title: level.name,
		gameState: GAME_STATE.IN_PROGRESS
	}));
	
	NumbersStore.init(level.numbers);
	ActionsStore.init(level.actions);
};

export const restoreLevel = () => {
	const level = storeHelper.levelPref;
	
	setState(GAME_STATE.IN_PROGRESS);
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

const setMode = (mode) => update(state => ({...state, mode }));
const setState = (gameState) => update(state => ({...state, gameState }));

const GameStore = {
	subscribe,
	
	setLevel,
	loadLevel,
	createRandomLevel,
	restoreLevel,
	
	setMode,
	setState
};

NumbersStore.subscribe(checkVictory);
ActionsStore.subscribe(checkLose);

export default GameStore;
