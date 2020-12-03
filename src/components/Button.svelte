<script>
	export let colorScheme = "default";
	export let size = "default";
</script>

<button on:click color-scheme={colorScheme} size={size}>
	<slot></slot>
</button>

<style>
	button {
		cursor: pointer;
		border-radius: var(--border-radius);
		border: none;
		transition: all var(--animation-speed) ease-in-out;
	}

	/*button:hover {*/
	/*	transform: translateY(-3px);*/
	/*	box-shadow: 0 3px 0 0 rgba(28, 24, 0, .1);*/
	/*}*/

	button:not(:disabled):active {
		opacity: 0.8;
	}

	button:disabled {
		color: #999;
	}

	button:focus {
		border-color: #666;
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

	[size="default"] {
		padding: 5px 15px;
		font-size: var(--small-font-size);
	}

	[size="medium"] {
		padding: 8px 24px;
		font-size: var(--medium-font-size);
	}

	[size="big"] {
		padding: 10px 30px;
		font-size: var(--big-font-size);
	}
</style>
