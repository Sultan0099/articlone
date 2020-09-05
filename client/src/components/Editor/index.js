import React from "react";

import CKEditor from "@ckeditor/ckeditor5-react";
// import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


const Editor = ({ getEditorData, editorState }) => {
    const handleChange = (event, editor) => {
        getEditorData(editor.getData());
    }


    return (


        <CKEditor
            editor={ClassicEditor}
            data={editorState}
            onInit={editor => {
                console.log(editor)
            }}
            config={
                {

                    toolbar: {
                        items: ["codeBlock",
                            "heading", "|",
                            "bold", "italic",
                            "link", "bulletedList", "numberedList", "|",
                            "indent", "outdent", "|",
                            "imageUpload", "blockQuote",
                            "insertTable", "mediaEmbed",
                            "undo", "redo"]
                    },

                    alignment: {
                        options: ['left', 'right']
                    },

                    ckfinder: {

                        uploadUrl: "/api/v1/posts/upload-content",
                        // fileBrowserUploadUrl: "/api/v1/posts/upload-content",

                        options: {
                            resourceType: 'Images',

                        },

                    },
                    mediaEmbed: {
                        previewsInData: true
                    },

                }
            }

            onChange={handleChange}

        />

    )


}

export default Editor;

