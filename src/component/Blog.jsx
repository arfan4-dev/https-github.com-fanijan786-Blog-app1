import React, { useContext } from 'react';
import { ContextProvider } from '../context/AppContext';
import Spinner from './Spinner';

const Blog = () => {
  const { posts, isLoading } = useContext(ContextProvider);

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="text-center text-gray-600 text-xl">No Posts</div>
      ) : (
        <div className="mx-auto"> {/* Center the content */}
          {posts.map((post) => (
            <div key={post.id} className="mb-6">
              <p className="text-2xl font-semibold">{post.title}</p>
              <p className="text-gray-600">
                By <span className="text-blue-500">{post.author}</span> on{' '}
                <span className="text-green-500">{post.category}</span>
              </p>
              <p className="text-gray-500">Posted on {post.date}</p>
              <p className="mt-4">{post.content}</p>
              <div className="mt-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm font-semibold mr-2 mt-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
