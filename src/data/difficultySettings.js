export const DIFFICULTY_EASY = Object.freeze({
	maxActionValue: 8,
	allowMultiplication: false,
	allowDivision: false,
	maxNumbers: 3,
	
	minActions: 1,
	maxActions: 4
});

export const DIFFICULTY_MEDIUM = Object.freeze({
	maxActionValue: 12,
	allowMultiplication: false,
	allowDivision: true,
	maxNumbers: 5,
	
	minActions: 3,
	maxActions: 6
});

export const DIFFICULTY_HARD = Object.freeze({
	maxActionValue: 16,
	allowMultiplication: true,
	allowDivision: true,
	maxNumbers: 5,
	
	minActions: 4,
	maxActions: 8
});

const DIFFICULTIES = Object.freeze({
	EASY: DIFFICULTY_EASY,
	MEDIUM: DIFFICULTY_MEDIUM,
	HARD: DIFFICULTY_HARD
});

export default DIFFICULTIES;
