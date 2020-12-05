<script>
	import router from "../store/runtime/router";

	const goBack = () => active && router.back();
	let active = false;

	$: {
		active = $router.current.to !== "";
    }
</script>

<header class:active={active}>
	<img class:active={active} width="32" height="32" src="./icons/back.svg" alt="close" on:click={goBack} />

	<h1>Zero.2</h1>

	<img width="32" height="32" src="./icons/back.svg" alt="close" />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

    img {
        cursor: pointer;
        opacity: 0;

		transition: opacity var(--animation-speed) ease-in-out;
    }

	img.active {
		opacity: 1;
    }
</style>
