import {DIV, MULT, SUB, SUM} from "../game/action";

const LEVELS = [
	{
		name: "Level 1",
		numbers: [
			5
		],
		actions: [
			{type: SUM, value: 6},
			{type: SUB, value: 11}
		]
	},
	{
		name: "Level 2",
		numbers: [
			2, 7
		],
		actions: [
			{type: SUB, value: 7},
			{type: SUM, value: 5}
		]
	},
	{
		name: "Level 3",
		numbers: [
			-1, 7, 8
		],
		actions: [
			{type: SUB, value: 8},
			{type: MULT, value: -1},
			{type: SUM, value: 1}
		]
	},
	{
		name: "Level 4",
		numbers: [
			-6, 1, -2
		],
		actions: [
			{type: SUB, value: 1},
			{type: DIV, value: 3},
			{type: SUM, value: 2},
		]
	},
	{
		name: "Level 5",
		numbers: [
			1, -8
		],
		actions: [
			{type: SUB, value: 4},
			{type: SUM, value: 2},
			{type: MULT, value: 4},
			{type: DIV, value: 4}
		]
	},
	{
		name: "Level 6",
		numbers: [
			10
		],
		actions: [
			{type: MULT, value: 6},
			{type: SUB, value: 14},
			{type: MULT, value: 2},
			{type: DIV, value: 5},
			{type: SUM, value: 36},
			{type: SUM, value: 4},
			{type: MULT, value: -1},
			{type: MULT, value: 2},
			{type: SUM, value: 1}
		]
	}
];

export default LEVELS;
