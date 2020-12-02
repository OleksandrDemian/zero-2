export const DIFFICULTY_EASY = Object.freeze({
	maxActionValue: 6,
	allowMultiplication: false,
	allowDivision: false,
	maxNumbers: 2,
	
	minActions: 1,
	maxActions: 3
});

export const DIFFICULTY_MEDIUM = Object.freeze({
	maxActionValue: 10,
	allowMultiplication: false,
	allowDivision: true,
	maxNumbers: 4,
	
	minActions: 2,
	maxActions: 5
});

export const DIFFICULTY_HARD = Object.freeze({
	maxActionValue: 12,
	allowMultiplication: true,
	allowDivision: true,
	maxNumbers: 4,
	
	minActions: 3,
	maxActions: 6
});

const DIFFICULTIES = Object.freeze({
	EASY: DIFFICULTY_EASY,
	MEDIUM: DIFFICULTY_MEDIUM,
	HARD: DIFFICULTY_HARD
});

export default DIFFICULTIES;
