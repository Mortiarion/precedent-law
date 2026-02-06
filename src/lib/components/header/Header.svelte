<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	import Location from './components/Location.svelte';
	import Logo from './components/Logo.svelte';
	import NavigationMenu from './components/Navigation.svelte';
	import SocialMenuLink from './components/Social.svelte';
	import HeaderMobile from './components/HeaderMobile.svelte';

	let isLocation = $state(true);

	onMount(() => {
		const aboutUsSection = document.getElementById('about-us');

		if (aboutUsSection) {
			const observer = new IntersectionObserver(
				([entry]) => {
					isLocation = entry.isIntersecting;
				},
				{
					threshold: 0.2
				}
			);

			observer.observe(aboutUsSection);

			onDestroy(() => observer.disconnect());
		}
	});
</script>

<header class="bg-header-img sticky top-0 z-10 text-white">
	<div class="container pt-11 lg:pt-8">
		<HeaderMobile />

		<nav class="flex flex-col max-lg:hidden">
			<div class="flex items-center">
				<Logo />

				<NavigationMenu />

				<SocialMenuLink />
			</div>

			<hr class="color-5c524b mt-5 w-full" />

			{#if isLocation}
				<div transition:slide>
					<Location />
				</div>
			{/if}
		</nav>
	</div>
</header>
