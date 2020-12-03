<script>
	import GameStore from "../store/runtime/gameStore";

	const goHome = () => GameStore.setMode(null);
</script>

<header>
	<h1 class:active={$GameStore.mode !== null} on:click={goHome}>
		<img width="32" height="32" src="./icons/back.svg" alt="close" />
        Zero.2
    </h1>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

    h1 {
        display: flex;
        align-items: center;
        border-bottom: 2px solid transparent;
        transition: border-bottom-color var(--animation-speed) ease-in-out;
    }

    h1.active {
		border-bottom: 2px solid black;
        cursor: pointer;
    }

    img {
        width: 0;

        transition: all var(--animation-speed) ease-in-out;
        margin-right: 0;
    }

	h1.active > img {
		width: 32px;
		margin-right: 10px
    }
</style>
