import {actionToLabel, DIV, MULT, SUB, SUM} from "../game/action";
import {mustDo, random, shuffleArray} from "../utils/random";

const LEVELS = [
	// {
	// 	name: "Level 1",
	// 	numbers: [
	// 		5
	// 	],
	// 	actions: [
	// 		{type: SUM, value: 6},
	// 		{type: SUB, value: 11}
	// 	]
	// },
	// {
	// 	name: "Level 2",
	// 	numbers: [
	// 		2, 7
	// 	],
	// 	actions: [
	// 		{type: SUB, value: 7},
	// 		{type: SUM, value: 5}
	// 	]
	// },
	// {
	// 	name: "Level 3",
	// 	numbers: [
	// 		-1, 7, 8
	// 	],
	// 	actions: [
	// 		{type: SUB, value: 8},
	// 		{type: MULT, value: -1},
	// 		{type: SUM, value: 1}
	// 	]
	// },
	// {
	// 	name: "Level 4",
	// 	numbers: [
	// 		-6, 1, -2
	// 	],
	// 	actions: [
	// 		{type: SUB, value: 1},
	// 		{type: DIV, value: 3},
	// 		{type: SUM, value: 2},
	// 	]
	// },
	// {
	// 	name: "Level 5",
	// 	numbers: [
	// 		1, -8
	// 	],
	// 	actions: [
	// 		{type: SUB, value: 4},
	// 		{type: SUM, value: 2},
	// 		{type: MULT, value: 4},
	// 		{type: DIV, value: 4}
	// 	]
	// },
	// {
	// 	name: "Level 6",
	// 	numbers: [
	// 		10
	// 	],
	// 	actions: [
	// 		{type: MULT, value: 6},
	// 		{type: SUB, value: 14},
	// 		{type: MULT, value: 2},
	// 		{type: DIV, value: 5},
	// 		{type: SUM, value: 36},
	// 		{type: SUM, value: 4},
	// 		{type: MULT, value: -1},
	// 		{type: MULT, value: 2},
	// 		{type: SUM, value: 1}
	// 	]
	// },
	// {
	// 	name: "Level 7",
	// 	numbers: [
	// 		-4, 6
	// 	],
	// 	actions: [
	// 		{type: DIV, value: 6},
	// 		{type: SUM, value: 2},
	// 		{type: MULT, value: -1},
	// 		{type: MULT, value: 2},
	// 		{type: DIV, value: 4}
	// 	]
	// }
];

const getRandomActionType = ({ numbers }) => {
	const allowedActions = [ SUM, SUB ];
	let allowDivision = true;
	
	for(let number of numbers) {
		if(number === 0){
			allowDivision = false;
		}
	}
	
	if(allowDivision){
		allowedActions.push(DIV);
	}
	
	return allowedActions[random(allowedActions.length)];
};

const applyAction = (number, value, action) => {
	switch (action) {
		case SUB: return number + value;
		case SUM: return number - value;
		case DIV: return number * value;
		case MULT: return Math.floor(number / value);
	}
};

const getRandomValue = (actionType) => {
	switch (actionType) {
		case DIV:
			let rand = random(-15, 15);
			return rand === 0 ? getRandomValue(DIV) : rand;
		case SUB:
		case SUM:
		default:
			return random(1, 15);
	}
};

const printSolution = (levelName, solutions) => {
	console.log(levelName + " solution:");
	for(let i = solutions.length-1; i>= 0; i--){
		console.log(`${solutions[i].action} on cells [${solutions[i].on.join(", ")}]`);
	}
};

export const createLevel = ({ difficulty }) => {
	const numbersCount = random(1, 4);
	let cycles = difficulty + 1;
	if(cycles > 12){
		cycles = 12;
	}
	
	const numbers = [];
	const actions = [];
	const name = "Level G-" + difficulty;
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
		
		const actionType = getRandomActionType({
			numbers
		});
		let value = getRandomValue(actionType);
		
		for(let index of targetNumbers){
			numbers[index] = applyAction(numbers[index], value, actionType);
		}
		
		solution.push({
			action: actionToLabel(actionType, value),
			on: targetNumbers
		});
		
		actions.push({
			type: actionType,
			value
		});
	}
	
	printSolution(name, solution);
	
	return {
		name,
		numbers: numbers.filter(num => num !== 0),
		actions: shuffleArray(actions)
	}
};

export default LEVELS;
