<script>
	import GameStore from "./store/runtime/gameStore";
	import Button from "./components/Button.svelte";
	import Campaign from "./views/Campaign.svelte";
	import Random from "./views/Random.svelte";
	import PwaInstallButton from "./components/PwaInstallButton.svelte";

	const startCampaign = () => GameStore.setMode("campaign");
	const startRandom = () => GameStore.setMode("random");
	const goHome = () => GameStore.setMode(null);
</script>

<main>
	<header>
		<h1>Zero.2</h1>

		{ #if $GameStore.mode !== null}
			<Button on:click={goHome}>Go home</Button>
		{/if}
	</header>

	{ #if $GameStore.mode === "campaign"}
		<Campaign />
	{:else if $GameStore.mode === "random"}
		<Random />
	{:else}
		<Button on:click={startCampaign} colorScheme="red" size="medium">Play campaign</Button>
		<div class="separator"></div>
		<Button on:click={startRandom} colorScheme="green" size="medium">Play random</Button>
		<PwaInstallButton />
	{/if}
</main>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	@media screen and (max-width: 768px) {
		main {
			padding: 45px;
		}
	}

	main {
		width: 100%;
		max-width: 500px;
		display: flex;
		flex-direction: column;

		margin-left: auto;
		margin-right: auto;
	}

	div.separator {
		height: 25px;
	}
</style>
