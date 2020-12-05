<script>
	import GameStore from "../store/runtime/gameStore";
	import Button from "../components/ui/Button.svelte";
	import PwaInstallButton from "../components/PwaInstallButton.svelte";
	import Separator from "../components/ui/Separator.svelte";
	import PersistentStore, {FIRST_TIME} from "../store/persistant/persistentStore";
	import SnackBarStore from "../store/runtime/snackBarStore";
	import FirstTimeMessage from "../components/snackBar/custom/FirstTimeMessage.svelte";
	import Version from "../components/Version.svelte";
	import Column from "../components/containers/Column.svelte";
	import router from "../store/runtime/router";

	const startCampaign = () => router.navigate("campaign");
	const startRandom = () => router.navigate("random");
	const startTimeAttack = () => router.navigate("time");
	const showHowToPlay = () => router.navigate("how-it-works");

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

<Column>
	<Button on:click={startCampaign} colorScheme="green" size="medium">Play campaign</Button>
	<Separator />
	<Button on:click={startRandom} colorScheme="orange" size="medium">Play random</Button>
	<Separator />
	<Button on:click={startTimeAttack} colorScheme="red" size="medium">Time Throne</Button>
	<Separator />
	<Button on:click={showHowToPlay} size="medium" outline>How to play</Button>
	<Separator />
	<PwaInstallButton />

	<Version />
</Column>
