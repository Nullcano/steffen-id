import { posts } from '$lib/api';

export async function load() {
	return {
		posts: await posts.filter(p => p.featured)
	};
}