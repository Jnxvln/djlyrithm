<script lang="ts">
	import type { Song } from '$lib/types/songs';
	export let song: Song;
</script>

<!-- STYLE 1 -->
<a href={song.link} target="_blank">
	<div
		class="flex w-full max-w-sm flex-col overflow-hidden rounded-xl bg-white bg-opacity-5 p-4 shadow-lg backdrop-blur transition-transform hover:scale-105"
	>
		<img
			class="h-48 w-full rounded-md object-cover"
			src={song.image}
			alt={`Image for the song "${song.title}"`}
		/>

		<div class="mt-4 text-xl font-semibold text-white">{song.title}</div>
		<div class="text-sm text-indigo-300">Duration: {song.duration}</div>
		<div class="text-sm text-gray-500">
			Published: {new Date(song.datePublished).toLocaleDateString()}
		</div>

		<!-- Tags -->
		<div class="mt-3 flex flex-wrap gap-2">
			{#each song.tags as tag (tag)}
				<span
					class="rounded-full bg-indigo-800/40 px-3 py-1 text-xs text-indigo-100 backdrop-blur-sm"
				>
					{tag}
				</span>
			{/each}
		</div>
	</div>
</a>
