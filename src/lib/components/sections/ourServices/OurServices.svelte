<script lang="ts">
	import { fadeOnVisible } from "$lib";
	import OurServicesDesktop from "./component/OurServicesDesktop.svelte";
	import OurServicesMobile from "./component/OurServicesMobile.svelte";
</script>

<section id="our_services" >
	<div class="container">
		<h6 class="main-title mb-24" use:fadeOnVisible>
			Наші послуги
		</h6>

		<div class="hidden lg:block">
			<OurServicesDesktop />
		</div>

		<div class="lg:hidden">
			<OurServicesMobile />
		</div>
	</div>
</section>
