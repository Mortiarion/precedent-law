<script lang="ts">
	import { page } from '$app/state';
	import { slide } from 'svelte/transition';

	import Location from './components/Location.svelte';
	import NavigationMenu from './components/Navigation.svelte';
	import SocialMenuLink from './components/Social.svelte';
	import HeaderMobile from './components/HeaderMobile.svelte';
	import LogoIcon from '$lib/icons/LogoIcon.svelte';

	let isLocation = $state<boolean | null>(null);

	$effect(() => {
		page.url; // тригер на зміну сторінки

		let observer: IntersectionObserver | null = null;

		queueMicrotask(() => {
			const target =
				document.getElementById('about-us-title') ||
				document.getElementById('privacy-policy-title');

			if (!target) {
				isLocation = false;
				return;
			}

			observer = new IntersectionObserver(
				([entry]) => {
					isLocation = entry.isIntersecting;
				},
				{ threshold: 0.1 }
			);

			observer.observe(target);
		});

		return () => {
			observer?.disconnect();
		};
	});
</script>

<header class="bg-header-img sticky top-0 z-10 text-white">
	<div class="container pt-11 lg:px-20 lg:pt-8">
		<HeaderMobile />

		<nav class="flex flex-col max-lg:hidden">
			<div class="flex items-center">
				<a href="/" title="На головну" aria-label="На головну">
					<LogoIcon />
				</a>

				<NavigationMenu />

				<SocialMenuLink />
			</div>

			<hr class="color-5c524b mt-5 w-full" />

			{#if isLocation === true}
				<div transition:slide>
					<Location />
				</div>
			{/if}
		</nav>
	</div>
</header>
