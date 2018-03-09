import React from 'react';
import { getNewsCommentsLongData, getNewsCommentsShortData, getNewsExtraData } from '../redux/action';
import { connect } from 'react-redux';
import CommentsItem from '../components/CommentsItem';
import HeaderThird from '../components/HeaderThird';
import '../css/comments.scss';

class Comments extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
       
        let { dispatch } = this.props;
        //长评论
        dispatch(getNewsCommentsLongData("story/"+id+"/long-comments"));
        //短评论
        dispatch(getNewsCommentsShortData("story/"+id+"/short-comments"));
        //新闻额外信息，评论数，点赞数……
        dispatch(getNewsExtraData("story-extra/"+id));
    }

    render() {
        let { 
            news_long_comments_data, 
            news_short_comments_data, 
            news_long_comments, 
            news_short_comments,
            news_comments
        } = this.props;
        return(
            <div className="list-wrap comments-box">
                <HeaderThird name={news_comments+" 条评论"}/>
                <h1 className="title">{news_long_comments}条长评</h1>
                <CommentsItem longComments={news_long_comments_data} />
                <h1 className="title">{news_short_comments}条短评</h1>
                <CommentsItem longComments={news_short_comments_data} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        news_long_comments_data: state.comments.news_long_comments_data,
        news_short_comments_data: state.comments.news_short_comments_data,
        news_comments: state.news.news_comments,
        news_short_comments: state.news.news_short_comments,
        news_long_comments: state.news.news_long_comments
    }
}

export default connect(
    mapStateToProps
)(Comments);