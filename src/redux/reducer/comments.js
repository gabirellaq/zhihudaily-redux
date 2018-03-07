const initState = {
    news_long_comments_data: [],
    news_short_comments_data: [],
}

export const Comments = (state = initState, action) => {
    switch (action.type) {
        case 'NEWS_COMMENTS_LONG':
            return Object.assign({}, state, {
                news_long_comments_data: action.data.comments
            });
        case 'NEWS_COMMENTS_SHORT':
            return Object.assign({}, state, {
                news_short_comments_data: action.data.comments
            });
        default:
            return state;
    }
}