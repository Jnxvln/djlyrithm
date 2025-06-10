<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';
	import { getStores } from '$app/stores';
	import { derived, writable } from 'svelte/store';

	const starting_year = 2025;

	const showButton = writable(false);

	const { page } = getStores();
	const current = derived(page, ($page) => $page.url.pathname);
	let { children } = $props();

	function linkClass(path: string, color: string) {
		return `${color} ${$current === path ? 'underline font-bold' : ''}`;
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		const onScroll = () => {
			showButton.set(window.scrollY > 200);
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<!-- <div class="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8"> -->
<div class="flex min-h-screen flex-col">
	<!-- Main content container -->
	<div
		class="main-content-container mx-auto w-full max-w-screen-lg flex-1 px-4 pt-8 sm:px-6 lg:px-8"
	>
		<header class="mb-6 px-4 sm:px-6 lg:px-8">
			<a href="/">
				<h1
					class="site-title relative mb-4 animate-rainbow bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-[length:300%_300%] bg-clip-text bg-[position:0%_50%] text-center text-7xl font-bold text-transparent transition-all duration-300 ease-in-out"
				>
					DJ Lyrithm
				</h1>
			</a>
			<nav class="mt-4">
				<ul class="flex flex-wrap justify-center gap-4 text-base sm:text-lg md:text-xl">
					<li>
						<a
							href="/"
							class={linkClass(
								'/',
								'text-[#af93fd] transition-colors duration-150 ease-in-out hover:text-[#8d63ff]'
							)}>Home</a
						>
					</li>
					<li>
						<a
							href="/about"
							class={linkClass(
								'/about',
								'text-[#ff48a1] transition-colors duration-150 ease-in-out hover:text-[#ff9cbf]'
							)}>About</a
						>
					</li>
					<li>
						<a
							href="/music"
							class={linkClass(
								'/music',
								'text-[#ff915e] transition-colors duration-150 ease-in-out hover:text-[#ffb27e]'
							)}
						>
							Music
						</a>
					</li>
					<li>
						<a
							href="/social"
							class={linkClass(
								'/social',
								'text-[#beda90] transition-colors duration-150 ease-in-out hover:text-[#f3ffc4]'
							)}>Social</a
						>
					</li>
				</ul>
			</nav>

			<!-- Custom divider -->
			<div
				class="my-6 h-px w-full bg-gradient-to-r from-transparent via-indigo-600 to-transparent"
			></div>
		</header>

		{@render children()}
	</div>

	<footer
		class="mx-auto flex w-full max-w-screen-lg justify-center bg-black p-4 py-6 text-center text-xs text-gray-500 opacity-50 transition hover:opacity-80"
	>
		&copy; {new Date().getFullYear() === starting_year
			? ''
			: `${starting_year}-`}{new Date().getFullYear()} DJ Lyrithm. All rights reserved.
	</footer>

	{#if $showButton}
		<button
			onclick={scrollToTop}
			class="fixed bottom-6 right-6 z-50 rounded-full border border-pink-500/40 bg-black/60 px-4 py-2 text-sm font-semibold text-pink-300 backdrop-blur-sm transition hover:border-pink-400 hover:text-pink-100 md:hidden"
		>
			↑ Top
		</button>
	{/if}
</div>
