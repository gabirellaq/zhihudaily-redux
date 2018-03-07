import React from 'react';
import '../css/header.css';

class HeaderThird extends React.Component {
    goBack() {
        window.history.back()
    }
    render() {
        return(
            <div className = "header-index header-second">
                <div onClick={this.goBack}><i className="iconfont icon-backicon"></i></div>
                <div className="title">{this.props.name}</div>
            </div>
        )
    }
}

HeaderThird.defaultProps = {
    name: ''
}

export default HeaderThird;