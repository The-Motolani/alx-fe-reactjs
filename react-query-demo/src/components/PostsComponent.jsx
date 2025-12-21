import {useQuery} from 'react-query'

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Error fetching posts')

  }
    return res.json()
}
export default function PostsComponent() {
    const {data: posts, error, isError, isLoading, isFetching, refetch} = useQuery('posts', fetchPosts,
    {
        staleTime: 1000 * 60,
        cacheTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    }
    );
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }

  return (
    <div>
     <button onClick={refetch}>Refresh Posts</button>
     {isFetching && <div>Updating...</div>}
     <ul>
        {posts.slice(0, 10).map(post => (
            <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </li>
        ))}
     </ul>
    </div>
  )
}