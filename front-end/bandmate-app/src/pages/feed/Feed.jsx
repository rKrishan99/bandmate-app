import React from 'react'
import Post from '../../components/post/Post';

const Feed = () => {
  return (
    <div className='flex items-center flex-col bg-background '>
      <div className='w-full bg-slate-200 h-20 z-10'>
          <h1>fhjsfvjj </h1>
      </div>
      <div className='flex justify-center w-full mb-16 bg-gray-600'>
        <Post />
      </div>
    </div>
  )
}

export default Feed;