import { combineReducers } from 'redux';
import { ContentList } from './list';
import { Sidebar } from './sidebar';
import { News } from './news';
import { Comments } from './comments';

const reducer = combineReducers({
    list: ContentList,
    sidebar: Sidebar,
    news: News,
    comments: Comments
});

export default reducer;
