<script>
	export let color = "default";
	export let block = false;
	export let bold = false;
	export let size = "default";
</script>

<span class:block={block} class:bold={bold} color={color} size={size}>
	<slot></slot>
</span>

<style>
	span {
		background-color: var(--background-color);
	}

	span.block {
		display: block;
	}

	span.bold {
		font-weight: bold;
	}

	span[color="default"] {
		color: var(--text-color);
	}

	span[color="red"] {
		color: var(--red);
	}

	span[color="green"] {
		color: var(--green);
	}

	span[color="blue"] {
		color: var(--blue);
	}

	span[color="orange"] {
		color: var(--orange);
	}

	span[size="default"] {
		margin: 15px 0;
		font-size: var(--small-font-size);
	}

	span[size="medium"] {
		margin: 20px 0;
		font-size: var(--medium-font-size);
	}

	span[size="big"] {
		margin: 25px 0;
		font-size: var(--big-font-size);
	}

	span[size="head"] {
		margin: 30px 0;
		font-size: var(--head-font-size);
	}
</style>
