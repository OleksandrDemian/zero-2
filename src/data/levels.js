import {DIV, MULT, SUB, SUM} from "../game/action";

const LEVELS = [
	{
		name: "Level 1",
		numbers: [
			5
		],
		actions: [
			{ type: SUM, value: 6 },
			{ type: SUB, value: 11 }
		]
	},
	{
		name: "Level 2",
		numbers: [
			5, 88, 7, 6
		],
		actions: [
			{ type: SUM, value: 5 },
			{ type: SUB, value: 1 },
			{ type: MULT, value: -2 },
			{ type: DIV, value: 4 }
		]
	}
];

export default LEVELS;
