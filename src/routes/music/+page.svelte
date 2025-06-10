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
			<h1 class="mb-8 text-left text-4xl font-bold text-[#ff915e] sm:text-5xl">Music</h1>
		</header>

		<div class="my-8 flex justify-center">
			<a
				href="https://suno.com/@djlyrithm"
				target="_blank"
				class="music-findme relative inline-block animate-rainbow bg-gradient-to-r from-[#c01e64] via-[#ff915e] to-[#280b9b] bg-[length:300%_300%] bg-clip-text bg-[position:0%_50%] text-3xl font-bold text-transparent transition-all duration-300 ease-in-out"
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
					class="rounded-md border border-indigo-400 bg-indigo-900 px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
				class="mt-16 rounded-xl border border-pink-500/30 bg-black/40 px-6 py-8 text-center backdrop-blur-sm transition hover:border-pink-400/60 hover:shadow-[0_0_20px_#ff48a1]"
			>
				<h2 class="text-xl font-semibold text-pink-400">Doesn’t stop there.</h2>
				<p class="mt-2 text-sm text-gray-300">I’m generally up to no good. 😈😏</p>
				<a
					href="/social"
					class="mt-4 inline-block rounded-full border border-pink-400/50 px-4 py-2 text-sm font-semibold text-pink-300 transition hover:border-pink-500 hover:text-pink-200"
					>See what I’m up to</a
				>
			</section>
		</div>
	</div>
</section>
