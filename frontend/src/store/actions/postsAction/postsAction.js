import axiosAPI from "../../../axiosAPI";

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

export const loginUserSuccess = (posts) => ({type: FETCH_POSTS_SUCCESS, posts});
export const loginUserError = (error) => ({type: FETCH_POSTS_ERROR, error});

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            const response = await axiosAPI.get('/posts');
            dispatch(loginUserSuccess(response.data))
        } catch (error) {
            dispatch(loginUserError(error))
        }
    }
};