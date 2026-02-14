<script lang="ts">
	import { getCategories, getServicesByCategory } from '$lib/services';
	import Popup from './Popup.svelte';

	const categories = getCategories();
	let activeCategory = $state('Все');
	let showFilter = $state(false);
	// let popupVisibleProp = $state(false);
    let showModal = $state(false);

	function toggleFilter() {
		showFilter = !showFilter;
	}

	function selectCategory(category: string) {
		activeCategory = category;
		showFilter = false;
	}
</script>

<!-- Кнопка фільтра -->
<button
	onclick={toggleFilter}
	class="font-source mb-10 flex flex-row-reverse items-center justify-center gap-2.5 text-left text-sm font-semibold"
>
	{activeCategory}
	<svg
		class="transition-transform {showFilter ? 'rotate-180' : ''}"
		width="20"
		height="19"
		viewBox="0 0 20 19"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12 15.5H19M1 15.5H3M3 15.5C3 16.8807 4.11929 18 5.5 18C6.88071 18 8 16.8807 8 15.5C8 14.1193 6.88071 13 5.5 13C4.11929 13 3 14.1193 3 15.5ZM18 9.5H19M1 9.5H8M11 3.5H19M11 3.5C11 2.11929 9.88071 1 8.5 1C7.11929 1 6 2.11929 6 3.5C6 4.88071 7.11929 6 8.5 6C9.88071 6 11 4.88071 11 3.5ZM1 3.5H2M14.5 12C13.1193 12 12 10.8807 12 9.5C12 8.11929 13.1193 7 14.5 7C15.8807 7 17 8.11929 17 9.5C17 10.8807 15.8807 12 14.5 12Z"
			stroke="#CAB18A"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</button>

<!-- Список категорій -->
{#if showFilter}
	<div class="filter-buttons">
		{#each categories as category}
			<button
				class="filter-button {category === activeCategory ? 'active' : ''}"
				onclick={() => selectCategory(category)}
			>
				{category}
			</button>
		{/each}
	</div>
{/if}

<!-- Список послуг -->
<ul class="filter-list mb-20 flex flex-col gap-5">
	{#each getServicesByCategory(activeCategory) as item}
		<li class="service-item">
			<span class="font-roboto text-center text-sm font-normal">
				{item}
			</span>

			<button
				onclick={() => (showModal = true)}
				class="bg-button-our-services font-source hover:bg-opacity-90 rounded px-5 py-2.5 text-sm text-white transition-all active:scale-95"
			>
				Отримати консультацію
			</button>
		</li>
	{/each}
</ul>

<!-- Popup -->
<!-- {#if popupVisible} -->
	<Popup bind:showModal />
<!-- {/if} -->

<style lang="postcss">
	.filter-buttons {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 40px;
		margin-top: -30px;
	}

	.filter-button {
		cursor: pointer;
		transition: all 0.3s ease;
		text-align: left;
		padding: 12px 16px;
		border-radius: 8px;
		background: white;
		border: 1px solid #e4e4e4;
	}

	.filter-button:hover {
		background-color: #cab18a;
		color: white;
		transform: translateX(4px);
	}

	.filter-button.active {
		background-color: #e4e4e4;
		color: #292424;
		pointer-events: none;
		font-weight: 600;
	}

	.service-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		padding: 20px;
		background: white;
		box-shadow:
			28px 15px 13px rgba(138, 133, 133, 0.01),
			16px 8px 11px rgba(138, 133, 133, 0.05),
			7px 4px 8px rgba(138, 133, 133, 0.09),
			2px 1px 4px rgba(138, 133, 133, 0.1);
		border-radius: 10px;
		transition: transform 0.2s ease;
	}

	.service-item:active {
		transform: scale(0.98);
	}
</style>
