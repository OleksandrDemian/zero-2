<script>
	import SnackBarStore from "../../store/runtime/snackBarStore";

	let snack = null;

	$: {
		snack = $SnackBarStore.snacks[0];
	}

	const onClose = () => SnackBarStore.shift();
	// const onBackgroundClick = (e) => {
	// 	if(snack){
	// 		if(e.target === e.currentTarget) {
	// 			if(snack.closeOnBackground === true){
	// 				onClose();
	// 			}
	// 		}
	// 	}
	// }
</script>

{ #if snack != null }
<!--	<div class="container" on:click={onBackgroundClick}>-->
	<div class="container">
		<div class="snack-bar">
			<div class="head">
				<span class="title">{snack.title}</span>
				<img class="close" src="/icons/close.svg" on:click={onClose} width="24" height="24" />
			</div>

			{#if snack.child}
				<svelte:component this={snack.child} />
			{:else if snack.message}
				<span class="message">{snack.message}</span>
			{/if}
		</div>
	</div>
{ /if }

<style>
    div.container {
        position: fixed;

		bottom: 0;
		top: 0;
		left: 0;
		right: 0;

		display: flex;
		flex-direction: column;
        align-items: center;
		justify-content: flex-end;

		background-color: rgba(38, 70, 83, 0.5);
		backdrop-filter: blur(4px);

		z-index: 100;
    }

    div.snack-bar {
		max-width: 500px;
		width: 100%;

		border-top-left-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
		background-color: var(--blue);
		color: var(--number-text-color);
		font-size: var(--board-item-font-size);

		padding: 20px 20px 45px 20px;
    }

	div.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}

    span.title {
		font-size: var(--big-font-size);
		display: block;
    }

    span.message {
		font-size: var(--medium-font-size);
    }

	img.close {
		cursor: pointer;
	}
</style>
