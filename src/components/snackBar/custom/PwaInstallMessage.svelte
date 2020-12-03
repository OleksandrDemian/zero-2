<script>
	import Button from "../../ui/Button.svelte";
	import PwaInstallableStore from "../../../store/runtime/pwaInstallStore";

	const onInstall = () => {
		PwaInstallableStore.getPrompt().prompt();
	};
</script>

<div class="container">
	Zero.2 is a Progressive Web App (PWA).
	By installing this app you will have the following benefits:
	<ul>
		<li>Play offline</li>
		<li>Fullscreen mode</li>
		<li>Lunch from menu</li>
	</ul>
</div>

<div class="button-container">
	<Button colorScheme="green" size="medium" on:click={onInstall}>Install</Button>
</div>

<style>
	div.container {
		font-size: var(--medium-font-size);
	}

	div.button-container {
		display: flex;
		flex-direction: column;
	}
</style>
