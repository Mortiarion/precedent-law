<script lang="ts">
	import CloseIcon from '$lib/icons/popup-icons/CloseIcon.svelte';
	import TelegramPopupIcon from '$lib/icons/popup-icons/TelegramPopupIcon.svelte';
	import ViberPopupIcon from '$lib/icons/popup-icons/ViberPopupIcon.svelte';

    let { showModal = $bindable() } = $props();

    let dialog: HTMLDialogElement | undefined = $state();
    
	$effect(() => {
        if (showModal) dialog?.showModal();
        	document.body.classList.toggle('overflow-hidden', showModal);
	});
</script>

<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
	<div class=" fixed bottom-0 left-0 right-0 z-10 flex items-end font-source font-semibold">
		<div class=" relative flex w-full flex-col items-center gap-8 bg-white p-8 py-16">
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
                        onclick={() => dialog?.close()}
                >
					<CloseIcon />
				</button>

			</div>
		</div>
	</div>
</dialog>

<style lang='postcss'>
	dialog::backdrop {
		background: #49331275;
	}
	
	dialog[open] {
		animation: fade 0.2s ease-out;
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
