import React, {Component} from 'react';
import './Posts.css';
import {connect} from "react-redux";
import {fetchPosts} from "../../store/actions/postsAction/postsAction";
import ImgThumbnail from '../imgThumbNail/imgThumbNail';
import {NavLink} from "react-router-dom";

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="Posts">
                {this.props.posts.map(post => (
                    <div className="post" key={post._id}>
                        <ImgThumbnail image={post.image}/>
                        <div>
                        <p>{post.datetime} <span>by: {post.user.username}</span></p>
                            <NavLink to={`/comments/${post._id}`}>{post.title}</NavLink>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);