import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchComments} from "../../store/actions/commentsAction/commentsAction";

class Comments extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchComments(id);
    }

    render() {
        console.log(this.props.comments)
        return (
            <div>
              here
            </div>
        );
    }
}

const mapStateToProps = state => ({
    comments: state.comments.comments
});

const mapDispatchToProps = dispatch => ({
    fetchComments: (id) => dispatch(fetchComments(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);