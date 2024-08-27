/* eslint-disable react/prop-types */
import { useState } from 'react'

function CreatePost({ onAddPost, onClose }) {
  const [heading, setHeading] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (heading.trim() && content.trim()) {
      onAddPost({ heading, content })
      setHeading('')
      setContent('')
    }
  }

  return (
    <div className='bg-PrimaryDark fixed inset-0 z-50 flex items-center justify-center bg-opacity-50'>
      <div className='bg-SecondaryDark w-[90%] max-w-md rounded-lg p-6 shadow-lg'>
        <h2 className='text-PrimaryLight mb-4 text-2xl font-bold'>
          Create New Post
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='bg-SecondaryDark text-SecondaryLight mb-4 w-full rounded-xl border p-2'
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            placeholder='Post Heading'
          />
          <textarea
            className='bg-SecondaryDark text-SecondaryLight mb-4 w-full rounded-xl border p-2'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Post Content'
          />
          <div className='flex justify-end space-x-2'>
            <button
              type='button'
              onClick={onClose}
              className='text-PrimaryLight bg- rounded px-4 py-2'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='text-PrimaryLight rounded-xl bg-green-700 px-4 py-2 hover:bg-green-800'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
