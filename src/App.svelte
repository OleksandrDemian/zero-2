<script>
	import GameStore from "./store/gameStore";
	import Button from "./components/Button.svelte";
	import Campaign from "./views/Campaign.svelte";
	import Random from "./views/Random.svelte";

	const startCampaign = () => GameStore.setMode("campaign");
	const startRandom = () => GameStore.setMode("random");
	const goHome = () => GameStore.setMode(null);
</script>

<main>
	<header>
		<h1>Zero.2</h1>
		<Button on:click={goHome}>Go home</Button>
	</header>

	{ #if $GameStore.mode === "campaign"}
		<Campaign />
	{:else if $GameStore.mode === "random"}
		<Random />
	{:else}
		<Button on:click={startCampaign} colorScheme="red">Play campaign</Button>
		<div class="separator"></div>
		<Button on:click={startRandom} colorScheme="green">Play random</Button>
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
