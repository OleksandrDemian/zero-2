<script>
	import GameStore from "../store/runtime/gameStore";
	import DIFFICULTIES from "../data/difficultySettings";
	import TimeAttackGame from "../components/game/TimeAttackGame.svelte";

	GameStore.createRandomLevel(0, DIFFICULTIES.MEDIUM);
</script>

<TimeAttackGame />
