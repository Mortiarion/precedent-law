<script lang="ts">
	import { fadeOnVisible } from '$lib/fadeOnVisible';
	import ArrowRightIcon from '$lib/icons/ArrowRightIcon.svelte';
	import { fade, slide } from 'svelte/transition';

	let isShowInfo = $state(false)
	let teamDmitro: HTMLDivElement;
	
	function toggleInfo() {
		// Якщо інформація зараз показана (тобто ми її ховаємо)
		if (isShowInfo) {
			// Скролимо до початку цього компонента
			teamDmitro.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		isShowInfo = !isShowInfo;
	}
</script>

<div class="team-container" bind:this={teamDmitro}>
	<picture class="max-w-full" use:fadeOnVisible>
		<source srcset="/img/our-team-three.webp" type="image/webp" />
		<img
			class="team-img"
			loading="lazy"
			width="510"
			height="596"
			src="/img/our-team-three.jpg"
			alt="Team three"
		/>
	</picture>

	<div class="color-292424 xl:w-1/2">
		<h6 class="team-title" use:fadeOnVisible>
			Дмитро Попроцький
		</h6>

		<span class="team-subtitle" use:fadeOnVisible> 
			Адвокат 
		</span>

		<p class="our-team-p" use:fadeOnVisible>
			<span class="font-semibold">
				Професійний досвід:
			</span>

			<br class="hidden xl:block" />
			Дмитро Попроцький веде адвокатську практику з 2008 року. За цей час він здобув значний досвід у
			різних галузях права, зокрема у господарському, цивільному та сімейному праві.
		</p>

		<div class="hidden xl:block">
			<p class="our-team-p" use:fadeOnVisible>
				<span class="font-semibold">
					Спеціалізація:
				</span>

				<br />
				Дмитро спеціалізується на господарському та цивільному судових процесах, допомагаючи клієнтам
				ефективно вирішувати правові питання, пов'язані з бізнесом та особистими справами.
			</p>

			<p class="our-team-p" use:fadeOnVisible>
				<span class="font-semibold">
					Чому обрати Дмитра:
				</span>

				<br />
				Завдяки багаторічному досвіду та глибоким знанням, Дмитро Попроцький пропонує своїм клієнтам професійний
				підхід та надійну правову підтримку. Його компетентність і відповідальність гарантують успішне
				вирішення навіть найскладніших юридичних питань.
			</p>
		</div>

		<div class="xl:hidden">
			{#if isShowInfo}
				<div transition:slide>
					<div class="flex flex-col" transition:fade>
						<p class="our-team-p" use:fadeOnVisible>
							<span class="font-semibold">
								Спеціалізація:
							</span>

							Дмитро спеціалізується на господарському та цивільному судових процесах, допомагаючи клієнтам
							ефективно вирішувати правові питання, пов'язані з бізнесом та особистими справами.
						</p>

						<p class="our-team-p" use:fadeOnVisible>
							<span class="font-semibold">
								Чому обрати Дмитра:
							</span>
							
							Завдяки багаторічному досвіду та глибоким знанням, Дмитро Попроцький пропонує своїм клієнтам
							професійний підхід та надійну правову підтримку. Його компетентність і відповідальність
							гарантують успішне вирішення навіть найскладніших юридичних питань.
						</p>
					</div>
				</div>
			{/if}

			<button
				class="read-more-btn color-7d7e7e"
				onclick={toggleInfo}
				aria-label={isShowInfo ? 'Показати інформацію' : 'Сховати інформацію'}
				title={isShowInfo ? 'Показати інформацію' : 'Сховати інформацію'}
			>
				{#if isShowInfo}
					<span> Сховати </span>
				{:else}
					<span class="flex items-end">
						Читати далі

						<i>
							<ArrowRightIcon />
						</i>
					</span>
				{/if}
			</button>
		</div>
	</div>
</div>
