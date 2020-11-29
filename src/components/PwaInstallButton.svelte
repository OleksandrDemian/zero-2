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
	<Button colorScheme="green" on:click={onInstall}>Install PWA</Button>
{/if}
