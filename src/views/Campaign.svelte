<script>
	import GameStore, {GAME_STATE} from "../store/runtime/gameStore";
	import LevelsList from "../components/campaign/LevelsList.svelte";
	import SimpleGame from "../components/game/SimpleGame.svelte";
	import router from "../store/runtime/router";
	import Separator from "../components/ui/Separator.svelte";
	import Button from "../components/ui/Button.svelte";
	import ViewContainer from "../components/containers/ViewContainer.svelte";

	const onLevel = ({detail}) => {
		router.navigate("level", {
			index: detail
		});
	};

	GameStore.setState(GAME_STATE.NONE);
</script>

<ViewContainer>
	<LevelsList on:click={onLevel} />
	<Separator />
	<Button size="medium" colorScheme="red" outline on:click={() => router.back()}>Back</Button>
</ViewContainer>
