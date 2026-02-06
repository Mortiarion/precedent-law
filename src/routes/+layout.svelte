<script lang="ts">
	import { onMount } from 'svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	

	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	let { children } = $props();

	onMount(() => {
		// При першому завантаженні скролимо на верх
		// if (window.location.hash) {
		// 	window.scrollTo(0, 0);
		// }
	});

	afterNavigate(() => {
		// При навігації без hash скролимо на верх
		// if (!window.location.hash) {
		// 	window.scrollTo(0, 0);
		// }
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<title>
		Precedent Law
	</title>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin='anonymous' />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex flex-col min-h-dvh font-roboto">
	<Header />
	
	{@render children()}
	
	<Footer />
</div>
