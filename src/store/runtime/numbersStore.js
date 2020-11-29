import {writable} from "svelte/store";
import {DIV, MULT, SUB, SUM} from "../../game/action";
import {createNumber} from "../../game/number";

const {set, update, subscribe} = writable([]);

const triggerSelection = (number) => update(numbers => {
	const newNumbers = [];
	for (const n of numbers) {
		if (n === number) {
			n.selected = !n.selected;
		}
		
		newNumbers.push(n);
	}
	
	return newNumbers;
});

const applyAction = (action) => {
	let used = false;
	update(numbers => {
		const newNumbers = [];
		for (const n of numbers) {
			if (n.selected) {
				used = true;
				
				switch (action.action) {
					case SUM:
						n.value += action.value;
						break;
					case SUB:
						n.value -= action.value;
						break;
					case MULT:
						n.value *= action.value;
						break;
					case DIV:
						n.value = Math.floor(n.value /= action.value);
						break;
				}
			}
			if(n.value === 0) {
			n.selected = false;
			}
			
			newNumbers.push(n);
		}
		
		return used ? newNumbers : numbers;
	});
	
	return used;
};

const init = (numbers) => set(numbers.map(num => createNumber(num)));

const NumbersStore = {
	subscribe,
	triggerSelection,
	applyAction,
	init
};

export default NumbersStore;
