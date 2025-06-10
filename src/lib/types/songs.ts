export interface Song {
	id: number;
	title: string;
	datePublished: Date | string;
	duration: string;
	image: string;
	tags: string[];
	link: string;
}
