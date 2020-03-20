import React, {Component} from 'react';
import './newPost.css';
import {connect} from "react-redux";
import {createPost} from "../../store/actions/postsAction/postsAction";
import {Redirect} from "react-router-dom";

class NewPost extends Component {

    state = {
        title: '',
        description: '',
        image: null
    };

    changeInputHandler = e => {this.setState({[e.target.name]: e.target.value})};
    fileChangeHandler = e => {this.setState({[e.target.name]: e.target.files[0]})};

    postNewPost = async () => {
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        formData.append('image', this.state.image);
        await this.props.createPost(formData);
    };

    render() {
        if (!this.props.user) return <Redirect to="/login"/>;
        return (
            <div className="new-post">
                <div className="new-post-block">
                    <span>Title</span>
                    <input
                        type="text"
                        className="input-1"
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <div className="new-post-block">
                    <span>Description</span>
                    <input
                        type="text"
                        className="input-2"
                        name="description"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <div className="new-post-block">
                    <span>Image</span>
                    <input
                        type="file"
                        className="input-3"
                        name="image"
                        onChange={this.fileChangeHandler}
                    />
                </div>
                <div>
                    <button className="btn" onClick={this.postNewPost}>Create post</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

const mapDispatchToProps = dispatch => ({
    createPost: (post) => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);