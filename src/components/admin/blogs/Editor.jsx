import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import ImageResize from 'tiptap-extension-resize-image';
import './styles.css';

import {
    FiBold as Bold,
    FiItalic as Italic,
    FiUnderline as UnderlineIcon,
    FiLink as LinkIcon,
    FiList as List,
    FiCornerUpLeft as Undo,
    FiCornerUpRight as Redo,
    FiImage as ImageIcon,
    FiMinusSquare as MinusSquare,
    FiPlusSquare as PlusSquare,
} from 'react-icons/fi';

import { CiTextAlignCenter, CiTextAlignLeft, CiTextAlignRight, CiTextAlignJustify } from "react-icons/ci";


import { FaListOl } from "react-icons/fa";
//

const cloudName = String(process.env.REACT_APP_CLOUD_NAME);
console.log('cloudName', cloudName)
const uploadPreset = String(process.env.REACT_APP_UPLOAD_PRESET);
const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;


const MenuBar = ({ editor }) => {
    // Add heading levels state
    const headingLevels = [
        { level: 0, label: 'Normal' },
        { level: 1, label: 'Heading 1' },
        { level: 2, label: 'Heading 2' },
        { level: 3, label: 'Heading 3' },
        { level: 4, label: 'Heading 4' },
        { level: 5, label: 'Heading 5' },
        { level: 6, label: 'Heading 6' },
    ];

    const handleHeadingChange = (level) => {
        if (level === 0) {
            editor.chain().focus().toggleHeading({ level: 1 }).run();
        } else {
            editor.chain().focus().toggleHeading({ level }).run();
        }
    };

    const addLink = () => {
        const url = window.prompt('Enter URL');
        if (url) {
            editor.chain().focus().setLink({ href: url }).run();
        }
    };

    const addImage = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = async (event) => {
            const file = event.target.files?.[0];
            if (file) {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', uploadPreset);
                formData.append('cloud_name', cloudName);


                try {
                    const response = await fetch(
                        cloudinaryUrl,
                        {
                            method: 'POST',

                            body: formData,
                        }
                    );

                    const data = await response.json();
                    if (data.secure_url) {
                        editor.chain().focus().setImage({ src: data.secure_url }).run();
                    }
                } catch (error) {
                    console.error('Error uploading image:', error);
                    alert('Error uploading image');
                }
            }
        };
        input.click();
    };

    const resizeImage = (increase) => {
        const images = document.querySelectorAll('.ProseMirror img');
        const selectedImage = Array.from(images).find(img =>
            (img).style.outline === '2px solid #68cef8'

        );

        if (selectedImage) {
            const currentWidth = selectedImage.width;
            const newWidth = increase ? currentWidth * 1.1 : currentWidth * 0.9;
            selectedImage.style.width = `${newWidth}px`;
        }

    };

    // Add alignment options
    const alignmentOptions = [
        { value: 'left', label: <CiTextAlignLeft /> },
        { value: 'center', label: <CiTextAlignCenter /> },
        { value: 'right', label: <CiTextAlignRight /> },
        { value: 'justify', label: <CiTextAlignJustify /> },
    ];

    const handleAlignmentChange = (alignment) => {
        editor.chain().focus().setTextAlign(alignment).run();
    };

    const fontSizes = [10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72];

    const handleFontSizeChange = (size) => {
        editor.chain().focus().setFontSize(size + 'px').run();
    };

    return (
        <div className="border-b border-gray-200 p-2 flex flex-wrap gap-1">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bold') ? 'bg-gray-200' : ''}`}
            >
                <Bold className="w-5 h-5" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('italic') ? 'bg-gray-200' : ''}`}
            >
                <Italic className="w-5 h-5" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('underline') ? 'bg-gray-200' : ''}`}
            >
                <UnderlineIcon className="w-5 h-5" />
            </button>
            <select
                value={headingLevels.find(l => editor.isActive('heading', { level: l.level }))?.level || 0}
                onChange={(e) => handleHeadingChange(parseInt(e.target.value))}

                className="p-2 rounded border-gray-300 w-20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                {headingLevels.map(({ level, label }) => (
                    <option key={level} value={level}>
                        {`H${level}`}
                    </option>
                ))}
            </select>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bulletList') ? 'bg-gray-200' : ''}`}
            >
                <List className="w-5 h-5" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('orderedList') ? 'bg-gray-200' : ''}`}
            >
                <FaListOl className="w-5 h-5" />
            </button>

            <button
                onClick={addLink}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('link') ? 'bg-gray-200' : ''}`}
            >
                <LinkIcon className="w-5 h-5" />
            </button>
            <button
                onClick={addImage}
                className="p-2 rounded hover:bg-gray-100"
            >
                <ImageIcon className="w-5 h-5" />
            </button>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                className="p-2 rounded hover:bg-gray-100"
            >
                <Undo className="w-5 h-5" />
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                className="p-2 rounded hover:bg-gray-100"
            >
                <Redo className="w-5 h-5" />
            </button>
            <div className="flex gap-px">
                {alignmentOptions.map(({ value, label }) => (
                    <button
                        key={value}
                        onClick={() => handleAlignmentChange(value)}
                        className={`p-2 rounded hover:bg-gray-100 ${editor.isActive({ textAlign: value }) ? 'bg-gray-200' : ''
                            }`}
                        title={value.charAt(0).toUpperCase() + value.slice(1)}
                    >
                        {label}
                    </button>
                ))}
            </div>
            {/* <select
        value={editor.getAttributes('textStyle').fontSize?.replace('px', '') || ''}
        onChange={(e) => handleFontSizeChange(e.target.value)}
        className="p-2 rounded border-gray-300 w-24 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Size</option>
        {fontSizes.map((size) => (
          <option key={size} value={size}>{size}px</option>
        ))}
      </select> */}
        </div>
    );
};


const CustomImage = Image.configure({
    HTMLAttributes: {
        class: 'max-w-full cursor-pointer hover:outline hover:outline-2 hover:outline-blue-400',
    },
});




const Editor = (
    {
        content,
        setContent
    }
) => {



    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link.configure({
                openOnClick: false,
            }),
            CustomImage,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            ImageResize
        ],
        content: '<p>Start typing your content here...</p>',
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
            },
            handleClick: (view, pos, event) => {
                const target = event.target;
                if (target.tagName === 'IMG') {
                    // Remove outline from all other images
                    document.querySelectorAll('.ProseMirror img').forEach(img => {
                        (img).style.outline = 'none';
                    });
                    // Add outline to clicked image
                    target.style.outline = '2px solid #68cef8';
                    return true;
                }
                return false;
            },
        },
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML().replace(/<p>\s*<\/p>/g, '<br/>'));
        },
    });

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <div className="border rounded-lg shadow-sm mb-8">
                <MenuBar editor={editor} />
                <div className="p-4 border bg-white">
                    <EditorContent editor={editor} />
                </div>

            </div>

            {/* <div className="border rounded-lg shadow-sm">
        <div className="bg-gray-50 px-4 py-2 border-b">
          <h2 className="text-sm font-medium text-gray-700">HTML Output</h2>
        </div>
        <div className="p-4">
          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              editor?.commands.setContent(e.target.value);
            }}
            className="w-full h-48 p-2 text-sm font-mono bg-gray-50 rounded border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Editor content will appear here..."
          />
        </div>
      </div> */}

            <div className="border rounded-lg shadow-sm">
                <div className="bg-gray-50 px-4 py-2 border-b">
                    <h2 className="text-sm font-medium text-gray-700">Preview</h2>
                </div>
                <div className="p-4 border bg-white">
                    <div
                        className="tiptap prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </div>
        </div>
    );
}


export default Editor;