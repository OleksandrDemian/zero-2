<script>
	import router from "../../store/runtime/router";

	let route = null;

	$: {
		route = $router.routes[$router.current.to].component;
	}
</script>

<svelte:component this={route} {...$router.current.props} />
