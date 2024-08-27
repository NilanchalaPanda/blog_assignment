import { useState, useEffect } from 'react'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

function App() {
  const [posts, setPosts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || []
    setPosts(storedPosts)
  }, [])

  const addPost = (newPost) => {
    const updatedPosts = [newPost, ...posts]
    setPosts(updatedPosts)
    localStorage.setItem('posts', JSON.stringify(updatedPosts))
    setIsModalOpen(false)
  }

  const handleDeletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index)
    setPosts(updatedPosts)
    localStorage.setItem('posts', JSON.stringify(updatedPosts))
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='relative min-h-screen px-4 md:px-16'>
      <div className='absolute inset-0 h-full w-full bg-[radial-gradient(#979a9f66_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_90%,transparent_100%)]' />
      <div className='container relative flex flex-col items-center justify-center pt-5'>
        <h1 className='text-PrimaryLight text-center text-5xl font-bold md:text-6xl'>
          Welcome to PostIT
        </h1>

        <div className='mt-2 flex flex-col items-center gap-x-3 gap-y-2 md:flex-row md:gap-y-0'>
          <p className='text-SecondaryLight text-center text-xl font-medium opacity-80'>
            Want to add a new post?
          </p>
          <button
            onClick={openModal}
            className='text-PrimaryLight bg-SecondaryDark rounded-xl px-4 py-2 font-semibold'
          >
            Create Post
          </button>
        </div>

        <PostList posts={posts} onDeletePost={handleDeletePost} />
        {isModalOpen && <CreatePost onAddPost={addPost} onClose={closeModal} />}
      </div>

      <p className='fixed bottom-2 left-1/2 -translate-x-1/2 transform text-center text-white'>
        Made by{' '}
        <a href='https://www.linkedin.com/in/nilanchal-panda/' target='_blank'>
          Nilanchal
        </a>
      </p>
    </div>
  )
}

export default App
