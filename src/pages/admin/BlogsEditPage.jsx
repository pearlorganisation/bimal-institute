import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Editor from "../../components/admin/blogs/Editor"; // Assuming this path is correct
import toast, { Toaster } from "react-hot-toast";
import { fetchBlogBySlug, updateBlogPost } from "../../services/api"; // Make sure these exist


const EditBlog = () => {
  const navigate = useNavigate();
  const { slug } = useParams(); // Get slug from URL

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  const [thumbImage, setThumbImage] = useState(null);
  const [initialThumbImageUrl, setInitialThumbImageUrl] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      toast.error("No blog slug provided.");
      navigate('/admin/blogs');
      return;
    }

    const loadBlog = async () => {
      setIsFetching(true);
      setError(null);
      try {
        const response = await fetchBlogBySlug(slug);
        if (response?.data?.data) {
          const blogData = response.data.data;
          setTitle(blogData.title || "");
          // setAuthor(blogData.author || "");
          setContent(blogData.content || "");
          if (blogData.thumbImage) {
            setThumbImage(blogData.thumbImage?.secure_url); // This will be a URL string initially
            setInitialThumbImageUrl(blogData.thumbImage?.secure_url);
          }
        } else {
          throw new Error(response?.data?.message || "Blog data not found or invalid response.");
        }
      } catch (err) {
        console.error('Failed to fetch blog post:', err);
        setError('Failed to load blog for editing: ' + (err.response?.data?.message || err.message));
        toast.error('Failed to load blog data.');
        // Optional: navigate back if critical error
        // navigate('/admin/blogs');
      } finally {
        setIsFetching(false);
      }
    };

    loadBlog();
  }, [slug, navigate]);

  const handleUpdateBlog = async () => {
    setError(null);

    // --- Validation Checks ---
    if (!title.trim()) {
      setError("Blog title is required.");
      return;
    }
    // if (!author.trim()) {
    //   setError("Blog Author is required.");
    //   return;
    // }
    if (!thumbImage) { // Can be a URL (string) or a File object
      setError("Featured Image is required.");
      return;
    }
    const plainTextContent = content.replace(/<[^>]*>/g, '').trim();
    if (plainTextContent === '') {
      setError("Blog content cannot be empty.");
      return;
    }
    // --- End Validation Checks ---

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('title', title.trim());
    formData.append('content', content);
    // formData.append('author', author.trim());

    if (thumbImage && typeof thumbImage !== 'string') {
      formData.append('thumbImage', thumbImage);
    }
    try {
      const res = await updateBlogPost(slug, formData);
      if (res?.meta?.requestStatus === "fulfilled" || res?.data?.success) {
        toast.success(res?.data?.message || "Blog post updated successfully!");
        navigate('/admin/blogs'); // Or to the updated blog's view page
      } else {
        const errorMessage = res?.payload?.message || res?.data?.message || "Failed to update blog. Please try again.";
        // console.error("Failed to update blog:", res);
        // setError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (err) {
      // console.error("Error updating blog:", err);
      const errorMessage = err.response?.data?.message || err.message || "An unexpected error occurred.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbImage(file); // Set to File object for new upload
      setError(null); // Clear image-related errors
    }
  };

  if (isFetching) {
    return (
      <div className="w-full mt-5 p-6 bg-white !text-black rounded-lg shadow-md text-center">
        <p className="text-xl">Loading blog data...</p>
      </div>
    );
  }

  return (
    <div className="w-full mt-5 p-6 bg-white !text-black rounded-lg shadow-md">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-3xl mx-auto">
        <div className="w-full flex justify-between items-center mb-8">
          <Link to="/admin/blogs" className="text-indigo-600 hover:text-indigo-700 font-semibold text-lg md:text-2xl">
            ← Back to Blogs
          </Link>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 border-b pb-2">
            Edit Blog Post
          </h1>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg onClick={() => setError(null)} className="fill-current h-6 w-6 text-red-500 cursor-pointer" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15L6.305 6.849a1.2 1.2 0 0 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label htmlFor="blogTitle" className="block text-sm font-medium text-gray-700 mb-2">
              Blog Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="blogTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter blog title"
              required
            />
          </div>

      

          <div>
            <label htmlFor="thumbImageFile" className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col items-start sm:items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                id="thumbImageFile" // Changed id to avoid conflict if other inputs used 'thumbImage'
                className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
              {thumbImage && (
                <div className="mt-2 sm:mt-0">
                  <img
                    src={typeof thumbImage === 'string' ? thumbImage : URL.createObjectURL(thumbImage)}
                    alt="Current or new featured"
                    className="w-full h-auto object-cover rounded-md border"
                  />
                  {typeof thumbImage !== 'string' && (
                    <p className="text-xs text-gray-500 mt-1">New image selected. Click "Update Blog" to save.</p>
                  )}
                  {typeof thumbImage === 'string' && thumbImage === initialThumbImageUrl && (
                    <p className="text-xs text-gray-500 mt-1">Current image. Select a new file to change.</p>
                  )}
                </div>
              )}
            </div>
            {!thumbImage && initialThumbImageUrl && (
              <p className="text-xs text-yellow-600 mt-1">
                Featured image was previously set. If you want to remove it, your backend might need a specific way to handle this (e.g., an explicit "remove image" checkbox or a null value for image).
              </p>
            )}
            {!thumbImage && !initialThumbImageUrl && (
              <p className="text-xs text-gray-500 mt-1">No image selected. An image is required.</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content <span className="text-red-500">*</span>
            </label>
            <Editor content={content} setContent={setContent} />
          </div>

          <button
            onClick={handleUpdateBlog}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting || isFetching}
          >
            {isSubmitting ? 'Updating...' : 'Update Blog'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;