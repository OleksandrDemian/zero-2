<script>
	import router from "../../store/runtime/router";

	const goBack = () => router.back();
	let title = "--";

	$: {
		title = router.getRoute($router.current.to).settings.header;
    }
</script>

<header>
	<h1 class="on-background-text">{title}</h1>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
