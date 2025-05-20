import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8001/api/v1'; // Fallback if env var not set

const apiClient = axios.create({
  baseURL: API_URL,
});

// Function to get the token (replace with your actual token retrieval logic)
const getAuthToken = () => {
  return localStorage.getItem('bimalInsTkn'); // Example: token stored in localStorage
};

apiClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const fetchBlogs = (page = 1, limit = 10, search = '') => {
  return apiClient.get(`/blogs?page=${page}&limit=${limit}&search=${search}`);
};

export const fetchBlogBySlug = (slug) => {
  return apiClient.get(`/blogs/${slug}`);
};

// For creating a blog, FormData is used due to file upload
export const createBlogPost = (formData) => {
  return apiClient.post('/blogs', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// For updating, FormData is used if thumbImage is changed
export const updateBlogPost = (slug, formData) => {
  return apiClient.patch(`/blogs/${slug}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteBlogById = (id) => {
  return apiClient.delete(`/blogs/${id}`);
};

// For uploading images within the rich text editor content
export const uploadContentImage = (formData) => {
  // Adjust the endpoint if you named it differently
  return apiClient.post('/uploads/content-image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default apiClient;