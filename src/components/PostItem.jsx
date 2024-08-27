/* eslint-disable react/prop-types */
function PostItem({ heading, content, onDelete }) {
  return (
    <div className='text-PrimaryLight bg-SecondaryDark relative rounded-2xl p-4 shadow-sm shadow-[#2d2d2e]'>
      <button
        className='absolute right-2 -top-0 text-2xl font-bold text-red-600'
        onClick={onDelete}
      >
        &times;
      </button>
      <h3 className='mb-2 text-2xl font-bold'>{heading}</h3>
      <p className='text-SecondaryLight font-semibold'>{content}</p>
    </div>
  )
}

export default PostItem
