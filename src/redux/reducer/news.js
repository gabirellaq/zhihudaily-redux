const initState = {
    news_body: [],
    news_image: [],
    news_section:{},
    news_popularity: 0,
    news_comments: 0,
    news_short_comments:0,
    news_long_comments: 0,
    news_id: 0
}

export const News = (state = initState, action) => {
    switch (action.type) {
        case 'NEWS_DETAIL':
            return Object.assign({}, state, {
                news_body: action.data.body,
                news_image: [{
                    "image": action.data.image || '',
                    "title": action.data.title,
                    "id": action.data.id || 0
                }],
                news_section: action.data.section || '',
                news_id: action.data.id
            });
        case 'NEWS_EXTRA':
            return Object.assign({}, state, {
                news_popularity: action.data.popularity,
                news_comments: action.data.comments,
                news_short_comments: action.data.short_comments,
                news_long_comments: action.data.long_comments
            });
        default:
            return state;
    }
}