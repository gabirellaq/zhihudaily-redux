import React from 'react';
import filter from '../util/filter.js';

class CommentsItem extends React.Component {
    render() {
        return(
            <ul>
                {this.props.longComments.map(subitem =>
                    <li key={subitem.id}>
                        <div className="com-he">
                            <h2>{subitem.author}</h2>
                            <span className="likesNum">
                                <i className="iconfont icon-dianzan"></i>
                                <span>{subitem.likes}</span>
                            </span>
                        </div>
                        <p className="body">{subitem.content}</p>
                        <p className="date">{filter.formatTime(subitem.time, "MM-dd hh:mm")}</p>
                    </li>
                )}
            </ul>
        )
    }
}

export default CommentsItem;