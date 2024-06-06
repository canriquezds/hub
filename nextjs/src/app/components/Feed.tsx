import React from 'react';
import Post from './Post';

interface FeedProps {
  posts: any[];
  updatePosts: () => void;
}

const Feed: React.FC<FeedProps> = ({ posts, updatePosts }) => {
  if (!posts.length) {
    return <div>Nothing to see here..</div>;
  }

  return (
    <div>
      {posts.map((post, index) => (
        <Post
          key={post.id+index}
          post={post} id={post.id}
          updatePosts={updatePosts} 
        />
      ))}
    </div>
  );
};
export default Feed;
