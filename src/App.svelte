<script>
	import GameStore from "./store/runtime/gameStore";
	import Button from "./components/Button.svelte";
	import Campaign from "./views/Campaign.svelte";
	import Random from "./views/Random.svelte";
	import PwaInstallButton from "./components/PwaInstallButton.svelte";
	import Separator from "./components/Separator.svelte";
	import TimeAttack from "./views/TimeAttack.svelte";
	import PopUpManager from "./components/snackBar/SnackBar.svelte";
	import SnackBarStore from "./store/runtime/snackBarStore";

	const startCampaign = () => GameStore.setMode("campaign");
	const startRandom = () => GameStore.setMode("random");
	const startTimeAttack = () => GameStore.setMode("time-attack");
	const goHome = () => GameStore.setMode(null);
</script>

<PopUpManager />

<main>
	<header>
		<h1>Zero.2</h1>

		{ #if $GameStore.mode !== null}
			<Button colorScheme="red" on:click={goHome}>Go home</Button>
		{/if}
	</header>

	{ #if $GameStore.mode === "campaign"}
		<Campaign />
	{:else if $GameStore.mode === "random"}
		<Random />
	{:else if $GameStore.mode === "time-attack"}
		<TimeAttack />
	{:else}
		<Button on:click={startCampaign} colorScheme="red" size="medium">Play campaign</Button>
		<Separator />
		<Button on:click={startRandom} colorScheme="orange" size="medium">Play random</Button>
		<Separator />
		<Button on:click={startTimeAttack} colorScheme="green" size="medium">Play time attack</Button>
		<Separator />
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
</style>
