<script>
	import router from "../store/runtime/router";

	let route = null;

	$: {
		route = $router.routes[$router.current.to];
	}
</script>

<svelte:component this={route} {...$router.current.props} />
