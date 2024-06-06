import React from 'react';
import Post from './Post';

interface FeedProps {
  posts: any[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  if (!posts.length) {
    return <div>Nothing to see here..</div>;
  }

  return (
    <div>
      {posts.map((post, index) => (
        <Post key={post.id+index} post={post} id={post.id} />
      ))}
    </div>
  );
};
export default Feed;
