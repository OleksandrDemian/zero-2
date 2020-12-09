<script>
	import router from "../store/runtime/router";
	import Column from "../components/containers/Column.svelte";
	import Separator from "../components/ui/Separator.svelte";
	import Button from "../components/ui/Button.svelte";
	import ViewContainer from "../components/containers/ViewContainer.svelte";

	const startCampaign = () => router.navigate("campaign");
	const startRandom = () => router.navigate("random-level-chooser");
	const startTimeAttack = () => router.navigate("time-intro");
</script>

<ViewContainer>
	<Column>
		<Button on:click={startCampaign} colorScheme="green" size="medium">Campaign</Button>
		<Separator />
		<Button on:click={startRandom} colorScheme="orange" size="medium">Random</Button>
		<Separator />
		<Button on:click={startTimeAttack} colorScheme="red" size="medium">Time Throne</Button>
		<Separator />
		<Button on:click={() => router.back()} colorScheme="red" outline size="medium">Back</Button>
	</Column>
</ViewContainer>
