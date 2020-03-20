import axiosAPI from "../../../axiosAPI";

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR';

export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';

export const fetchCommentsSuccess = (comments) => ({type: FETCH_COMMENTS_SUCCESS, comments});
export const fetchCommentsError = (error) => ({type: FETCH_COMMENTS_ERROR, error});

export const createCommentError = (error) => ({type: CREATE_COMMENT_ERROR, error});

export const fetchComments = (id) => {
    return async (dispatch) => {
        try {
            const response = await axiosAPI.get(`/comments/${id}`);
            dispatch(fetchCommentsSuccess(response.data))
        } catch (error) {
            dispatch(fetchCommentsError(error))
        }
    }
};

export const createComment = (comment, id) => {
    return async (dispatch, getState) => {
        const token = getState().user.user;
        try {
            await axiosAPI.post('/comments', comment, {headers: {'Authorization': token.token}});
            dispatch(fetchComments(id));
        } catch (error) {
            dispatch(createCommentError(error))
        }
    }
};