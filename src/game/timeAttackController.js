import DIFFICULTIES from "../data/difficultySettings";
import {random} from "../utils/random";

export const START_TIME_LIMIT = 15;

const STAGES = [
	{
		difficulty: DIFFICULTIES.TUTORIAL,
		name: "Tutorial",
		levels: 2,
		timeBonus: 2,
		messages: {
			fail: [
				"No comments",
				"Wow, so bad",
				"It can't get easier then this",
				"You suck, it's tutorial difficulty",
				"Maybe random generation had some issues, try another one"
			]
		}
	},
	{
		difficulty: DIFFICULTIES.EASY,
		name: "Easy",
		levels: 2,
		timeBonus: 2,
		messages: {
			fail: [
				"Maybe a bit of exercise?",
				"At least, it's not the easiest difficulty"
			]
		}
	},
	{
		difficulty: DIFFICULTIES.MEDIUM,
		name: "Medium",
		levels: 6,
		timeBonus: 3,
		messages: {
			fail: [
				"Close enough",
				"You were going pretty well",
				"You almost did it (to the last stage)"
			]
		}
	},
	{
		difficulty: DIFFICULTIES.HARD,
		name: "Hard",
		levels: 2,
		timeBonus: 4,
		messages: {
			fail: [
				"Well, at least you beat medium difficulty",
				"So close",
				"You can do it",
				"YOU CAN HANDLE IT"
			]
		}
	}
];

const LOOP_STAGES = [
	{
		difficulty: DIFFICULTIES.HARD,
		name: "Hard",
		levels: 4,
		timeBonus: 4,
		messages: {
			fail: [
				"Wasn't ready for loop?"
			]
		}
	},
	{
		difficulty: DIFFICULTIES.SUPER_HARD,
		name: "Super hard",
		levels: 4,
		timeBonus: 5,
		messages: {
			fail: [
				"You got super far",
				"You're better then Clark"
			]
		}
	},
	{
		difficulty: DIFFICULTIES.EXTREME,
		name: "Extreme",
		levels: 4,
		timeBonus: 6,
		messages: {
			fail: [
				"Dude, you rock",
				"You almost did it"
			]
		}
	}
];

export const MAX_LEVELS = (isLoop = false) => {
	if(isLoop){
		return LOOP_STAGES.reduce((prev, cur) => prev + cur.levels, 0)
	} else {
		return STAGES.reduce((prev, cur) => prev + cur.levels, 0)
	}
};

export const getStage = (level, isLoop = false) => {
	let temp = 0;
	const stages = isLoop ? LOOP_STAGES : STAGES;
	return stages.find((stage) => {
		temp += stage.levels;
		return level < temp;
	});
};

export const getRandomFailMessage = (level, isLoop = false) => {
	const stage = getStage(level, isLoop);
	const msg = stage.messages.fail;
	return msg[random(0, msg.length)];
};
