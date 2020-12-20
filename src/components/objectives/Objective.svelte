<script>
	import Objectives from "../../data/objectives";

	export let objective;
	let done = Objectives.isDone(objective.tag);
</script>

<div class="container" class:done={done}>
	<p>
		<span class="mark" class:done={done}></span>
		<b>{objective.title}</b>
	</p>
	<p>{objective.description}</p>
</div>

<style>
	div.container {
		display: flex;
		flex-direction: column;

		border-radius: var(--border-radius);

		margin: 10px 0;
		padding: 10px 20px;

		background-color: white;
		color: var(--text-color);

		overflow: hidden;
	}

	div.container.done {
		border: 2px solid var(--green);
	}

	div.container:not(.done) {
		border: 2px solid var(--red);
	}

	span.mark {
		margin-right: 10px;

		display: inline-block;
		width: 1rem;
		height: 1rem;

		border-radius: var(--border-radius);
	}

	span.mark.done {
		background-color: var(--green);
	}

	span.mark:not(.done) {
		background-color: var(--red);
	}

	p {
		display: flex;
		align-items: center;
	}
</style>
