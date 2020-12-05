<script>
	import Column from "../components/containers/Column.svelte";
	import Button from "../components/ui/Button.svelte";
	import router from "../store/runtime/router";
	import Separator from "../components/ui/Separator.svelte";

	const enter = () => {
		router.navigate("time-game");
	};

	const leave = () => {
		router.navigate("");
	}

</script>

<Column>
	<h3 class="center">Time throne</h3>
	<p class="center">Are you sure you want to enter the time cave?</p>

	<Separator />
	<Button size="medium" colorScheme="green" on:click={enter}>Let's go</Button>
	<Separator />
	<Button size="medium" colorScheme="red" outline on:click={leave}>Nope</Button>
</Column>
