const initState = {
    news_latest: [],
    top_stories: [],
    stories:[],
    stories_image: []
}

export const ContentList = (state = initState, action) => {
    switch (action.type) {
        case 'LIST_INDEX':
            return Object.assign({}, state, {
                news_latest: [].concat(action.data.stories),
                top_stories: action.data.top_stories
            });
        case 'LIST_THEME':
            return Object.assign({}, state, {
                stories: action.data.stories,
                stories_image: [{
                    "image": action.data.background,
                    "title": action.data.description,
                    "id": 0
                }]
            });
        default:
            return state;
    }
}