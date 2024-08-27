/* eslint-disable react/prop-types */
import PostItem from './PostItem'

function PostList({ posts, onDeletePost }) {
  return (
    <div className='mt-6 flex w-full flex-col items-center justify-center'>
      {posts.length !== 0 ? (
        <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {posts.map((post, index) => (
            <PostItem
              key={index}
              heading={post.heading}
              content={post.content}
              onDelete={() => onDeletePost(index)}
            />
          ))}
        </div>
      ) : (
        <div className='flex w-[90%] flex-col items-center justify-center'>
          <img src='/Items.png' alt='Empty Items' className='mb-4' />
        </div>
      )}
    </div>
  )
}

export default PostList
