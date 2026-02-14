<script lang="ts">
	import CloseIcon from '$lib/icons/popup-icons/CloseIcon.svelte';
	import TelegramPopupIcon from '$lib/icons/popup-icons/TelegramPopupIcon.svelte';
	import ViberPopupIcon from '$lib/icons/popup-icons/ViberPopupIcon.svelte';

    let { showModal = $bindable() } = $props();

    // function togglePopup() {
	// 	popupVisibleProp = !popupVisibleProp;
	// }

	// $effect(() => {
	// 	document.body.classList.toggle('overflow-hidden', popupVisibleProp);
	// });

	// let popupVisible = $state(false);
    let dialog: HTMLDialogElement; // HTMLDialogElement

	$effect(() => {
		if (showModal) dialog.showModal();
	});
</script>

<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
	<div class="popup-overlay fixed inset-0 z-10 flex items-end">
		<div class="bs:pb-16 relative flex w-full flex-col items-center gap-8 bg-white p-8 pt-16 pb-32">
			<h4 class="max-w-115 text-center text-2xl">
				Оберіть зручний для вас спосіб, щоб зв'язатися з нашими фахівцями
			</h4>

			<div class="flex justify-center gap-5">
				<a href="viber://chat?number=%2B380930343344" title="Перейти до вайбер">
					<ViberPopupIcon />
				</a>

				<a href="https://t.me/+380930343344" title="Перейти до телеграм">
					<TelegramPopupIcon />
				</a>

				<button class="absolute top-5 right-8 cursor-pointer" 
                        aria-label="Закрити" 
                        title="Закрити"
                        onclick={() => dialog.close()}
                >
					<CloseIcon />
				</button>

			</div>
		</div>
	</div>
</dialog>

<!-- {#if popupVisibleProp}
	<div class="popup-overlay fixed inset-0 z-10 flex items-end">
		<div class="bs:pb-16 relative flex w-full flex-col items-center gap-8 bg-white p-8 pt-16 pb-32">
			<h4 class="max-w-115 text-center text-2xl">
				Оберіть зручний для вас спосіб, щоб зв'язатися з нашими фахівцями
			</h4>

			<div class="flex justify-center gap-5">
				<a href="viber://chat?number=%2B380930343344" title="Перейти до вайбер">
					<ViberPopupIcon />
				</a>

				<a href="https://t.me/+380930343344" title="Перейти до телеграм">
					<TelegramPopupIcon />
				</a>

				<button class="absolute top-5 right-8 cursor-pointer" 
                        aria-label="Закрити" 
                        title="Закрити"
                        onclick={(e) => e.target === e.currentTarget && close}
                >
					<CloseIcon />
				</button>
			</div>
		</div>
	</div>
{/if} -->
