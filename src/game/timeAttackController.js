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
		levels: 6,
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
		levels: 4,
		timeBonus: 2,
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
		timeBonus: 2,
		messages: {
			fail: [
				"Well, at least you beat medium difficulty",
				"So close",
				"You can do it",
				"YOU CAN HANDLE IT"
			]
		}
	},
];

export const MAX_LEVELS = () => {
	return STAGES.reduce((prev, cur) => prev + cur.levels, 0)
};

export const getStage = (level) => {
	let temp = 0;
	return STAGES.find((stage) => {
		temp += stage.levels;
		return level < temp;
	});
};

export const getRandomFailMessage = (level) => {
	const stage = getStage(level);
	const msg = stage.messages.fail;
	return msg[random(0, msg.length)];
};
