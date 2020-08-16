import React, { Component } from "react";



import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class Editor extends Component {
    savedContent = localStorage.getItem('content') ? localStorage.getItem("content") : '';
    constructor(props) {
        super(props);
        this.state = { content: this.savedContent }
    }

    handleChange = (event, editor) => {
        this.setState({
            content: editor.getData()
        });
        localStorage.setItem('content', editor.getData());
        this.props.getEditorData(this.state.content)
    }

    render() {
        return (


            <CKEditor
                editor={ClassicEditor}
                data={this.state.content}
                config={
                    {
                        ckfinder: {
                            uploadUrl: "/api/v1/posts/upload-content"
                        }
                    }
                }
                onInit={editor => {

                }}
                onChange={this.handleChange}

            />

        )
    }

}

export default Editor;

