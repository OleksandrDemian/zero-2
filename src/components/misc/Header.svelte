<script>
	import router from "../../store/runtime/router";

	const goBack = () => active && router.back();
	let active = false;

	$: {
		active = router.getRoute($router.current.to).settings.showBack === true;
    }
</script>

<header class:active={active}>
	<img class:active={active} width="32" height="32" src="./icons/back.svg" alt="close" on:click={goBack} />

	<h1 class="on-background-text">Zero.2</h1>

	<img width="32" height="32" src="./icons/back.svg" alt="close" />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: center;
	}

    img {
        cursor: pointer;
        width: 0;
		margin-right: 0;

		transition: all var(--animation-speed) ease-in-out;
    }

	img.active {
		width: 32px;
		margin-right: 15px;
    }
</style>
