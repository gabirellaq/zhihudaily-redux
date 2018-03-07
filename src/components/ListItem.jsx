import React from 'react';
import { Link } from 'react-router-dom';
import filter from '../util/filter.js';
import '../css/listItem.css';

class ListItem extends React.Component {
    render() {
        const item = this.props.item;
        return(
            <li className="list-item-li">
                <Link to={`/news/${item.id}`}>
                    <span className="text">
                        <span>{item.title}</span>
                        {(() => {  
                            if(item.display_date) {
                                return (
                                    <span className="date">{item.display_date}</span>
                                )
                            }  
                        })()} 
                    </span>
                    {(() => {
                        if(item.images) {
                            return (
                                <span className="img">
                                    <img src={item.images} alt=""/>
                                    {(() => {
                                        if(item.multipic) {
                                            return (
                                                <span className="tip">
                                                    <i className="iconfont">&#xe61c;</i> 多图
                                                </span>
                                            )
                                        }
                                    })()}
                                </span>
                            )
                        }
                    })()}     
                               
                </Link>
            </li>
        )
    }
}

export default ListItem;