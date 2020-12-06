<script>
	import GameStore, {GAME_STATE} from "../store/runtime/gameStore";
	import LevelsList from "../components/levels/LevelsList.svelte";
	import SimpleGame from "../components/game/SimpleGame.svelte";
	import router from "../store/runtime/router";
	import Separator from "../components/ui/Separator.svelte";
	import Button from "../components/ui/Button.svelte";

	const onLevel = ({detail}) => {
		router.navigate("level", {
			index: detail
		});
	};

	GameStore.setState(GAME_STATE.NONE);
	GameStore.resetLevelIndex();
</script>

<LevelsList on:click={onLevel} />
<Separator />
<Button size="medium" colorScheme="red" outline on:click={() => router.back()}>Go back</Button>
