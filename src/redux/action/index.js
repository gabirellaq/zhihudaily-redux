import superagent from '../../util/superagent';

//sidebar
export const toggleSidebar = () => ({
    type: 'TOGGLE_SIDEBAR'
})

export const getSidebarSuccess = (data) => {
    return {
        type: 'SIDEBAR_THEMES',
        data
    }
}

export function getSidebarData (url) {
    return dispatch => {
        superagent("get", url)
        .then(data => {
            dispatch(getSidebarSuccess(data));
        })
    }
}

//list
export const getNewsLatestSuccess = (data) => {
    return {
        type: 'LIST_INDEX',
        data
    }
}

export function getNewsLatestData (url) {
    return dispatch => {
        superagent("get", url)
        .then(data => {
            dispatch(getNewsLatestSuccess(data));
        })
    }
}

//list theme
export const getThemesSuccess = (data) => {
    return {
        type: 'LIST_THEME',
        data
    }
}

export function getThemesData (url) {
    return dispatch => {
        superagent("get", url)
        .then(data => {
            dispatch(getThemesSuccess(data));
        })
    }
}

//news detail
export const getNewsDetailSuccess = (data) => {
    return {
        type: 'NEWS_DETAIL',
        data
    }
}

export function getNewsDetailData (url) {
    return dispatch => {
        superagent("get", url)
        .then(data => {
            dispatch(getNewsDetailSuccess(data));
        })
    }
}

//news extra
export const getNewsExtraSuccess = (data) => {
    return {
        type: 'NEWS_EXTRA',
        data
    }
}

export function getNewsExtraData (url) {
    return dispatch => {
        superagent("get", url)
        .then(data => {
            dispatch(getNewsExtraSuccess(data));
        })
    }
}

//news comments long
export const getNewsCommentsLongSuccess = (data) => {
    return {
        type: 'NEWS_COMMENTS_LONG',
        data
    }
}

export function getNewsCommentsLongData (url) {
    return dispatch => {
        superagent("get", url)
        .then(data => {
            dispatch(getNewsCommentsLongSuccess(data));
        })
    }
}

//news comments short
export const getNewsCommentsShortSuccess = (data) => {
    return {
        type: 'NEWS_COMMENTS_SHORT',
        data
    }
}

export function getNewsCommentsShortData (url) {
    return dispatch => {
        superagent("get", url)
        .then(data => {
            dispatch(getNewsCommentsShortSuccess(data));
        })
    }
}