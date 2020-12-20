<script>
	import GameStore from "../store/runtime/gameStore";
	import Button from "../components/ui/Button.svelte";
	import PwaInstallButton from "../components/misc/PwaInstallButton.svelte";
	import Separator from "../components/ui/Separator.svelte";
	import PersistentStore, {FIRST_TIME} from "../store/persistant/persistentStore";
	import SnackBarStore from "../store/runtime/snackBarStore";
	import FirstTimeMessage from "../components/snackBar/custom/FirstTimeMessage.svelte";
	import Version from "../components/misc/Version.svelte";
	import Column from "../components/containers/Column.svelte";
	import router from "../store/runtime/router";
	import Follow from "../components/misc/Follow.svelte";
	import ViewContainer from "../components/containers/ViewContainer.svelte";

	const startPlay = () => router.navigate("play");
	const showHowToPlay = () => router.navigate("how-it-works");
	const showObjectives = () => router.navigate("objectives");

	if (PersistentStore.get(FIRST_TIME) !== false) {
		setTimeout(() => {
			SnackBarStore.pushSnack({
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

<ViewContainer>
	<Column>
		<Button on:click={startPlay} colorScheme="green" size="medium">Play</Button>
		<Separator />
		<Button on:click={showHowToPlay} colorScheme="orange" size="medium">How to play</Button>
		<Separator />
		<Button on:click={showObjectives} colorScheme="red" size="medium">Objectives</Button>
		<Separator />
		<PwaInstallButton />
	</Column>

	<Separator />
	<Follow />
	<Version />
</ViewContainer>
