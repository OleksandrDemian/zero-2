import {actionToLabel, DIV, MULT, SUB, SUM} from "../game/action";
import {mustDo, random, shuffleArray} from "./random";

const getRandomAction = ({ numbers, settings }) => {
	const allowedActions = [SUM, SUB];
	let value = getRandomValue(settings.maxActionValue);
	
	let allowDivision = settings.allowDivision;
	let allowMultiplication = settings.allowMultiplication;
	
	for(let number of numbers) {
		if(!allowDivision && !allowMultiplication){
			break;
		}
		
		if(number === 0){
			allowDivision = false;
			allowMultiplication = false;
		}
		
		if(number % value !== 0){
			allowMultiplication = false;
		}
	}
	
	if(allowDivision){
		allowedActions.push(DIV);
	}
	
	if(allowMultiplication){
		allowedActions.push(MULT);
	}
	
	return {
		value,
		type: allowedActions[random(allowedActions.length)]
	};
};

const applyAction = (number, value, action) => {
	switch (action) {
		case SUB: return number + value;
		case SUM: return number - value;
		case DIV: return number * value;
		case MULT: return Math.floor(number / value);
	}
};

const getRandomValue = (max = 20) => {
	return random(1, max);
};

const printSolution = (levelName, solutions) => {
	console.log(levelName + " solution:");
	for(let i = solutions.length-1; i>= 0; i--){
		console.log(`${solutions[i].action} on cells [${solutions[i].on.join(", ")}]`);
	}
};

const DEFAULT_GENERATION_SETTINGS = ({ difficulty }) => ({
	maxActionValue: 12,
	allowMultiplication: false,
	allowDivision: true,
	maxNumbers: 4,
	
	actions: difficulty + 1,
	maxActions: 10
});

export const createLevel = (index, settings) => {
	settings = Object.assign({}, DEFAULT_GENERATION_SETTINGS({ difficulty: index }), settings || {});
	
	const numbersCount = random(1, settings.maxNumbers+1);
	let cycles = settings.actions;
	
	if(cycles > settings.maxActions){
		cycles = settings.maxActions;
	}
	
	const numbers = [];
	const actions = [];
	const name = "Level G-" + index;
	const solution = [];
	
	for(let i = 0; i < numbersCount; i++){
		numbers.push(0);
	}
	
	for(let i = 0; i < cycles; i++){
		const targetNumbers = [];
		for(let j = 0; j < numbersCount; j++){
			if(mustDo()){
				targetNumbers.push(j);
			}
		}
		
		if(targetNumbers.length < 1){
			i--;
			continue;
		}
		
		const { type, value } = getRandomAction({ numbers, settings });
		
		for(let index of targetNumbers){
			numbers[index] = applyAction(numbers[index], value, type);
		}
		
		solution.push({
			action: actionToLabel(type, value),
			on: targetNumbers
		});
		
		actions.push({
			type,
			value
		});
	}
	
	printSolution(name, solution);
	
	const validNumbers = numbers.filter(num => num !== 0);
	const polishedArray = [];
	//remove duplicates
	validNumbers.forEach(val => {
		if(polishedArray.indexOf(val) === -1){
			polishedArray.push(val);
		}
	});
	
	if(validNumbers.length === 0) {
		//alert && alert("EMPTY LEVEL: this is dev warning, ignore it, level will be recreated");
		return createLevel(index, settings);
	}
	
	return {
		name,
		numbers: polishedArray,
		actions: shuffleArray(actions)
	}
};

// document.createLevels = (qty, settings) => {
// 	const levels = [];
//
// 	for(let i = 0; i < qty; i++){
// 		levels.push(createLevel(i, settings));
// 	}
//
// 	return JSON.stringify(levels);
// };
