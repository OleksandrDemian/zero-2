<script>
	import Button from "../components/ui/Button.svelte";
	import router from "../store/runtime/router";
	import ViewContainer from "../components/containers/ViewContainer.svelte";
	import Column from "../components/containers/Column.svelte";
	import Separator from "../components/ui/Separator.svelte";
	import PersistentStore, {BEST_ARCADE_SCORE} from "../store/persistant/persistentStore";

	const bestScore = PersistentStore.get(BEST_ARCADE_SCORE);
</script>

<ViewContainer>
	<Column>
		<h3 class="on-background-text center">Your best score: {bestScore}</h3>
		<p class="center">Get highest score you can playing series of random generated levels.</p>
		<Separator />
		<Button size="medium" colorScheme="green" on:click={() => router.navigate("arcade")}>Start</Button>
		<!--<Separator />-->
		<!--<Button>Leader board</Button>-->
	</Column>

	<Separator />
	<Button size="medium" colorScheme="red" outline on:click={router.back}>Back</Button>
</ViewContainer>
