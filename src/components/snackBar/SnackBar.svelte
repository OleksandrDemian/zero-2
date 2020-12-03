<script>
	import SnackBarStore from "../../store/runtime/snackBarStore";

	const onClose = () => SnackBarStore.shift();
</script>

{ #if $SnackBarStore.snacks.length > 0 }
	<div class="container">
		<div class="snack-bar">
			<div class="head">
				<span class="title">{$SnackBarStore.snacks[0].title}</span>
				<img class="close" src="/icons/close.svg" on:click={onClose} width="24" height="24" />
			</div>

			{#if $SnackBarStore.snacks[0].child}
				<svelte:component this={$SnackBarStore.snacks[0].child} />
			{:else}
				<span class="message">{$SnackBarStore.snacks[0].message}</span>
			{/if}
		</div>
	</div>
{ /if }

<style>
	@keyframes snack {
		from {
			transform: translateY(100%)
		}
		to {
			transform: translateY(0)
		}
	}

	@keyframes background {
		from {
			background-color: rgba(38, 70, 83, 0);
			backdrop-filter: blur(0);
		}
		to {
			background-color: rgba(38, 70, 83, 0.5);
			backdrop-filter: blur(4px);
		}
	}

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

		animation-name: background;
		animation-timing-function: ease-in-out;
		animation-duration: 0.3s;

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

		animation-name: snack;
		animation-timing-function: ease-in-out;
		animation-duration: 0.3s;
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
