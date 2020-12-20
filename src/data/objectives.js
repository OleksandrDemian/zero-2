import PersistentStore, {OBJECTIVES_STORED_ID} from "../store/persistant/persistentStore";

export const OBJECTIVES_ID = {
	ARCADE: "arcade",
	ROCK: "rock",
	MAD_SCIENTIST: "mad_scientist",
	TRANSCENDENT_ENTITY: "super_human",
	TIME_RUNNER: "time_runner",
	OVERDRIVE: "overdrive"
};

const OBJECTIVES = [
	{
		tag: OBJECTIVES_ID.ARCADE,
		title: "Arcade",
		description: "Complete arcade"
	},
	{
		tag: OBJECTIVES_ID.ROCK,
		title: "You rock!",
		description: "Complete 8 hard random levels in a row"
	},
	{
		tag: OBJECTIVES_ID.MAD_SCIENTIST,
		title: "Mad scientist",
		description: "Complete 8 super-hard levels in a row"
	},
	{
		tag: OBJECTIVES_ID.TRANSCENDENT_ENTITY,
		title: "Transcendent entity",
		description: "Complete 8 extreme levels in a row"
	},
	{
		tag: OBJECTIVES_ID.TIME_RUNNER,
		title: "Runner",
		description: "Complete time attack"
	},
	{
		tag: OBJECTIVES_ID.OVERDRIVE,
		title: "Overdrive",
		description: "Complete overdrive"
	}
];

const list = () => OBJECTIVES;

const isDone = (objTag) => {
	const stored = PersistentStore.get(OBJECTIVES_STORED_ID);
	return stored && stored[objTag] === true;
};

const complete = (objTag) => {
	let stored = PersistentStore.get(OBJECTIVES_STORED_ID);
	if(stored == null){
		stored = {};
	}
	
	if(stored[objTag] !== true){
		stored[objTag] = true;
		
		PersistentStore.set(OBJECTIVES_STORED_ID, stored);
		PersistentStore.save();
		
		return true;
	} else {
		return false;
	}
};

const Objectives = {
	list,
	isDone,
	complete
};

export default Objectives;
