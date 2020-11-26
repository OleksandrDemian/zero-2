export const SUM = "sum";
export const SUB = "sub";
export const MULT = "mult";
export const DIV = "div";

const wrapValue = value => {
	return value > 0 ? value.toString() : `(${value})`;
};

export const actionToLabel = (action, value) => {
	switch (action) {
		case SUM:
			return `+${wrapValue(value)}`;
		case SUB:
			return `-${wrapValue(value)}`;
		case MULT:
			return `*${wrapValue(value)}`;
		case DIV:
			return `/${wrapValue(value)}`;
	}
};

export const createAction = (action, value) => ({
	action,
	value,
	used: false,
	label: actionToLabel(action, value)
});
