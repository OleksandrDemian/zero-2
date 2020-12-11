import PersistentStore, {OBJECTIVES_STORED_ID} from "../store/persistant/persistentStore";

export const OBJECTIVES_ID = {
	STUDENT: "student",
	TOUGH_GUY: "tough_guy",
	ROCK: "rock",
	MAD_SCIENTIST: "mad_scientist",
	SUPER_HUMAN: "super_human",
	TIME_RUNNER: "time_runner",
	LOOPER: "looper",
	TRANSCENDENT_ENTITY: "transcendent_entity"
};

const OBJECTIVES = [
	{
		tag: OBJECTIVES_ID.STUDENT,
		title: "Student",
		description: "Complete tutorial levels"
	},
	{
		tag: OBJECTIVES_ID.TOUGH_GUY,
		title: "Tough guy",
		description: "Complete campaign"
	},
	{
		tag: OBJECTIVES_ID.ROCK,
		title: "You rock!",
		description: "Complete 15 hard levels"
	},
	{
		tag: OBJECTIVES_ID.MAD_SCIENTIST,
		title: "Mad scientist",
		description: "Complete 15 super-hard levels in row"
	},
	{
		tag: OBJECTIVES_ID.SUPER_HUMAN,
		title: "Super human",
		description: "Complete 15 extreme levels in row"
	},
	{
		tag: OBJECTIVES_ID.TIME_RUNNER,
		title: "Time runner",
		description: "Complete time attack"
	},
	{
		tag: OBJECTIVES_ID.LOOPER,
		title: "Looper",
		description: "Complete loop"
	},
	{
		tag: OBJECTIVES_ID.TRANSCENDENT_ENTITY,
		title: "Transcendent entity",
		description: "???"
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
	
	stored[objTag] = true;
	
	PersistentStore.set(OBJECTIVES_STORED_ID, stored);
	PersistentStore.save();
};

const Objectives = {
	list,
	isDone,
	complete
};

export default Objectives;
