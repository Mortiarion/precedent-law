<script lang="ts">
	import { page } from '$app/stores';
	
	import { fadeOnVisible } from '$lib/fadeOnVisible';
	import FooterLogoIcon from '$lib/icons/FooterLogoIcon.svelte';
	import LogoIcon from '$lib/icons/LogoIcon.svelte';
</script>

<section class="bg-footer-img pt-12 pb-6">
	<div class="container">
		<div class="flex justify-center">
			<a
				href="/"
				title="На головну"
				aria-label="На головну"
				use:fadeOnVisible
				class="mb-12 hidden md:block"
			>
				<FooterLogoIcon />
			</a>

			<a
				href="/"
				title="На головну"
				aria-label="На головну"
				use:fadeOnVisible
				class="mb-5 md:hidden"
			>
				<LogoIcon />
			</a>
		</div>

		<div
			class="flex flex-col gap-2.5 text-center text-sm text-white md:flex-row md:justify-between"
		>
			{#if $page.url.pathname !== '/privacy-policy'}
				<a
					class="underline"
					title="Перейти"
					aria-label="Перейти"
					href="/privacy-policy"
					use:fadeOnVisible
				>
					Політика конфіденційності
				</a>
			{/if}

			<a
				class="color-cccccc underline"
				title="Перейти до Telegram"
				aria-label="Перейти до Telegram"
				href="https://t.me/anna_ryk"
				use:fadeOnVisible
			>
				Design by Anna Ryk
			</a>
		</div>
	</div>
</section>
