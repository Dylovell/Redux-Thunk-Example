import { combineReducers } from 'redux'
import {
    SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
    REQUEST_POSTS, RECEIVE_POSTS
} from './actions'

<<<<<<< HEAD

const selectedSubreddit = (state = 'reactjs', action) => {
=======
const selectedSubreddit = (state = initialSubreddits.subreddits, action) => {
>>>>>>> 1b2536361e45369b4d5fe45df9e3fce057a262aa
    switch(action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

const initialSubreddits = {
    subreddits: ['reactjs', 'utah']
}

const initialPostsState = {
    isFetching: false,
    didInvalidate: false,
    items: []
}

const posts = (state = initialPostsState, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate: true
            }
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

const postsBySubreddit = (state = {}, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    postsBySubreddit,
    selectedSubreddit
})

export default rootReducer