import React, {useEffect, useState, useRef} from "react";
import { usePost } from '../components/hooks/usePosts';

import { MyModal } from '../components/MyModal/MyModal';
import { PostFilter } from "../components/PostFilter";
import { PostForm } from "../components/PostForm";
import { PostList} from "../components/PostList";
import { MyButton } from "../components/UI/button/MyButton";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../components/hooks/useFetching";
import { getPageCount} from "../components/utils/pages";
import { Pagination } from "../components/pagination/Pagitanion";
import { useObserver } from "../components/hooks/useObserver";



function Posts () {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({sort:'', query: ''})
	const [modal, setModal] = useState(false)
	const sortedAndSearchPosts = usePost(posts, filter.sort, filter.query);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] =useState(1)
	const lastElement = useRef()


	
	const [fetchPosts, isPostLoading, postError] = useFetching( async (limit, page) => {
		const response = await PostService.getAll(limit, page)
		setPosts([...posts, ...response.data])
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	useObserver(lastElement, page < totalPages, isPostLoading, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		fetchPosts(limit, page)
	}, [page])

	const createPost = (newPost) => {
		setPosts([...posts, newPost]) 
		setModal(false)
	}

	const removePost = (post) => {
		setPosts(posts.filter(item => item.id !== post.id))
	}

	const changePage = (page) => {
		setPage(page)
		
	}

	return (
		<div className="App">
			<button onClick={fetchPosts} > Get Post</button>
			<MyButton style={{marginTop: 30}} onClick={() => setModal(true) }>
				Создать пост
			</MyButton>
		<MyModal 
		visible= {modal}
		setVesible={setModal}
		>
		<PostForm create={createPost} />
		</MyModal>
	
	<hr style={{margin: '15px 0' }}/>
	<PostFilter
	filter={filter}
	setFilter={setFilter}
	/>
	{postError &&
		<h1> Произошла ошибка ${postError}</h1>
	}
	<PostList
	remove={removePost}
	posts={sortedAndSearchPosts} 
	title='Posts about JS'/>
	<div ref={lastElement} style={{height: 20, background: 'red'}}/>
	{isPostLoading &&
	<div style={{
		display:'flex',
		justifyContent:'center',
		marginTop: 50
	}}><Loader/></div>
	}
	<Pagination
	page={page}
	changePage={changePage}
	totalPages={totalPages}
	/>
		</div>
	);
}

export default Posts;
 