import App from './App.svelte';
import PwaInstallableStore from "./store/runtime/pwaInstallStore";

PwaInstallableStore.init();

const app = new App({
	target: document.body
});

export default app;
