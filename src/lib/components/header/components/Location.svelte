<script lang="ts">
	import LocationIcon from '$lib/icons/LocationIcon.svelte';
</script>

<hr class="color-5c524b mb-6 hidden" />

<div class="flex gap-3 mb-8 mt-5">
	<i>
		<LocationIcon />
	</i>

	<div class="flex flex-col gap-5 lg:gap-0 xl:gap-5">
		<span class="color-cab18a text-sm md:text-base"> 
			Місцезнаходження
		</span>

		<a
			class="font-source text-base font-semibold border-b border-transparent hover:border-white duration-500 md:text-3xl"
			target="_blank"
			title="Подивитись на мапі"
			aria-label="Подивитись на мапі"
			rel="noopener noreferrer"
			href="https://maps.app.goo.gl/ggpQcKQ3uoqvnwid9"
		>
			м. Одеса, вул. Мала Арнаутська, 30
		</a>
	</div>
</div>
