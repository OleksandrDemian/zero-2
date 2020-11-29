import {writable} from "svelte/store";

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
};

export const listen = () => {
	window.addEventListener('beforeinstallprompt', (e) => {
		// Prevent the mini-infobar from appearing on mobile
		e.preventDefault();
		// Stash the event so it can be triggered later.
		setInstallable(e);
	});
};

const PwaInstallableStore = {
	subscribe,
	update,
	setInstallable,
	init: listen,
	getPrompt: () => storeHelper.installPrompt
};

export default PwaInstallableStore;
