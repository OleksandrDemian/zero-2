import PersistentStore, {PLAYER_ID} from "../store/persistant/persistentStore";
import {random} from "./random";

const check = () => {
	let playerId = PersistentStore.get(PLAYER_ID);
	if(playerId == null){
		playerId = Date.now().toString() + random(0, 99);
		PersistentStore.set(PLAYER_ID, playerId);
		PersistentStore.save();
	}
	
	fetch(`http://infinitysasha.altervista.org/zero-2/index.php?playerId=${playerId}`, {
		mode: "no-cors"
	}).then(() => console.log("ok"));
};

const User = {
	check
};

export default User;
