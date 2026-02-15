<script lang="ts">
	import { page } from '$app/stores';

	import FooterLogoIcon from '$lib/icons/FooterLogoIcon.svelte';
</script>

<section class="bg-footer-img pt-12 pb-6">
	<div class="container">
		<div class="flex justify-center">
			<a href="/" title="На головну" aria-label="На головну">
				<FooterLogoIcon />
			</a>
		</div>

		<div class="flex justify-between text-white">

            {#if $page.url.pathname !== '/privacy-policy'}
                <a class="underline" title="Перейти" aria-label="Перейти" href="/privacy-policy">
                    Політика конфіденційності
                </a>
            {/if}

			<a
				class="underline"
				title="Перейти до Telegram"
				aria-label="Перейти до Telegram"
				href="https://t.me/anna_ryk"
			>
				Design by Anna Ryk
			</a>
		</div>
	</div>
</section>
