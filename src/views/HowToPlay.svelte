<script>
	import Separator from "../components/ui/Separator.svelte";
	import Button from "../components/ui/Button.svelte";
	import router from "../store/runtime/router";
</script>

<h2>How to play</h2>
<p>When you start playing, you will see two boards: <b>numbers</b> and <b>actions</b>.</p>
<p>The objective is <b>to make all the numbers be equal to 0</b> before you end all the <b>actions</b>.</p>
<p>In order to apply <b>action</b>, select (click) the <b>number</b> you want (<b>one or more</b>) and then click on the <b>action</b> you want to apply.</p>
<p>!You can unselect numbers</p>
<p>Good starting point is <b>Tutorial</b> section of the <b>campaign</b> or easy level of <b>Random</b> mode. Once you feel unbeatable, try <b>Time Throne</b>.</p>

<Separator />
<Button colorScheme="green" size="medium" on:click={() => router.back()} >Got it</Button>
