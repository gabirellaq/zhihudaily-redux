import React from 'react';
import { getNewsLatestData } from '../redux/action';
import { connect } from 'react-redux';
import Slider from '../components/Slider';
import ListItem from '../components/ListItem';

class List extends React.Component {
    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(getNewsLatestData("news/latest"));
    }

    render() {
        let { news_latest, top_stories } = this.props;
        return(
            <div className="list-wrap">
                <Slider slider={top_stories}></Slider>
                <ul>
                    {news_latest.map(subitem =>
                        <ListItem key={subitem.id} item={subitem}></ListItem>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    news_latest: state.list.news_latest,
    top_stories: state.list.top_stories
})

export default connect(
    mapStateToProps
)(List);