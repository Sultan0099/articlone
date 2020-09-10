import React, { useState, useEffect } from 'react';

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';


import { useParams, useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import Editor from "../Editor";
import Form from "./Form";

import { updatePosts, getSinglePost, uploadTitleImg } from "../../redux/_actions/postsAction";

import CircularIndicator from "../common/CircularIndicator";

import styles from "./styles";

export default () => {
    const classes = styles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [values, setValues] = useState({
        title: '',
        description: ''
    });
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { collectionId, postId } = useParams();
    const [titleImg, setTitleImg] = useState("");
    const [imgLoading, setImgLoading] = useState(false);


    const imageRef = React.createRef();





    useEffect(() => {
        const fetchSinglePost = async () => {
            const post = await dispatch(getSinglePost(postId));
            if (post) {
                setBody(post.body);
                setValues({ title: post.title, description: post.description });
                setTitleImg(post.titleImg)
                setLoading(false)
            }
        }
        fetchSinglePost();

    }, [postId, dispatch])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const insertImage = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (
            e.currentTarget &&
            e.currentTarget.files &&
            e.currentTarget.files.length > 0
        ) {
            setImgLoading(true);
            const value = e.currentTarget.files[0];
            let formData = new FormData();
            formData.append("title-img", value);
            const titleImgRes = await dispatch(uploadTitleImg(formData));
            setTitleImg(titleImgRes);
            // setImgLoading(false);
        }
    }


    const handleGetEditorData = (data) => {
        setBody(data)
    }

    const savePosts = async () => {
        setIsSubmitting(true)
        const { title, description } = values;
        await dispatch(updatePosts({ title, description, body, collectionId, titleImg }, postId));

        history.push(`/dashboard/${collectionId}/blog/posts`)
    }

    if (loading) return <CircularIndicator />



    return (
        <Container style={{ width: 750, marginTop: 30 }}>
            <Form values={values} handleChange={handleChange} />

            <Button
                type="button"
                color="primary"
                variant="contained"
                disabled={imgLoading}
                style={{ marginBottom: 10 }}
                onClick={() => imageRef.current.click()}>
                Upload Title Img
            </Button>

            {titleImg && (
                <>
                    <br />
                    <img style={{ width: "300px" }} src={titleImg} onLoad={() => setImgLoading(false)} />
                </>
            )}


            <Editor getEditorData={handleGetEditorData} editorState={body} />

            <div className={classes.wrapper}>
                <Button
                    type="button"
                    onClick={savePosts}
                    fullWidth
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Update
               </Button>
                {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
            <input
                type="file"
                accept="image/*"
                ref={imageRef}
                style={{ display: "none" }}
                onChange={insertImage}
            />
        </Container>
    )
}