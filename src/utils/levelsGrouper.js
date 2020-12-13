export const groupLevels = (levels) => {
	const groupedLevels = {
		tutorial: {
			title: "Tutorial",
			levels: []
		},
		easy: {
			title: "Easy",
			levels: []
		},
		medium: {
			title: "Medium",
			levels: []
		},
		hard: {
			title: "Hard",
			levels: []
		},
		super_hard: {
			title: "Super hard",
			levels: []
		},
		extreme: {
			title: "Extreme",
			levels: []
		}
	};
	
	for(let i = 0; i < levels.length; i++) {
		groupedLevels[levels[i].difficulty].levels.push({...levels[i], index: i});
	}
	
	return groupedLevels;
};
