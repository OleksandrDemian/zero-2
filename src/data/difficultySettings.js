export const DIFFICULTY_TUTORIAL = Object.freeze({
	name: "Tutorial",
	maxActionValue: 5,
	allowMultiplication: false,
	allowDivision: false,
	
	maxNumbers: 3,
	
	maxActions: 3
});

export const DIFFICULTY_EASY = Object.freeze({
	name: "Easy",
	maxActionValue: 6,
	allowMultiplication: false,
	allowDivision: false,
	
	maxNumbers: 2,
	
	maxActions: 3
});

export const DIFFICULTY_MEDIUM = Object.freeze({
	name: "Medium",
	minActionValue: 4,
	maxActionValue: 8,
	allowMultiplication: false,
	allowDivision: true,
	
	maxNumbers: 4,
	
	minActions: 2,
	maxActions: 4
});

export const DIFFICULTY_HARD = Object.freeze({
	name: "Hard",
	minActionValue: 5,
	maxActionValue: 10,
	allowMultiplication: true,
	allowDivision: true,
	
	maxNumbers: 4,
	
	minActions: 3,
	maxActions: 5
});

export const DIFFICULTY_SUPER_HARD = Object.freeze({
	name: "Super hard",
	minActionValue: 6,
	maxActionValue: 14,
	allowMultiplication: true,
	allowDivision: true,
	
	minNumbers: 4,
	maxNumbers: 6,
	
	minActions: 5,
	maxActions: 8
});

export const DIFFICULTY_EXTREME = Object.freeze({
	name: "Extreme",
	minActionValue: 8,
	maxActionValue: 20,
	allowMultiplication: true,
	allowDivision: true,
	
	minNumbers: 4,
	maxNumbers: 8,
	
	minActions: 5,
	maxActions: 8
});

const DIFFICULTIES = Object.freeze({
	TUTORIAL: DIFFICULTY_TUTORIAL,
	EASY: DIFFICULTY_EASY,
	MEDIUM: DIFFICULTY_MEDIUM,
	HARD: DIFFICULTY_HARD,
	SUPER_HARD: DIFFICULTY_SUPER_HARD,
	EXTREME: DIFFICULTY_EXTREME
});

export default DIFFICULTIES;
