<script>
	export let fill = 0;
	export let max = 0;

	const fillPerc = (fill / max) * 100;
</script>

<span class="progress-label">Progress</span>
<div class="line">
	<div class="meter" style={`width: ${fillPerc}%;`}>
		{ #if fillPerc > 0 }
			<span class="progress">{Math.round(fillPerc)}%</span>
		{/if}
	</div>
</div>

<style>
	div.line {
		background-color: transparent;
		border: 2px solid var(--blue);
		border-radius: var(--border-radius);
		width: 100%;
		padding: 2px;

		height: 30px;
		z-index: -2;
	}

	div.meter {
		background-color: var(--green);
		border-radius: var(--border-radius);
		color: white;
		height: 100%;
		z-index: -1;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	span {
		font-size: var(--small-font-size);
	}

	span.progress-label {
		text-align: center;
		display: block;
		margin: 10px 0;
	}
</style>
