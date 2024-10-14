import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

const RichTextEditor = () => {
  const editor = useRef();
  const [content, setContent] = useState('');

  // Configuration for Jodit editor
  const config = {
    readonly: false, // Enable editing
    toolbarSticky: false,
    placeholder: 'Product Description',
    toolbarAdaptive: true,
    height: 300, // Set height of editor
    uploader: {
      insertImageAsBase64URI: true, // Allows image uploads as base64
    },
    buttons: [
      'bold', 'italic', 'underline', 'strikethrough', 'ul', 'ol', 'font', 'fontsize',
      'paragraph', 'link', 'align', 'undo', 'redo', 'hr', 'copyformat', 'image', 'video',
    ],
  };

  return (
    <div className="editor-container">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // Use tabIndex to focus the editor
        onBlur={newContent => setContent(newContent)} // Save content onBlur
        onChange={newContent => {}}
      />
    </div>
  );
};

export default RichTextEditor;
