<script lang="ts">
	import '../app.css';

	import { getStores } from '$app/stores';
	import { derived } from 'svelte/store';

	const { page } = getStores();
	const current = derived(page, ($page) => $page.url.pathname);
	let { children } = $props();

	function linkClass(path: string, color: string) {
		return `${color} ${$current === path ? 'underline font-bold' : ''}`;
	}
</script>

<!-- <div class="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8"> -->
<div class="flex min-h-screen flex-col">
	<!-- Main content container -->
	<div class="main-content-container mx-auto w-full max-w-screen-lg flex-1 px-4 sm:px-6 lg:px-8">
		<header class="mb-6 px-4 sm:px-6 lg:px-8">
			<h1
				class="site-title relative mt-4 inline-block w-full bg-gradient-to-r from-[#c01e64] via-[#ff915e] to-[#280b9b] bg-clip-text text-center text-7xl font-bold text-transparent transition-all duration-300 ease-in-out hover:animate-rainbow"
			>
				DJ Lyrithm
			</h1>
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

	<!-- Footer -->
	<footer class="site-footer px-4 py-6 text-center text-sm text-gray-500">
		&copy; 2025-{new Date().getFullYear()} DJ Lyrithm. All rights reserved.
	</footer>
</div>
