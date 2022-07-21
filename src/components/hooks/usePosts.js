import {useMemo} from 'react';


export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(() => {
		console.log('###Отработала фукнкция Sorted Posts')
		if(sort) {
			return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
		}
			return posts;
	}, [sort, posts ])
return sortedPosts;
}

export const usePost = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort)
	
	const sortedAndSearchPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
	}, [query, sortedPosts ])

	return sortedAndSearchPosts
}