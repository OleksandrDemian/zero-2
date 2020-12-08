import App from './App.svelte';
import PwaInstallableStore from "./store/runtime/pwaInstallStore";
import {checkLocalStorage} from "./utils/mockLocalStorage";
import SnackBarStore from "./store/runtime/snackBarStore";

if(checkLocalStorage()){
	SnackBarStore.showSnack({
		title: "Storage",
		message: "There were some problems with localstorage. Your data will be erased after the session ends"
	});
}

PwaInstallableStore.init();

const app = new App({
	target: document.body
});

export default app;
