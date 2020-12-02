<script>
	export let fill;
	const levels = [
		{ difficulty: "easy" },
		{ difficulty: "easy" },
		{ difficulty: "easy" },
		{ difficulty: "easy" },

		{ difficulty: "medium" },
		{ difficulty: "medium" },
		{ difficulty: "medium" },
		{ difficulty: "medium" },

		{ difficulty: "hard" },
		{ difficulty: "hard" },
		{ difficulty: "hard" },
		{ difficulty: "hard" }
	]
</script>

<div class="grid">
	{#each levels as level, i}
		<div class="level" difficulty={level.difficulty} class:fill={fill > i}></div>
	{/each}
</div>

<style>
	div.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-gap: 5px;
	}

	div.level {
		height: 15px;
		border: 2px solid var(--green);
		background-color: white;
		border-radius: var(--border-radius);
	}

	div[difficulty="easy"].fill {
		background-color: var(--green);
		border: 2px solid var(--green);
	}

	div[difficulty="medium"].fill {
		background-color: var(--orange);
		border: 2px solid var(--orange);
	}

	div[difficulty="hard"].fill {
		background-color: var(--red);
		border: 2px solid var(--red);
	}
</style>
