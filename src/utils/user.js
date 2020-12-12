import PersistentStore, {PLAYER_ID} from "../store/persistant/persistentStore";
import {random} from "./random";

const check = () => {
	let playerId = PersistentStore.get(PLAYER_ID);
	if(playerId == null){
		playerId = Date.now().toString() + random(0, 99);
		PersistentStore.set(PLAYER_ID, playerId);
		PersistentStore.save();
	}
};

const User = {
	check
};

export default User;
