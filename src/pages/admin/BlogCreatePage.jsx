import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';

import { createBlogPost } from '../../services/api';
import BlogForm from '../../components/admin/blogs/BlogsForm';

const BlogCreatePage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleCreateBlog = async (formData) => {
    setIsLoading(true);
    setMessage({ type: '', text: '' });
    try {
      const response = await createBlogPost(formData);
      setMessage({ type: 'success', text: 'Blog post created successfully!' });
      setTimeout(() => navigate(`/admin/blogs/edit/${response.data.data.slug}`), 1500); // Navigate to edit page of new blog
    } catch (error) {
      console.error('Failed to create blog post:', error);
      setMessage({
        type: 'error',
        text: 'Failed to create blog post: ' + (error.response?.data?.message || error.message),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      
      <div className="max-w-3xl mx-auto">
        <div className='flex justify-between'>
                  <Link to="/admin/blogs" className="text-white hover:text-blue-500 text-2xl transition duration-300"> ← Back</Link>
                  <h1 className="text-3xl font-bold text-white mb-6">Create Blog Post</h1>
                </div>
        {message.text && (
          <div
            className={`p-3 mb-4 rounded-md text-white ${
              message.type === 'error' ? 'bg-red-500' : 'bg-green-500'
            }`}
          >
            {message.text}
          </div>
        )}
        <BlogForm onSubmit={handleCreateBlog} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default BlogCreatePage;