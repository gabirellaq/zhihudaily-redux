import React from 'react';
import { Link } from 'react-router-dom';
import { toggleSidebar, getSidebarData } from '../redux/action';
import { connect } from 'react-redux';
import '../css/sliderbar.scss';

class Sidebar extends React.Component {
    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(getSidebarData("themes"));
    };

    toggleSidebar() {
        let { dispatch } = this.props;
        dispatch(toggleSidebar());
    }


    render() {
        let { themes } = this.props;
        return(
            <div className="side">
                <div className ={ this.props.active ?  "sidebar show-sidebar" : "sidebar"}>
                    <div className = "sidebar-header">
                        <div className="user">
                            <img src="https://avatars3.githubusercontent.com/u/5259501?s=460&v=4" alt="avatar" />
                            <span className="username">gabirellaq</span>
                        </div>
                        <div className="user-content">
                            <div>
                                <i className="iconfont icon-shoucang"></i>
                                <span>我的收藏</span>
                            </div>
                            <div>
                                <i className="iconfont icon-xiaoxi"></i>
                                <span>我的通知</span>
                            </div>
                        </div>
                    </div>
                    <div className = "sidebar-list">  
                        <ul className="sidebar-list-ul">
                            <li className="sidebar-home" onClick={this.toggleSidebar.bind(this)}>
                                <Link to="/">
                                    <i className="iconfont icon-shouye"></i>
                                    <span>首页</span>
                                </Link>
                            </li>
                            {themes.map(item => 
                                <li key={item.id} onClick={this.toggleSidebar.bind(this)}>
                                    <Link to={`/theme/${item.id}`}>
                                        <span>{item.name}</span>
                                        <i className="iconfont icon-jia"></i>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div onClick={this.toggleSidebar.bind(this)} className={ this.props.active ?  "sidebar-mask" : ""}></div>
                
            </div>
            
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        active: state.sidebar.active,
        themes: state.sidebar.themes
    }
}

export default connect(
    mapStateToProps
)(Sidebar);