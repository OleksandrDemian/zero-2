<script>
	import Column from "../components/containers/Column.svelte";
	import Button from "../components/ui/Button.svelte";
	import router from "../store/runtime/router";
	import Separator from "../components/ui/Separator.svelte";
	import ViewContainer from "../components/containers/ViewContainer.svelte";

	const enter = () => {
		router.navigate("time-game");
	};

	const leave = () => {
		router.back();
	}

</script>

<ViewContainer>
	<Column>
		<h3 class="center on-background-text">Time attack</h3>
		<p class="center">Solve puzzles while time is running up. Each passed level will give you +2 seconds.</p>

		<Separator />
		<Button size="medium" colorScheme="green" on:click={enter}>Let's go</Button>
	</Column>

	<Separator />
	<Button size="medium" colorScheme="red" outline on:click={leave}>Back</Button>
</ViewContainer>
