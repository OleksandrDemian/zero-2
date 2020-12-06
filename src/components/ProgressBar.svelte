<script>
	export let fill;
	export let max;

	const fillPerc = (fill / (max-1)) * 100;
</script>

<div class="flex">
	{#each {length: max} as _, i}
		<div class="level" class:fill={fill > i}></div>
	{/each}

	<div class="line">
		<span class="meter" style={`width: ${fillPerc}%;`}></span>
	</div>
</div>

<style>
	div.flex {
		position: relative;

		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 15px 0;
	}

	div.line {
		position: absolute;
		background-color: var(--red);
		width: 100%;
		padding: 0 5px;

		height: 10px;
		z-index: -2;
	}

	span.meter {
		background-color: var(--green);
		display: block;
		height: 100%;
		z-index: -1;
	}

	div.level {
		height: 30px;
		width: 30px;
		border: 5px solid var(--red);
		background-color: var(--red);
		border-radius: var(--border-radius);
	}

	div.level.fill {
		background-color: var(--green);
		border: 5px solid var(--green);
	}
</style>
