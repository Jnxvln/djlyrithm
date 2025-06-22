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

		<div class="mt-4 text-xl font-semibold text-[#ec7d3d]">{song.title}</div>
		<div class="text-sm text-[#909e4c]">Duration: {song.duration}</div>
		<div class="text-sm text-neutral-400">
			Published: {new Date(song.datePublished).toLocaleDateString()}
		</div>

		<!-- Tags -->
		<div class="mt-3 flex flex-wrap gap-2">
			{#each song.tags as tag (tag)}
				<span class="rounded-full bg-[#52241c] px-3 py-1 text-xs text-gray-300 backdrop-blur-sm">
					{tag}
				</span>
			{/each}
		</div>
	</div>
</a>
