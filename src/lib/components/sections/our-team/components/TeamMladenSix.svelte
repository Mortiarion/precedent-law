<script lang="ts">
	import { fadeOnVisible } from '$lib';
	import ArrowRightIcon from '$lib/icons/ArrowRightIcon.svelte';
	import { fade, slide } from 'svelte/transition';

	let { toggleInfo, isShowInfo } = $props();
</script>

<div class="team-container">
	<picture class="max-w-full" use:fadeOnVisible>
		<source srcset="/img/our-team-six.webp" type="image/webp" />
		<img
			class="team-img"
			loading="lazy"
			width="510"
			height="596"
			src="/img/our-team-one.jpg"
			alt="Team six"
		/>
	</picture>

	<div class="color-292424 xl:w-1/2">
		<h6 class="team-title" use:fadeOnVisible>Младен Бардук</h6>

		<span class="team-subtitle" use:fadeOnVisible>Голова адвокатського об'єднання</span>

		<p class="our-team-p" use:fadeOnVisible>
			<span class="font-semibold">Професійний досвід:</span>
			<br class="hidden xl:block" />
			Младен Бардук веде адвокатську практику з 2009 року. До цього він працював у суді на різних посадах,
			що надало йому унікальний погляд на юридичні процеси зсередини. Його досвід у поєднанні з багаторічною
			практикою робить його надзвичайно цінним спеціалістом.
		</p>

		<div class="max-xl:hidden">
			<p class="our-team-p" use:fadeOnVisible>
				<span class="font-semibold">Спеціалізація:</span>
				<br />
				Младен спеціалізується у різних галузях права, що дозволяє йому ефективно вирішувати найрізноманітніші
				юридичні питання. Його всебічні знання і вміння охоплюють широкий спектр правових проблем, що
				робить його універсальним юристом.
			</p>

			<p class="our-team-p" use:fadeOnVisible>
				<span class="font-semibold">Особисті якості:</span>
				<br />
				Младен є душею команди та головою нашого адвокатського об'єднання. Його нестандартний підхід до
				вирішення різних питань виділяє його серед інших фахівців. Младен відзначається високим професіоналізмом,
				креативністю та здатністю знаходити унікальні рішення для складних ситуацій.
			</p>

			<p class="our-team-p" use:fadeOnVisible>
				<span class="font-semibold">Чому обрати Младена:</span>
				<br />
				Чому обрати Младена: Младен Бардук не лише є дуже хорошим спеціалістом, але й лідером, який веде
				свою команду до успіху. Його компетентність, нестандартне мислення та багаторічний досвід у правовій
				сфері гарантують, що клієнти отримують найкращу правову допомогу. З таким адвокатом ви можете
				бути впевнені в успішному вирішенні ваших правових питань.
			</p>
		</div>

		<div class="max-md:visible">
			{#if isShowInfo}
				<div transition:slide>
					<div class="flex flex-col" transition:fade>
						<p class="our-team-p" use:fadeOnVisible>
							<span class="font-semibold">Спеціалізація:</span>
							<br />
							Младен спеціалізується у різних галузях права, що дозволяє йому ефективно вирішувати найрізноманітніші
							юридичні питання. Його всебічні знання і вміння охоплюють широкий спектр правових проблем,
							що робить його універсальним юристом.
						</p>

						<p class="our-team-p" use:fadeOnVisible>
							<span class="font-semibold">Особисті якості:</span>
							<br />
							Младен є душею команди та головою нашого адвокатського об'єднання. Його нестандартний підхід
							до вирішення різних питань виділяє його серед інших фахівців. Младен відзначається високим
							професіоналізмом, креативністю та здатністю знаходити унікальні рішення для складних ситуацій.
						</p>

						<p class="our-team-p" use:fadeOnVisible>
							<span class="font-semibold">Чому обрати Младена:</span>
							<br />
							Чому обрати Младена: Младен Бардук не лише є дуже хорошим спеціалістом, але й лідером, який
							веде свою команду до успіху. Його компетентність, нестандартне мислення та багаторічний
							досвід у правовій сфері гарантують, що клієнти отримують найкращу правову допомогу. З таким
							адвокатом ви можете бути впевнені в успішному вирішенні ваших правових питань.
						</p>
					</div>
				</div>
			{/if}

			<button
				class="read-more-btn"
				onclick={toggleInfo}
				aria-label={isShowInfo ? 'Показати інформацію' : 'Сховати інформацію'}
				title={isShowInfo ? 'Показати інформацію' : 'Сховати інформацію'}
			>
				{#if isShowInfo}
					<span> Сховати </span>
				{:else}
					<span class="flex items-end color-7d7e7e">
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
