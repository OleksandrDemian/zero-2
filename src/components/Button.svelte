<script>
	export let colorScheme = "default";
</script>

<button on:click color-scheme={colorScheme}>
	<slot></slot>
</button>

<style>
	button {
		cursor: pointer;
		border-radius: var(--border-radius);
		border: none;
		padding: 5px 15px;
		transition: all var(--animation-speed) ease-in-out;
	}

	button:hover {
		transform: translateY(-3px);
		box-shadow: 0 3px 0 0 rgba(28, 24, 0, .1);
	}

	[color-scheme="default"] {
		background-color: white;
		color: var(--text-color);
		border: 1px solid var(--text-color);
	}

	[color-scheme="red"] {
		background-color: var(--red);
		color: white;
	}

	[color-scheme="green"] {
		background-color: var(--green);
		color: white;
	}

	[color-scheme="blue"] {
		background-color: var(--blue);
		color: white;
	}

	[color-scheme="yellow"] {
		background-color: var(--yellow);
		color: white;
	}

	[color-scheme="orange"] {
		background-color: var(--orange);
		color: white;
	}
</style>
