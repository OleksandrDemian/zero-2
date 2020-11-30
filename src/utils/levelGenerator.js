import {actionToLabel, DIV, MULT, SUB, SUM} from "../game/action";
import {mustDo, random, shuffleArray} from "./random";

const getRandomAction = ({ numbers, settings }) => {
	const allowedActions = [SUM, SUB];
	let value = random(settings.minActionValue, settings.maxActionValue);
	
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

const printSolution = (levelName, solutions) => {
	console.log(levelName + " solution:");
	for(let i = solutions.length-1; i>= 0; i--){
		console.log(`${solutions[i].action} on cells [${solutions[i].on.join(", ")}]`);
	}
};

const DEFAULT_GENERATION_SETTINGS = () => ({
	minActionValue: 1,
	maxActionValue: 10,
	allowMultiplication: false,
	allowDivision: true,
	maxNumbers: 4,
	
	name: "Generated",
	
	minActions: 2,
	maxActions: 6
});

export const createLevel = (settings, controlValue = 0) => {
	if(controlValue > 5){
		throw "Cannot create new levels!";
	}
	
	settings = Object.assign({}, DEFAULT_GENERATION_SETTINGS(), settings || {});
	
	const numbersCount = random(1, settings.maxNumbers+1);
	const cycles = random(settings.minActions, settings.maxActions+1);
	
	const numbers = [];
	const actions = [];
	const name = settings.name;
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
		return createLevel(settings, controlValue++);
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
