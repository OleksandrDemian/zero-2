import {writable} from "svelte/store";
import SnackBarStore from "./snackBarStore";
import PersistentStore, {PWA_INSTALL_SHOWN} from "../persistant/persistentStore";
import PwaInstallMessage from "../../components/snackBar/custom/PwaInstallMessage.svelte";

const { update, subscribe } = writable({
	installable: false
});

const storeHelper = {
	installPrompt: null
};

const setInstallable = (installPrompt) => {
	storeHelper.installPrompt = installPrompt;
	update(() => ({
		installable: true
	}));
	
	if(PersistentStore.get(PWA_INSTALL_SHOWN) !== true){
		SnackBarStore.pushSnack({
			title: "Install PWA",
			child: PwaInstallMessage,
			onClose: () => {
				PersistentStore.set(PWA_INSTALL_SHOWN, true);
				PersistentStore.save();
			}
		});
	}
};

export const listen = () => {
	if('serviceWorker' in navigator) {
		const sw = navigator.serviceWorker;
		sw.register('/serviceWorker.js');
		
		window.addEventListener('beforeinstallprompt', (e) => {
			// Prevent the mini-infobar from appearing on mobile
			e.preventDefault();
			// Stash the event so it can be triggered later.
			setInstallable(e);
		});
	}
};

const PwaInstallableStore = {
	subscribe,
	update,
	setInstallable,
	init: listen,
	getPrompt: () => storeHelper.installPrompt
};

export default PwaInstallableStore;
