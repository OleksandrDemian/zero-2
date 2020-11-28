export const random = (a, b) => {
	if(a == null){
		return Math.random();
	} else if(b == null){
		return Math.floor(Math.random() * a);
	} else {
		return Math.floor(Math.random() * (b-a) + a);
	}
};

export const mustDo = (chance = 50) => {
	return random(100) > chance;
};

export const shuffleArray = (array) => {
	let currentIndex = array.length;
	let temporaryValue = null;
	let randomIndex = null;
	
	while (0 !== currentIndex) {
		randomIndex = random(currentIndex);
		currentIndex -= 1;
		
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	
	return array;
};
