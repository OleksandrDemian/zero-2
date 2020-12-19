<script>
	import router from "../store/runtime/router";
	import Column from "../components/containers/Column.svelte";
	import Separator from "../components/ui/Separator.svelte";
	import Button from "../components/ui/Button.svelte";
	import ViewContainer from "../components/containers/ViewContainer.svelte";

	const startCampaign = () => router.navigate("campaign");
	const startRandom = () => router.navigate("random-level-chooser");
	const startTimeAttack = () => router.navigate("time-intro");
	const startArcade = () => router.navigate("arcade-intro");
</script>

<ViewContainer>
	<Column>
		<Button on:click={startCampaign} colorScheme="orange" size="medium">Campaign</Button>
		<Separator />
		<Button on:click={startRandom} colorScheme="green" size="medium">Random</Button>
		<Separator />
		<Button on:click={startArcade} colorScheme="blue" size="medium">Arcade</Button>
		<Separator />
		<Button on:click={startTimeAttack} colorScheme="red" size="medium">Time Attack</Button>
	</Column>

	<Separator />
	<Button on:click={() => router.back()} colorScheme="red" outline size="medium">Back</Button>
</ViewContainer>
