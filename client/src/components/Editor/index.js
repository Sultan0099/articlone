import React from "react";



import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = ({ getEditorData, editorState }) => {
    const handleChange = (event, editor) => {
        getEditorData(editor.getData());
    }


    return (


        <CKEditor
            editor={ClassicEditor}
            data={editorState}
            config={
                {
                    ckfinder: {
                        uploadUrl: "/api/v1/posts/upload-content"
                    },
                    mediaEmbed: {
                        previewsInData: true
                    }
                }
            }
            onInit={editor => {

            }}
            onChange={handleChange}

        />

    )


}

export default Editor;

