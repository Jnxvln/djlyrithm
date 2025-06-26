import type { Song } from '$lib/types/songs';

/**
 * Sort Songs by Date Ascending
 * @param songs The array of songs to be sorted
 * @returns The sorted array of songs in ascending order by date published
 */
export const sortSongsByDateAscending = (songs: Song[]): Song[] => {
	return songs.sort(
		(a, b) => new Date(a.datePublished).getTime() - new Date(b.datePublished).getTime()
	);
};

/**
 * Sort Songs by Date Descending
 * @param songs The array of songs to be sorted
	return songs.sort(
		(a, b) =>
			new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
	);
 */
export const sortSongsByDateDescending = (songs: Song[]): Song[] => {
	return songs.sort(
		(a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
	);
};
