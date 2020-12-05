<script>
	export let colorScheme = "default";
	export let size = "default";
	export let outline = false;
</script>

<button on:click color-scheme={colorScheme} size={size} class:outline={outline}>
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

	/*OUTLINE*/
	button[color-scheme="default"].outline {
		background-color: white;
		color: black;
		border: 2px solid black;
	}

	button[color-scheme="red"].outline {
		background-color: white;
		border: 2px solid var(--red);
		color: var(--red);
	}

	button[color-scheme="green"].outline {
		background-color: white;
		border: 2px solid var(--green);
		color: var(--green);
	}

	button[color-scheme="blue"].outline {
		background-color: white;
		border: 2px solid var(--blue);
		color: var(--blue);
	}

	button[color-scheme="yellow"].outline {
		background-color: white;
		border: 2px solid var(--yellow);
		color: var(--yellow);
	}

	button[color-scheme="orange"].outline {
		background-color: white;
		border: 2px solid var(--orange);
		color: var(--orange);
	}

	/*FILL*/
	button[color-scheme="default"]:not(.outline) {
		background-color: black;
		border: 2px solid black;
		color: white;
	}

	button[color-scheme="red"]:not(.outline) {
		background-color: var(--red);
		border: 2px solid var(--red);
		color: white;
	}

	button[color-scheme="green"]:not(.outline) {
		background-color: var(--green);
		border: 2px solid var(--green);
		color: white;
	}

	button[color-scheme="blue"]:not(.outline) {
		background-color: var(--blue);
		border: 2px solid var(--blue);
		color: white;
	}

	button[color-scheme="yellow"]:not(.outline) {
		background-color: var(--yellow);
		border: 2px solid var(--yellow);
		color: white;
	}

	button[color-scheme="orange"]:not(.outline) {
		background-color: var(--orange);
		border: 2px solid var(--orange);
		color: white;
	}

	button[size="default"] {
		padding: 5px 15px;
		font-size: var(--small-font-size);
	}

	button[size="medium"] {
		padding: 8px 24px;
		font-size: var(--medium-font-size);
	}

	button[size="big"] {
		padding: 10px 30px;
		font-size: var(--big-font-size);
	}

	@media screen and (min-width: 500px) {
		button {
			width: fit-content;
			min-width: 210px;
			margin-right: auto;
			margin-left: auto;
		}
	}
</style>
