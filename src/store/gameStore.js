import {writable} from "svelte/store";
import LEVELS from "../data/levels";
import NumbersStore from "./numbersStore";
import ActionsStore from "./actionsStore";
import {createLevel} from "../utils/levelGenerator";

export const GAME_STATE = {
	IN_PROGRESS: 0,
	WIN: 1,
	LOSE: 2,
	GAME_OVER: 3
};

const { set, update, subscribe } = writable({
	levelIndex: null,
	title: "🤡",
	gameState: GAME_STATE.IN_PROGRESS,
	levelPref: null,
	mode: null
});

const storeHelper = {
	levelIndex: null,
	levelPref: null
};

const loadLastLevel = () => {
	let levelIndex = localStorage.getItem("levelIndex");
	
	try {
		levelIndex = parseInt(levelIndex, 10);
		if(isNaN(levelIndex))
			return 0;
		else
			return levelIndex;
	} catch (e) {
		return 0;
	}
};

const loadLevel = (levelIndex) => {
	let level = null;
	
	if(levelIndex == null){
		levelIndex = loadLastLevel();
	}
	
	localStorage.setItem("levelIndex", levelIndex);
	
	if(storeHelper.levelIndex !== levelIndex){
		level = LEVELS[levelIndex];
		
		if(level == null){
			update((state) => ({
				...state,
				title: "Victory!",
				gameState: GAME_STATE.GAME_OVER
			}));
			
			//out of levels, WIN!!!!
			return;
		}
		
		storeHelper.levelPref = level;
		storeHelper.levelIndex = levelIndex;
	} else {
		level = storeHelper.levelPref;
	}
	
	update((state) => ({
		...state,
		levelIndex,
		title: level.name,
		gameState: GAME_STATE.IN_PROGRESS
	}));
	
	NumbersStore.init(level.numbers);
	ActionsStore.init(level.actions);
};

const createRandomLevel = (levelIndex) => {
	let level = null;
	
	if(storeHelper.levelIndex !== levelIndex){
		level = createLevel(levelIndex);
		
		storeHelper.levelIndex = levelIndex;
		storeHelper.levelPref = level;
	} else {
		level = storeHelper.levelPref;
	}
	
	update((state) => ({
		...state,
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

const setMode = (mode) => update(state => ({...state, mode }));

const GameStore = {
	subscribe,
	
	loadLevel,
	createRandomLevel,
	setMode
};

NumbersStore.subscribe(checkVictory);
ActionsStore.subscribe(checkLose);

export default GameStore;
