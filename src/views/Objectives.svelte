<script>
	import Objective from "../components/objectives/Objective.svelte";
	import Objectives from "../data/objectives";
	import Button from "../components/ui/Button.svelte";
	import router from "../store/runtime/router";
	import Separator from "../components/ui/Separator.svelte";
</script>

<h2 class="center on-background-text">Objectives</h2>
{#each Objectives.list() as objective}
	<Objective objective={objective} />
{/each}

<Separator />
<Button outline colorScheme="red" size="medium" on:click={() => router.back()}>Back</Button>
