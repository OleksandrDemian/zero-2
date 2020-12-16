<script>
	import Button from "../components/ui/Button.svelte";
	import router from "../store/runtime/router";
	import ViewContainer from "../components/containers/ViewContainer.svelte";
	import Column from "../components/containers/Column.svelte";
	import Separator from "../components/ui/Separator.svelte";
</script>

<ViewContainer>
	<Column>
		<p class="center">Get highest score you can playing series of 10 random generated levels.</p>
		<Separator />
		<Button size="medium" colorScheme="green" on:click={() => router.navigate("arcade")}>Start</Button>
		<!--<Separator />-->
		<!--<Button>Leader board</Button>-->
	</Column>

	<Separator />
	<Button size="medium" colorScheme="red" outline on:click={router.back}>Back</Button>
</ViewContainer>
