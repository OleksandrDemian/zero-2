<script>
	import PwaInstallableStore from "../store/runtime/pwaInstallStore";
	import Button from "./Button.svelte";

	const onInstall = () => {
		const prompt = PwaInstallableStore.getPrompt();
		prompt.prompt();
		// Wait for the user to respond to the prompt
		prompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the install prompt');
			} else {
				console.log('User dismissed the install prompt');
			}
		});
	}
</script>

{ #if $PwaInstallableStore.installable }
	<h3>Install</h3>
	<span>You can get "native-like" behaviour by installing it as PWA. PWA will offer you the following benefits:</span>
	<ul>
		<li>No more annoying top-bar</li>
		<li>Offline play</li>
		<li>Launch as native app (from menu)</li>
	</ul>

	<Button colorScheme="green" on:click={onInstall} size="medium">Install PWA</Button>
{/if}
