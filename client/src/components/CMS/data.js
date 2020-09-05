import axios from "axios";

export const postData = (setData) => {
    return [
        {
            type: "Get All Posts",
            method: 'get',
            queryParams: null,
            query: "http://localhost:3001/cms/{Your apikey}/posts/all",
            description: "This api is used to fetch first 10 all posts ",
            fetch: async (apiKey) => {
                const res = await axios.get(`http://localhost:3001/cms/${apiKey}/posts/all`);
                let stringData = JSON.stringify(res.data.data);
                let splitData = stringData.split(",");

                setData(splitData);
            }
        },
        {
            type: "Get Published Posts",
            method: 'get',
            queryParams: null,
            query: "http://localhost:3001/cms/{Your apikey}/posts/published",
            description: "This api is used to fetch first 10 published posts ",
            fetch: async (apiKey) => {
                const res = await axios.get(`http://localhost:3001/cms/${apiKey}/posts/published`);
                let stringData = JSON.stringify(res.data.data);
                let splitData = stringData.split(",");

                setData(splitData);
            }
        },
        {
            type: "Get Un Published Posts",
            method: 'get',
            queryParams: null,
            query: "http://localhost:3001/cms/{Your apikey}/posts/unpublished",
            description: "This api is used to fetch first 10 unpublished posts ",
            fetch: async (apiKey) => {
                const res = await axios.get(`http://localhost:3001/cms/${apiKey}/posts/unpublished`);
                let stringData = JSON.stringify(res.data.data);
                let splitData = stringData.split(",");

                setData(splitData);
            }
        },
        {
            type: "next or previous all posts",
            method: 'get',
            queryParams: ['page', 'limit'],
            query: "http://localhost:3001/cms/{Your apikey}/posts/all?page={number}&limit={number}",
            description: "This api is used to get next or previous all posts , you can change limit and page as you want",
            fetch: async (apiKey) => {
                const res = await axios.get(`http://localhost:3001/cms/${apiKey}/posts/all?page=1&limit=10`);
                let stringData = JSON.stringify(res.data.data);
                let splitData = stringData.split(",");

                setData(splitData);
            }
        },
        {
            type: "next or previous published posts",
            method: 'get',
            queryParams: ['page', 'limit'],
            query: "http://localhost:3001/cms/{Your apikey}/posts/published?page={number}&limit={number}",
            description: "This api is used to get next or previous published posts , you can change limit and page as you want",
            fetch: async (apiKey) => {
                const res = await axios.get(`http://localhost:3001/cms/${apiKey}/posts/published?page=1&limit=10`);
                let stringData = JSON.stringify(res.data.data);
                let splitData = stringData.split(",");

                setData(splitData);
            }
        },
        {
            type: "next or previous Un Published posts",
            method: 'get',
            queryParams: ['page', 'limit'],
            query: "http://localhost:3001/cms/{Your apikey}/posts/unpublished?page={number}&limit={number}",
            description: "This api is used to get next or previous un-published posts , you can change limit and page as you want",
            fetch: async (apiKey) => {
                const res = await axios.get(`http://localhost:3001/cms/${apiKey}/posts/unpublished?page=1&limit=10`);
                let stringData = JSON.stringify(res.data.data);
                let splitData = stringData.split(",");

                setData(splitData);
            }
        },
        {
            type: "Get single post",
            method: 'get',
            queryParams: null,
            query: "http://localhost:3001/cms/{Your apikey}/single-post/{postId}",
            description: "This api is used to get single post with the id , Here we are using your first post's id",
            fetch: async (apiKey) => {
                const allPosts = await axios.get(`http://localhost:3001/cms/${apiKey}/posts/unpublished?page=1&limit=10`);
                if (allPosts.length === 0) {
                    setData([" Your have not created any post yet"])
                }
                const res = await axios.get(`http://localhost:3001/cms/${apiKey}/single-post/${allPosts.data.data.posts[0]._id}`);

                let stringData = JSON.stringify(res.data.data);
                let splitData = stringData.split(",");

                setData(splitData);
            }
        }
    ]
}

export const userData = () => {
    return [
        {
            type: "Register User",
            method: 'Post',
            queryParams: null,
            query: "http://localhost:3001/cms/{Your apikey}/user/auth/register",
            description: "You use this api to register user on you site or application",
            fetch: null
        },
        {
            type: "Login User",
            method: 'Post',
            queryParams: null,
            query: "http://localhost:3001/cms/{Your apikey}/user/auth/login",
            description: "You use this api to register user on you site or application",
            fetch: null
        },
    ]
}