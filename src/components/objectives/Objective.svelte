<script>
	import Objectives from "../../data/objectives";

	export let objective;
</script>

<div class="container" class:done={Objectives.isDone(objective.tag)}>
	<div class="image">

	</div>
	<div class="content">
		<h3>{objective.title}</h3>
		<p>{objective.description}</p>
	</div>
</div>

<style>
	div.container {
		display: flex;

		border-radius: var(--border-radius);

		margin: 10px 0;
		padding: 10px 20px;
		color: white;
	}

	div.container.done {
		background-color: var(--green);
	}

	div.container:not(.done) {
		background-color: var(--red);
	}

	div.image {
		display: none;
	}

	div.content {
		flex-grow: 1;
	}

	@media screen and (min-width: 500px) {
		div.image {
			display: block;

			min-width: 128px;
			min-height: 128px;

			width: 128px;
			height: 128px;
		}
	}
</style>
