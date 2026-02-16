<script lang="ts">
	import { slide } from 'svelte/transition';

	import LocationIcon from '$lib/icons/LocationIcon.svelte';
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import GmailIcon from '$lib/icons/GmailIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import TelegramIcon from '$lib/icons/TelegramIcon.svelte';
	import TelephoneIcon from '$lib/icons/TelephoneIcon.svelte';
	import TiktokIcon from '$lib/icons/TiktokIcon.svelte';
	import ViberIcon from '$lib/icons/ViberIcon.svelte';
	import LogoIcon from '$lib/icons/LogoIcon.svelte';
	import { clickOutside } from '$lib/clickOutSide';
	
	let isBurger = $state(false);

	function toggleBurger() {
		isBurger = !isBurger;
	}
</script>

<nav class="relative flex flex-col lg:hidden" use:clickOutside={() => (isBurger = false)}>
	<button
		class="burger absolute top-7 left-0 flex h-6 w-7 cursor-pointer flex-col gap-1.5 z-10"
		aria-label={isBurger ? ' Сховати' : 'Показати'}
		title={isBurger ? ' Сховати' : 'Показати'}
		onclick={toggleBurger}
		class:is-open={isBurger}
	>
		<div class="line h-0.5 w-full rounded-full bg-white transition-transform duration-300"></div>
		<div class="line h-0.5 w-full rounded-full bg-white transition-transform duration-300"></div>
		<div class="line h-0.5 w-full rounded-full bg-white transition-transform duration-300"></div>
	</button>

	<a href="/" class="mb-5 flex justify-center" title="На головну" aria-label="На головну">
		<LogoIcon />
	</a>

	<hr class="color-5c524b w-full" />

	{#if isBurger}
		<div transition:slide>
			<ul class="my-8 flex flex-col gap-3 text-xl whitespace-nowrap">
				<li>
					<a
						href="/#about-us"
						class="border-b border-transparent transition-colors duration-500 hover:border-white"
						aria-label="Перейти до секції"
						title="Перейти до секції"
						onclick={() => (isBurger = false)}
					>
						Про нас
					</a>
				</li>

				<li>
					<a
						href="/#our-teame"
						class="border-b border-transparent transition-colors duration-500 hover:border-white"
						aria-label="Перейти до секції"
						title="Перейти до секції"
						onclick={() => (isBurger = false)}
					>
						Наші спеціалісти
					</a>
				</li>

				<li>
					<a
						href="/#our_services"
						class="border-b border-transparent transition-colors duration-500 hover:border-white"
						aria-label="Перейти до секції"
						title="Перейти до секції"
						onclick={() => (isBurger = false)}
					>
						Послуги
					</a>
				</li>
			</ul>

			<hr class="color-5c524b mb-6 hidden" />

			<div class="mb-8 flex gap-3">
				<i>
					<LocationIcon />
				</i>

				<div class="flex flex-col">
					<span class="color-cab18a text-sm md:text-base"> Місцезнаходження </span>

					<a
						class="font-source border-b border-transparent text-base font-semibold duration-500 hover:border-white md:text-3xl"
						target="_blank"
						title="Подивитись на мапі"
						aria-label="Подивитись на мапі"
						rel="noopener noreferrer"
						href="https://maps.app.goo.gl/ggpQcKQ3uoqvnwid9"
						onclick={() => (isBurger = false)}
					>
						м. Одеса, вул. Мала Арнаутська, 30
					</a>
				</div>
			</div>

			<ul class="mb-5 flex justify-center gap-2 sm:justify-start">
				<li>
					<a href="tel:+380930343344" title="Зателефонуйте нам" aria-label="Зателефонуйте нам" onclick={() => (isBurger = false)}>
						<TelephoneIcon />
					</a>
				</li>

				<li>
					<a href="https://t.me/Justitia_od" title="Ми в телеграм" aria-label="Ми в телеграм" onclick={() => (isBurger = false)}>
						<TelegramIcon />
					</a>
				</li>

				<li>
					<a
						href="viber://chat?number=%2B380930343344"
						title="Ми в вайбер"
						aria-label="Ми в вайбер"
						onclick={() => (isBurger = false)}
					>
						<ViberIcon />
					</a>
				</li>

				<li>
					<a href="mailto:precedent.prava@gmail.com" title="Напишіть нам" aria-label="Напишіть нам" onclick={() => (isBurger = false)}>
						<GmailIcon />
					</a>
				</li>

				<li>
					<a
						href="https://www.instagram.com/legal_precedent_/"
						title="Ми в інстаграм"
						aria-label="Ми в інстаграм"
						onclick={() => (isBurger = false)}
					>
						<InstagramIcon />
					</a>
				</li>

				<li>
					<a
						href="https://www.facebook.com/centrjurisprudence"
						title="Ми в фейсбук"
						aria-label="Ми в фейсбук"
						onclick={() => (isBurger = false)}
					>
						<FacebookIcon />
					</a>
				</li>

				<li>
					<a
						href="https://www.tiktok.com/@precedent.prava?_t=ZM-8zRVFDgzTsb&_r=1"
						title="Ми в тікток"
						aria-label="Ми в тікток"
						onclick={() => (isBurger = false)}
					>
						<TiktokIcon />
					</a>
				</li>
			</ul>
		</div>
	{/if}
</nav>

<style lang="postcss">
	.burger.is-open .line:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
	}

	.burger.is-open .line:nth-child(2) {
		opacity: 0;
	}

	.burger.is-open .line:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
	}
</style>
