import React, { useMemo, useRef, useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { uploadContentImage } from '../../../services/api'; // Import the specific upload function

const BlogForm = ({ onSubmit, initialData = null, isLoading = false }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      title: '',
      content: '',
      metaTitle: '',
      metaDescription: '',
      // thumbImage will be handled by a separate state for file object
    },
  });

  const [thumbImageFile, setThumbImageFile] = useState(null);
  const [thumbImagePreview, setThumbImagePreview] = useState(initialData?.thumbImage?.url || null);
  const [formMessage, setFormMessage] = useState({ type: '', text: '' });

  const quillRef = useRef(null);

  useEffect(() => {
    if (initialData) {
      reset({ // Reset react-hook-form with initial data
        title: initialData.title || '',
        content: initialData.content || '',
        metaTitle: initialData.metaTitle || '',
        metaDescription: initialData.metaDescription || '',
      });
      setThumbImagePreview(initialData.thumbImage?.url || null);
      setThumbImageFile(null); // Clear file input if editing
    }
  }, [initialData, reset]);

  const handleThumbImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbImageFile(file);
      setThumbImagePreview(URL.createObjectURL(file));
    } else {
      setThumbImageFile(null);
      // If initialData had an image, keep showing it unless user explicitly removes/replaces
      setThumbImagePreview(initialData?.thumbImage?.url || null);
    }
  };

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file && quillRef.current) {
        const formData = new FormData();
        formData.append('image', file);
        setFormMessage({ type: 'info', text: 'Uploading content image...' });
        try {
          const res = await uploadContentImage(formData); // Use the new service function
          const imageUrl = res.data.imageUrl;
          const editor = quillRef.current.getEditor();
          const range = editor.getSelection(true);
          editor.insertEmbed(range.index, 'image', imageUrl);
          editor.setSelection(range.index + 1);
          setFormMessage({ type: 'success', text: 'Content image uploaded.' });
        } catch (error) {
          console.error('Error uploading content image:', error);
          setFormMessage({
            type: 'error',
            text: 'Content image upload failed: ' + (error.response?.data?.message || error.message),
          });
        }
      }
    };
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        ['link', 'image', 'video'], // 'image' will use our handler
        [{ align: [] }],
        ['blockquote', 'code-block'],
        ['clean'],
      ],
      handlers: {
        image: imageHandler,
      },
    },
    clipboard: {
      matchVisual: false,
    },
  }), []); // Empty dependency array means it's created once

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'indent',
    'link', 'image', 'video', 'align', 'blockquote', 'code-block',
  ];

  const handleFormSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    if (data.metaTitle) formData.append('metaTitle', data.metaTitle);
    if (data.metaDescription) formData.append('metaDescription', data.metaDescription);
    // Add other fields your backend expects from req.body

    if (thumbImageFile) {
      formData.append('thumbImage', thumbImageFile);
    } else if (initialData && !thumbImagePreview && initialData.thumbImage) {
      // This case could mean user wants to remove the image.
      // Your backend update logic needs to handle `thumbImage: null` or similar if you want to allow image removal without replacement.
      // For now, if no new file, backend might keep the old one. If you want to explicitly remove, send a special flag or handle null.
      // formData.append('removeThumbImage', 'true'); // Example
    }

    onSubmit(formData); // Pass FormData to parent submit handler
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 p-4 md:p-8 bg-white !text-black shadow-lg rounded-lg">
      {formMessage.text && (
        <div
          className={`p-3 rounded-md text-white ${
            formMessage.type === 'error' ? 'bg-red-500' : formMessage.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
          }`}
        >
          {formMessage.text}
        </div>
      )}

      <div>
        <label htmlFor="title" className="block text-base font-medium text-gray-700">
          Blog Title
        </label>
        <input
          type="text"
          id="title"
          {...register('title', { required: 'Title is required' })}
          className={`mt-1 block w-full px-3 py-2 border ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base`}
        />
        {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="thumbImage" className="block text-base font-medium text-gray-700">
          Banner Image (Thumbnail)
        </label>
        <input
          type="file"
          id="thumbImage"
          accept="image/*"
          onChange={handleThumbImageChange}
          className="mt-1 block w-full text-base text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-base file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
        {thumbImagePreview && (
          <div className="mt-2">
            <img src={thumbImagePreview} alt="Thumbnail Preview" className="h-40 w-auto object-cover rounded" />
          </div>
        )}
         {/* Add validation for thumbImage if required on create */}
      </div>

      <div>
        <label htmlFor="content" className="block text-base font-medium text-gray-700">
          Content
        </label>
        <Controller
          name="content"
          control={control}
          rules={{ required: 'Content is required' }}
          render={({ field }) => (
            <ReactQuill
              ref={quillRef}
              theme="snow"
              value={field.value}
              onChange={field.onChange}
              modules={modules}
              formats={formats}
              placeholder="Write your amazing blog content here..."
              className="mt-1" // Quill uses its own styling, bg-white for contrast if parent is dark
            //   style={{ minHeight: '300px' }} // Ensure editor has some height
            />
          )}
        />
         {/* ReactQuill has its own internal height, but you might need to style its container */}
        <div className="mt-12"> {/* Add margin top to avoid overlap with Quill's toolbar if it's fixed */}
            {errors.content && <p className="text-xs text-red-500">{errors.content.message}</p>}
        </div>
      </div>

      {/* Optional Meta Fields */}
      <div>
        <label htmlFor="metaTitle" className="block text-base font-medium text-gray-700">
          Slug
        </label>
        <input
          type="text"
          id="slug"
          {...register('slug', {required: 'Slug is required.'})}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
        />
      </div>



      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
      >
        {isLoading ? (initialData ? 'Updating...' : 'Creating...') : (initialData ? 'Update Blog Post' : 'Create Blog Post')}
      </button>
    </form>
  );
};

export default BlogForm;