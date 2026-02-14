<script lang="ts">
	import { getCategories, getServicesByCategory } from '$lib/services';
	import Popup from './Popup.svelte';
    

	const categories = getCategories();
	let activeCategory = $state('Все');
	// let popupVisible = $state(false);
    let showModal = $state(false);

	// function togglePopup() {
	// 	popupVisible = !popupVisible;
	// }

	// $effect(() => {
	// 	document.body.classList.toggle('overflow-hidden', popupVisible);
	// });
</script>

<div class="mb-20 flex flex-wrap justify-center px-25">
	{#each categories as category}
		<button
			onclick={() => (activeCategory = category)}
			class="filter-button {category === activeCategory ? 'active' : ''}"
		>
			{category}
		</button>
	{/each}
</div>

<ul class="filter-list flex flex-col gap-10">
	{#each getServicesByCategory(activeCategory) as item}
		<li class="filter-list-item p-5">
			{item}

			<button
				onclick={() => (showModal = true)}
				class="bg-button-our-services cursor-pointer rounded px-5 py-2.5 text-xl whitespace-nowrap text-white"
			>
				Отримати консультацію
			</button>
		</li>
	{/each}
</ul>

<Popup bind:showModal/>

<style lang="postcss">
	.subcategories {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
	.filter-button {
		padding: 0.5rem 1rem;
		font-size: 20px;
		margin-bottom: 10px;
		border: 1px solid #e4e4e4;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}
	.filter-button:hover {
		background-color: #cab18a;
	}
	.filter-button.active {
		background-color: #e4e4e4;
		color: #292424;
		pointer-events: none;
	}
	.filter-list-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		box-shadow:
			28px 15px 13px rgba(138, 133, 133, 0.01),
			16px 8px 11px rgba(138, 133, 133, 0.05),
			7px 4px 8px rgba(138, 133, 133, 0.09),
			2px 1px 4px rgba(138, 133, 133, 0.1);
		border-radius: 20px;
	}
</style>