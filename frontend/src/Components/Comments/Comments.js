import React, {Component} from 'react';
import './Comments.css';
import {connect} from "react-redux";
import {createComment, fetchComments} from "../../store/actions/commentsAction/commentsAction";
import {fetchPost} from "../../store/actions/postsAction/postsAction";
import ImgThumbnail from '../imgThumbNail/imgThumbNail';

class Comments extends Component {

    state = {
        comment: ''
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchComments(id);
        this.props.fetchPost(id)
    }

    changeInputHandler = e => {this.setState({[e.target.name]: e.target.value})};

    postComment = async () => {
        const Comment = {
            comment: this.state.comment,
            post: this.props.match.params.id
        };
        await this.props.createComment(Comment, this.props.match.params.id)
    };

    render() {
        return (
            <div className="comments">
                <div className="post-block" key={this.props.post._id}>
                    <ImgThumbnail image={this.props.post.image}/>
                    <h1>{this.props.post.title}</h1>
                    <p>{this.props.post.description}</p>
                </div>
                {this.props.comments.map(comment => (
                    <div className="comment-block" key={comment._id}>
                        <p>{comment.comment}</p>
                        <span>Says: {comment.userId.username}</span>
                    </div>
                ))}
                {this.props.user && (
                    <div className="CommentsForm">
                        <p>Write your comment</p>
                        <div>
                            <input type="text" name="comment" onChange={this.changeInputHandler}/>
                        </div>
                        <div>
                            <button onClick={this.postComment}>Send</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
    comments: state.comments.comments,
    post: state.posts.post
});

const mapDispatchToProps = dispatch => ({
    fetchComments: (id) => dispatch(fetchComments(id)),
    createComment: (comment, id) => dispatch(createComment(comment, id)),
    fetchPost: (id) => dispatch(fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);