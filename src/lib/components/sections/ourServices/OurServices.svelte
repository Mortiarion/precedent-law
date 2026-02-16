<script lang="ts">
	import { fadeOnVisible } from "$lib/fadeOnVisible";
	import OurServicesDesktop from "./component/OurServicesDesktop.svelte";
	import OurServicesMobile from "./component/OurServicesMobile.svelte";
</script>

<section id="our_services" >
	<div class="container mb-20">
		<h6 class="main-title mb-20" use:fadeOnVisible>
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
