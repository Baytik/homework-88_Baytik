import axiosAPI from "../../../axiosAPI";

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR';

export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';

export const fetchCommentsSuccess = (comments) => ({type: FETCH_COMMENTS_SUCCESS, comments});
export const fetchCommentsError = (error) => ({type: FETCH_COMMENTS_ERROR, error});

/*export const createPostError = (error) => ({type: CREATE_POST_ERROR, error});*/

export const fetchComments = (id) => {
    return async (dispatch) => {
        try {
            const response = await axiosAPI.get(`/comments?post=${id}`);
            dispatch(fetchCommentsSuccess(response.data))
        } catch (error) {
            dispatch(fetchCommentsError(error))
        }
    }
};

/*
export const createPost = (post) => {
    return async (dispatch, getState) => {
        const token = getState().user.user;
        try {
            await axiosAPI.post('/posts', post, {headers: {'Authorization': token.token}});
            dispatch(push('/'))
        } catch (error) {
            dispatch(createPostError(error))
        }
    }
};*/
