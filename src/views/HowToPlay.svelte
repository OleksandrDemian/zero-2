<script>
	import Separator from "../components/ui/Separator.svelte";
	import Button from "../components/ui/Button.svelte";
	import router from "../store/runtime/router";
	import ViewContainer from "../components/containers/ViewContainer.svelte";
	import Column from "../components/containers/Column.svelte";
</script>

<ViewContainer>
	<Column>
		<p>When you start playing, you will see two boards: <b>numbers</b> and <b>actions</b>.</p>
		<p>The objective is <b>to make all the numbers be equal to 0</b> before you end all the <b>actions</b>.</p>
		<p>In order to apply <b>action</b>, select (click) the <b>number</b> you want (<b>one or more</b>) and then click on the <b>action</b> you want to apply.</p>
		<p>!You can unselect numbers</p>
		<p>Good starting point is <b>Easy</b> difficulty of the <b>Random</b> mode. Once you feel unbeatable, try to complete <b>Time Attack</b> or get the highest score in <b>Arcade</b> mode.</p>
	</Column>

	<Separator />
	<Button colorScheme="red" outline size="medium" on:click={() => router.back()}>Back</Button>
</ViewContainer>
