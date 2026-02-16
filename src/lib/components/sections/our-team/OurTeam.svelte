<script lang="ts">
	import { fadeOnVisible } from "$lib/fadeOnVisible";
	import TeamDianaOne from "./components/TeamDianaOne.svelte";
	import TeamDmitroThree from "./components/TeamDmitroThree.svelte";
	import TeamLiliaFive from "./components/TeamLiliaFive.svelte";
	import TeamMladenSix from "./components/TeamMladenSix.svelte";
	import TeamVictorTwo from "./components/TeamVictorTwo.svelte";
</script>

<section id="our-teame">
	<div class="container xl:px-16 pt-20">
		<h3 class="main-title" use:fadeOnVisible>Наша команда</h3>

		<hr class="color-cccccc my-10" />

		<TeamDianaOne />

		<hr class="color-cccccc mb-10" />

		<TeamVictorTwo />

		<hr class="color-cccccc mb-10" />

		<TeamDmitroThree />

		<hr class="color-cccccc mb-10" />

		<TeamLiliaFive />

		<hr class="color-cccccc mb-10" />

		<TeamMladenSix />

		<hr class="color-cccccc mb-10" />
	</div>
</section>
