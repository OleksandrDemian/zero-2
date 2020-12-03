<script>
	import GameStore from "./store/runtime/gameStore";
	import Button from "./components/ui/Button.svelte";
	import Campaign from "./views/Campaign.svelte";
	import Random from "./views/Random.svelte";
	import PwaInstallButton from "./components/PwaInstallButton.svelte";
	import Separator from "./components/ui/Separator.svelte";
	import TimeAttack from "./views/TimeAttack.svelte";
	import PopUpManager from "./components/snackBar/SnackBar.svelte";
	import Header from "./components/Header.svelte";
	import PersistentStore, {FIRST_TIME} from "./store/persistant/persistentStore";
	import SnackBarStore from "./store/runtime/snackBarStore";
	import FirstTimeMessage from "./components/snackBar/custom/FirstTimeMessage.svelte";
	import HowToPlay from "./views/HowToPlay.svelte";
	import Version from "./components/Version.svelte";

	const startCampaign = () => GameStore.setMode("campaign");
	const startRandom = () => GameStore.setMode("random");
	const startTimeAttack = () => GameStore.setMode("time-attack");
	const showHowToPlay = () => GameStore.setMode("how-to-play");

	if (PersistentStore.get(FIRST_TIME) !== false) {
		setTimeout(() => {
			SnackBarStore.showSnack({
				title: "Welcome!",
				child: FirstTimeMessage,
				onClose: () => {
					PersistentStore.set(FIRST_TIME, false);
					PersistentStore.save();
				}
			});
		}, 500);
	}
</script>

<PopUpManager />

<main>
	<Header />

	{ #if $GameStore.mode === "campaign"}
		<Campaign />
	{:else if $GameStore.mode === "random"}
		<Random />
	{:else if $GameStore.mode === "time-attack"}
		<TimeAttack />
	{:else if $GameStore.mode === "how-to-play"}
		<HowToPlay />
	{:else}
		<Button on:click={startCampaign} colorScheme="green" size="medium">Play campaign</Button>
		<Separator />
		<Button on:click={startRandom} colorScheme="orange" size="medium">Play random</Button>
		<Separator />
		<Button on:click={startTimeAttack} colorScheme="red" size="medium">Time Throne</Button>
		<Separator />
		<Button on:click={showHowToPlay} size="medium">How to play</Button>
		<Separator />
		<PwaInstallButton />

		<Version />
	{/if}
</main>

<style>
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
