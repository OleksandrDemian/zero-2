<script>
	import SnackBarStore from "../../store/runtime/snackBarStore";

	const onClose = () => SnackBarStore.shift();
</script>

{ #if $SnackBarStore.snacks.length > 0 }
	<div class="container">
		<div class="snack-bar">
			<div>
				<span class="title">{$SnackBarStore.snacks[0].title}</span>
				<span class="message">{$SnackBarStore.snacks[0].message}</span>
			</div>
			<div class="close" on:click={onClose}>
				<img src="/icons/close.svg" width="24" height="24" />
			</div>
		</div>
	</div>
{ /if }

<style>
    div.container {
        position: fixed;
        bottom: 0;

		width: 100%;
		display: flex;
		flex-direction: column;
        align-items: center;
    }

    div.snack-bar {
        display: flex;
        justify-content: space-between;

		max-width: 500px;
		width: 100%;

		border-top-left-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
		background-color: var(--red);
		color: var(--number-text-color);
		font-size: var(--board-item-font-size);

		padding: 10px;
		border: 5px solid white;
		border-bottom: 0;
    }

    span.title {
		font-size: 1em;
		display: block;
    }

    span.message {
		font-size: 0.75em;
    }

	div.close {
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		div.container {
			padding: 45px 45px 0;
		}
	}
</style>
