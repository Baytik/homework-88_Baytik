import {FETCH_COMMENTS_SUCCESS} from "../../actions/commentsAction/commentsAction";

const initialState = {
    comments: []
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_SUCCESS:
            return {...state, comments: action.comments};
        default:
            return state;
    }
};

export default postsReducer;