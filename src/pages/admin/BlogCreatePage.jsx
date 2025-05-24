import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Editor from "../../components/admin/blogs/Editor";
import toast, { Toaster } from "react-hot-toast";
import { createBlogPost } from "../../services/api";

const cloudName = String(process.env.REACT_APP_CLOUD_NAME);
const uploadPreset = String(process.env.REACT_APP_UPLOAD_PRESET);
const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

const CreateBlogs = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbImage, setThumbImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);


  const handleCreateBlog = async () => {
    setError(null); // Clear previous errors on new submission attempt

    // --- Validation Checks ---
    if (!title.trim()) {
      setError("Blog title is required.");
      return; // Stop submission
    }

    if (!author.trim()) {
      setError("Blog Author is required.");
      return; // Stop submission
    }

    if (!thumbImage) {
      setError("Featured Image is required.");
      return; // Stop submission
    }

    // Validate content: Strip HTML tags and check if the remaining text is empty
    // Common empty states from TipTap can be just <p></p>, <p><br></p>, or just ""
    const plainTextContent = content.replace(/<[^>]*>/g, '').trim();
    if (plainTextContent === '') {
      setError("Blog content cannot be empty.");
      return; // Stop submission
    }
    // --- End Validation Checks ---


    const formData = new FormData()


    formData.append('title', title.trim())
    formData.append('content', content)
    formData.append('author', author.trim())
    formData.append('thumbImage', thumbImage)


    // {
    //   title: title.trim(), // Trim whitespace
    //   content: content, // Send the HTML content
    //   author: author.trim(), // Trim whitespace
    //   thumbImage: thumbImage, // Will be "" if not uploaded
    // }



    await createBlogPost(formData).then((res) => {
      if (res?.meta?.requestStatus === "fulfilled" || res?.data?.success) {
        // Clear form on success
        setTitle("");
        setContent(""); // Clear editor content
        setAuthor("");
        setThumbImage("");
        toast.success(res?.data?.message)
        navigate('/admin/blogs');
      } else {
        // Handle errors from your addBlog action (e.g., server-side validation failure)
        console.error("Failed to create blog:", res.payload);
        // Display server-side error message if available
        setError(res.payload?.message || "Failed to create blog. Please try again.");
      }
    });
  };

  return (
    // Added bg-white and adjusted padding slightly for better spacing
    <div className="w-full mt-5 p-6 bg-white !text-black rounded-lg shadow-md">
      <Toaster />
      <div className="max-w-3xl mx-auto">
        <div className="w-full flex justify-between ">
          <Link to="/admin/blogs" className="text-indigo-600 hover:text-indigo-700 font-semibold text-2xl">
            ← Back
          </Link>
          <h1 className="text-3xl font-semibold text-gray-800 mb-8 border-b pb-4">
            Create New Blog Post
          </h1>
        </div>

        {/* --- Error Display --- */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Validation Error: </strong> {/* Added bold prefix */}
            <span className="block sm:inline">{error}</span>
            {/* Optional: Close button for the alert */}
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg onClick={() => setError(null)} className="fill-current h-6 w-6 text-red-500 cursor-pointer" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15L6.305 6.849a1.2 1.2 0 0 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
          </div>
        )}
        {/* --- End Error Display --- */}

        <div className="space-y-6"> {/* Adjusted spacing slightly */}
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

          {/* Slug Input Field */}
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
              Author <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter Author name"
              required
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-4">

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setThumbImage(file);
                }}
                id="thumbImage"
              />

              {thumbImage && (
                <img 
                src={URL.createObjectURL(thumbImage)}
                 alt="Preview banner image for the blog" 
                className="w-[200px] "
                 />
              )}



            </div>
            {/* Display image upload error specifically if needed, or let the main error handle it */}
            {/* {error && error.startsWith('Error uploading featured image:') && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
             )} */}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content <span className="text-red-500">*</span>
            </label>
            {/* The Editor component already has max-w and mx-auto */}
            <Editor content={content} setContent={setContent} />
            {/* Display content validation error specifically if needed */}
            {/* {error && error.startsWith('Blog content cannot be empty.') && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
             )} */}
          </div>

          <button
            onClick={handleCreateBlog}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isUploading} // Disable button while uploading featured image
          >
            {isUploading ? 'Uploading Image...' : 'Create Blog'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogs;