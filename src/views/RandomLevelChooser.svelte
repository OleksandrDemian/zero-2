<script>
	import router from "../store/runtime/router";
	import Column from "../components/containers/Column.svelte";
	import Separator from "../components/ui/Separator.svelte";
	import Button from "../components/ui/Button.svelte";
	import DIFFICULTIES from "../data/difficultySettings";

	const start = (difficulty) => {
		return () => {
			router.navigate("random", {
				difficulty
			})
		}
	}
</script>

<Column>
	<Button on:click={start(DIFFICULTIES.EASY)} colorScheme="green" size="medium">Easy</Button>
	<Separator />
	<Button on:click={start(DIFFICULTIES.MEDIUM)} colorScheme="orange" size="medium">Medium</Button>
	<Separator />
	<Button on:click={start(DIFFICULTIES.HARD)} colorScheme="red" size="medium">Hard</Button>
	<Separator />
	<Button on:click={() => router.back()} colorScheme="red" outline size="medium">Back</Button>
</Column>
