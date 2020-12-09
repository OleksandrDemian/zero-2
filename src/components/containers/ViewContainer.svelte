<script>
	import {cubicOut} from "svelte/easing";

	const DURATION = 200;
	const OFFSET = 25;

	const anim = (node, {delay = 0, duration = DURATION, easing = cubicOut}) => {
		const style = getComputedStyle(node);
		const opacity = +style.opacity;

		return {
			delay,
			duration,
			easing,
			css: t =>
				'overflow: hidden;' +
				`opacity: ${t * opacity};` +
				`transform: translateX(${OFFSET - (t * OFFSET)}px);`
		};
	};

	const outAnim = (node, {delay = 0, duration = DURATION, easing = cubicOut}) => {
		const style = getComputedStyle(node);

		return {
			delay,
			duration,
			easing,
			css: t =>
					'overflow: hidden;' +
					'z-index: -1;' +
					`margin-bottom: -${style.height};` +
					`transform: translateX(${((t * OFFSET) - OFFSET)}px);` +
					`opacity: ${t};`
		};
	};
</script>

<!--<div view-container in:anim out:outAnim>-->
<div view-container>
	<slot></slot>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;

		max-width: 100%;
		overflow: hidden;
	}
</style>
