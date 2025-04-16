import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const CkEditor = () => {
  return (
    <div className="editor">
        <CKEditor
            editor={ClassicEditor}
            data=""
            onChange={(event, editor) => {
                const data = editor.getData();
            }}
        />
    </div>
  )
}

export default CkEditor