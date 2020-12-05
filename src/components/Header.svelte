<script>
	import GameStore from "../store/runtime/gameStore";

	const goHome = () => GameStore.setMode(null);
	let active = false;

	$: {
		active = $GameStore.mode !== null;
    }
</script>

<header class:active={active}>
	<img class:active={active} width="32" height="32" src="./icons/back.svg" alt="close" on:click={goHome} />

	<h1>Zero.2</h1>

	<img width="32" height="32" src="./icons/back.svg" alt="close" on:click={goHome} />
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
