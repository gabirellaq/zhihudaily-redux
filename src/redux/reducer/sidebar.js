const initState = {
    active: false,
    themes: []
}

export const Sidebar = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return Object.assign({}, state, {
                ...state,
                active: !state.active
            })
        case 'SIDEBAR_THEMES':
            return Object.assign({}, state, {
                themes: action.data.others
            })
        default:
            return state;
    }
}