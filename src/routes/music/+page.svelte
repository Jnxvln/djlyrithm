<script lang="ts">
	import SongCard from '$lib/components/SongCard.svelte';
	import { sortSongsByDateAscending, sortSongsByDateDescending } from '$lib/utils/sortSongs';
	import rawSongs from '$lib/data/songs.json';
	import type { Song } from '$lib/types/songs';

	let sortOrder: 'newest' | 'oldest' = 'newest';

	// Convert song's `datePublished` from ISO String to Date
	const parsedSongs: Song[] = rawSongs.map((song: Song) => ({
		...song,
		datePublished: new Date(song.datePublished)
	}));

	// Sort reactively
	$: songs =
		sortOrder === 'newest'
			? sortSongsByDateDescending(parsedSongs)
			: sortSongsByDateAscending(parsedSongs);
</script>

<section>
	<div class="page-content-container">
		<header>
			<h1
				class="mb-8 text-left text-4xl font-bold font-creepyHandwriting text-[#f8514b] sm:text-5xl"
			>
				Music
			</h1>
		</header>

		<div class="my-8 flex justify-center">
			<a
				href="https://suno.com/@djlyrithm"
				target="_blank"
				class="font-creepyHandwriting text-2xl relative inline-block bg-gradient-to-r from-[#f9d639] via-[#cf090f] to-[#5faa3c] bg-[length:300%_300%] bg-clip-text bg-[position:0%_50%] text-transparent transition-all duration-300 ease-in-out hover:animate-rainbow"
				rel="noopener noreferrer"
				aria-label="DJ Lyrithm on Suno"
			>
				🎵 Find me on Suno 🎵
			</a>
		</div>

		<div>
			<!-- Sort Selector -->
			<div class="mb-6 flex items-center justify-end gap-2">
				<label for="sort" class="text-sm font-medium text-white">Sort by:</label>
				<select
					id="sort"
					bind:value={sortOrder}
					class="rounded-md border border-[#dd5534] bg-[#45120a] px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#dd5534]"
				>
					<option value="newest">Newest</option>
					<option value="oldest">Oldest</option>
				</select>
			</div>

			<!-- Song Cards -->
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
				{#each songs as song (song.id)}
					<SongCard {song} />
				{/each}
			</div>

			<!-- Link to Social page -->
			<section
				class="border-bloodred hover:border-rusticred mt-16 rounded-xl border bg-black/40 px-6 py-8 text-center backdrop-blur-sm transition hover:shadow-[0_0_20px_#ff3c25]"
			>
				<h2 class="text-xl font-semibold text-[#dd5534]">Doesn&apos;t stop there.</h2>
				<p class="mt-2 text-sm text-gray-300">I&apos;m generally up to no good. 😈😏</p>
				<a
					href="/social"
					class="mt-4 inline-block rounded-full border border-[#ff3c25] px-4 py-2 text-sm font-semibold text-[#ffb39c] transition hover:border-[#ff3c25] hover:text-[#ffe1d6]"
					>See what I&apos;m up to</a
				>
			</section>
		</div>
	</div>
</section>
