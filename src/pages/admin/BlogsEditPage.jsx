import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BlogForm from '../../components/admin/blogs/BlogsForm';
import { fetchBlogBySlug, updateBlogPost } from '../../services/api';

const BlogEditPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const loadBlog = async () => {
      setIsFetching(true);
      setMessage({ type: '', text: '' });
      try {
        const response = await fetchBlogBySlug(slug);
        setInitialData(response.data.data);
      } catch (error) {
        console.error('Failed to fetch blog post:', error);
        setMessage({
          type: 'error',
          text: 'Failed to load blog for editing: ' + (error.response?.data?.message || error.message),
        });
        // navigate('/admin/blogs'); // Optionally redirect if blog not found
      } finally {
        setIsFetching(false);
      }
    };
    if (slug) {
      loadBlog();
    }
  }, [slug, navigate]);

  const handleUpdateBlog = async (formData) => {
    setIsLoading(true);
    setMessage({ type: '', text: '' });
    try {
      const response = await updateBlogPost(slug, formData);
      setMessage({ type: 'success', text: 'Blog post updated successfully!' });
      setInitialData(response.data.data); // Update initialData with the new data from response
      // Optionally, update the slug in the URL if it changed, though your backend uses slug from params
      if (response.data.data.slug !== slug) {
        navigate(`/admin/blogs/edit/${response.data.data.slug}`, { replace: true });
      }
    } catch (error) {
      console.error('Failed to update blog post:', error);
      setMessage({
        type: 'error',
        text: 'Failed to update blog post: ' + (error.response?.data?.message || error.message),
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) return <div className="text-center p-10">Loading blog data for editing...</div>;
  if (!initialData && !isFetching) { // If done fetching and still no initialData
    return (
      <div className="container mx-auto p-4 md:p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-6">Error</h1>
        <p className="text-gray-700">{message.text || "Could not load blog data."}</p>
        <Link to="/admin/blogs" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
          ← Back
        </Link>
      </div>
    );
  }


  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className='flex justify-between'>
          <Link to="/admin/blogs" className="text-white hover:text-blue-500 text-2xl transition duration-300"> ← Back</Link>
          <h1 className="text-3xl font-bold text-white mb-6">Edit Blog Post</h1>
        </div>
        {message.text && !isFetching && ( // Only show message if not fetching
          <div
            className={`p-3 mb-4 rounded-md text-white ${message.type === 'error' ? 'bg-red-500' : message.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
              }`}
          >
            {message.text}
          </div>
        )}
        {initialData && <BlogForm onSubmit={handleUpdateBlog} initialData={initialData} isLoading={isLoading} />}
      </div>
    </div>
  );
};

export default BlogEditPage;