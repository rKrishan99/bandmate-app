import React from 'react';
import Post from '../../components/post/Post';

const Feed = () => {
  return (
    <div className="flex flex-col items-center bg-background min-h-screen">
      {/* Header section with responsive padding and center alignment */}
      <div className="w-full bg-slate-200 h-20 flex items-center justify-center">
        <h1 className="text-xl sm:text-2xl font-bold text-center">Feed Header</h1>
      </div>

      {/* Post section with responsive width and margin */}
      <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8 mt-4 mb-4">
        <Post />
      </div>
    </div>
  );
}

export default Feed;
