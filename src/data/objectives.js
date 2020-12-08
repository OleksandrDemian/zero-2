import PersistentStore, {OBJECTIVES_STORED_ID} from "../store/persistant/persistentStore";

export const OBJECTIVES_ID = {
	STUDENT: "student",
	CITIZEN: "citizen"
};

const OBJECTIVES = [
	{
		tag: OBJECTIVES_ID.STUDENT,
		title: "Student",
		description: "Complete tutorial levels"
	},
	{
		tag: OBJECTIVES_ID.CITIZEN,
		title: "Citizen",
		description: "Complete campaign"
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
