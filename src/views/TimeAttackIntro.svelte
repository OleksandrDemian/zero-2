<script>
	import Column from "../components/containers/Column.svelte";
	import Button from "../components/ui/Button.svelte";
	import router from "../store/runtime/router";
	import Separator from "../components/ui/Separator.svelte";
	import ViewContainer from "../components/containers/ViewContainer.svelte";
	import PersistentStore, {SUCCESSFUL_TIME_ATTACKS, SUCCESSFUL_OVERDRIVES} from "../store/persistant/persistentStore";

	const enter = () => {
		router.navigate("time-game");
	};

	const leave = () => {
		router.back();
	}
</script>

<ViewContainer>
	<Column>
		<p class="center">Solve puzzles while time is running out. Each passed level will give you a couple of bonus seconds.</p>
		<p class="center">Successful runs: {PersistentStore.get(SUCCESSFUL_TIME_ATTACKS)}</p>
		<p class="center">Successful overdrives: {PersistentStore.get(SUCCESSFUL_OVERDRIVES)}</p>
		<Separator />
		<Button size="medium" colorScheme="green" on:click={enter}>Let's go</Button>
	</Column>

	<Separator />
	<Button size="medium" colorScheme="red" outline on:click={leave}>Back</Button>
</ViewContainer>
