import type { Song } from '$lib/types/songs';

/**
 * Sort Songs by Date Ascending
 * @param songs The array of songs to be sorted
 * @returns The sorted array of songs in ascending order by date published
 */
export const sortSongsByDateAscending = (songs: Song[]): Song[] => {
	return songs.sort((a, b) => a.datePublished.getTime() - b.datePublished.getTime());
};

/**
 * Sort Songs by Date Descending
 * @param songs The array of songs to be sorted
 * @returns The sorted array of songs in descending order by date published
 */
export const sortSongsByDateDescending = (songs: Song[]): Song[] => {
	return songs.sort((a, b) => b.datePublished.getTime() - a.datePublished.getTime());
};
