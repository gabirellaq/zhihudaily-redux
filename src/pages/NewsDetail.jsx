import React from 'react';
import { getNewsDetailData, getNewsExtraData } from '../redux/action';
import { connect } from 'react-redux';
import Slider from '../components/Slider';
import HeaderSecond from '../components/HeaderSecond';

class NewsDetail extends React.Component {

    toBody(props) {
        let html = props;
        if(html.length>0) {            
            html = html.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
        return {
          __html: html 
        }
    }

    getNewsDetailData(id) { 
        let { dispatch } = this.props;
        //新闻详细内容    
        dispatch(getNewsDetailData("news/"+id));
        //新闻额外信息，评论数，点赞数……
        dispatch(getNewsExtraData("story-extra/"+id));
   }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.getNewsDetailData(id);
    }
    render() {
        let { news_body, news_image, news_extra } = this.props;
        return(
            <div className="list-wrap hasHeaderSecond">
                <HeaderSecond header={news_extra} />
                <Slider slider={news_image}></Slider>
                <div className="newsContent" dangerouslySetInnerHTML={this.toBody(news_body)}></div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        news_body: state.news.news_body,
        news_image: state.news.news_image,
        news_extra: {
            news_popularity: state.news.news_popularity,
            news_comments: state.news.news_comments,
            news_short_comments:state.news.news_short_comments,
            news_long_comments: state.news.news_long_comments,
            news_id: state.news.news_id
        }
    }
}

export default connect(
    mapStateToProps
)(NewsDetail);