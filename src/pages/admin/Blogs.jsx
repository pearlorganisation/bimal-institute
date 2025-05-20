import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchBlogs, deleteBlogById } from '../../services/api';
import { FaPlus, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const loadBlogs = async (page = 1, limit = 10, search = '') => {
    setLoading(true);
    setError('');
    try {
      const response = await fetchBlogs(page, limit, search);
      setBlogs(response.data.data);
      setPagination(response.data.pagination);
    } catch (err) {
      setError('Failed to fetch blogs. ' + (err.response?.data?.message || err.message));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs(1, 10, searchTerm);
  }, [searchTerm]); // Reload on search term change

  const handleDelete = async (blogId, blogTitle) => {
    if (window.confirm(`Are you sure you want to delete the blog "${blogTitle}"? This action cannot be undone.`)) {
      try {
        await deleteBlogById(blogId);
        setBlogs(blogs.filter((blog) => blog._id !== blogId));
        // Potentially re-fetch or update pagination if on last item of a page
        alert('Blog deleted successfully');
      } catch (err) {
        alert('Failed to delete blog: ' + (err.response?.data?.message || err.message));
        console.error(err);
      }
    }
  };

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      loadBlogs(newPage, pagination.limit, searchTerm);
    }
  };

  if (loading && blogs.length === 0) return <div className="text-center p-10">Loading blogs...</div>;
  if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-white">Manage Blogs</h1>
        <Link
          to="/admin/blogs/create"
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-150 ease-in-out"
        >
          <FaPlus className="h-5 w-5 mr-2" />
          Create New Blog
        </Link>
      </div>

      {/* <div className="mb-6">
        <input
          type="text"
          placeholder="Search blogs by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full sm:w-1/2 md:w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div> */}

      {blogs.length === 0 && !loading ? (
        <div className="text-center py-10 text-gray-500">
          <p className="text-xl">No blogs found.</p>
          {searchTerm && <p>Try adjusting your search term.</p>}
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thumbnail
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Published At
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {blog.thumbImage?.secure_url ? (
                      <img src={blog.thumbImage.secure_url} alt={blog.title} className="h-12 w-20 object-cover rounded" />
                    ) : (
                      <div className="h-12 w-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">No Image</div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors">
                      {blog.title}
                    </div>
                    <div className="text-xs text-gray-500">{blog.slug}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {blog.author?.name || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    {/* <Link to={`/admin/blogs/view/${blog.slug}`} className="text-blue-600 hover:text-blue-800" title="View">
                      <FaEye className="h-5 w-5 inline" />
                    </Link> */}
                    <Link to={`/admin/blogs/edit/${blog.slug}`} className="text-indigo-600 hover:text-indigo-900" title="Edit">
                      <FaPencilAlt className="h-5 w-5 inline" />
                    </Link>
                    <button
                      onClick={() => handleDelete(blog._id, blog.title)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
                    >
                      <FaTrashAlt className="h-5 w-5 inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination Controls */}
      {pagination && blogs.length > 0 && (
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-white">
            Page {pagination.current_page} of {pagination.pages?.length}.
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handlePageChange(pagination.current_page - 1)}
              disabled={pagination.current_page === 1 || loading}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(pagination.current_page + 1)}
              disabled={pagination.current_page === pagination.pages?.length || loading}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;