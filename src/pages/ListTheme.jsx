import React from 'react';
//import { BrowserRouter as Router, Link } from 'react-router-dom';
import { getThemesData } from '../redux/action';
import { connect } from 'react-redux';
import HeaderIndex from '../components/HeaderIndex';
import Sidebar from '../components/Sidebar';
import Slider from '../components/Slider';
import ListItem from '../components/ListItem';

class ListTheme extends React.Component {

    getThemeData(id) {
        let { dispatch } = this.props;
        dispatch(getThemesData("theme/"+id));
    }

    componentWillMount() {
        let id = this.props.match.params.id;
        this.getThemeData(id);
    }
    componentDidUpdate(prevProps) {
        let oldThemeId = prevProps.match.params.id;
        let newThemeId  = this.props.match.params.id;
        if (oldThemeId !== newThemeId) {
            this.getThemeData(newThemeId);
        }
    }

    render() {
        let { stories, stories_image } = this.props;
        return(
            <div className="list-wrap">   
                <HeaderIndex header={this.props.match.params.id} /> 
                <Sidebar />             
                <Slider slider={stories_image}></Slider>
                <ul>
                    {stories.map(subitem =>
                        <ListItem key={subitem.id} item={subitem}></ListItem>
                    )}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        stories: state.list.stories,
        stories_image: state.list.stories_image
    }
}

export default connect(
    mapStateToProps
)(ListTheme);