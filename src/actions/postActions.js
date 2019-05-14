import {
    FETCH_POSTS,
    NEW_POST
} from './types';


export const fetchPosts = () => dispatch => {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(t => t.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(t => t.json())
        .then(t => dispatch({
            type: NEW_POST,
            payload: t
        }));
}
