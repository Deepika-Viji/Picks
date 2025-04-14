import React from 'react'
import CkEditor from '../ck-editor/CkEditor'
const RichTextEditorSection = () => {
  return (
    <div className="col-12">
        <div className="panel">
            <div className="panel-header">
                <h5>Rich Text Editor</h5>
            </div>
            <div className="panel-body">
                <div className="editor">
                    <CkEditor/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RichTextEditorSection