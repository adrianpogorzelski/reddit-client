import {store} from "../store/store";

export const setSubreddit = (subreddit) => {
    return {
        type: 'setSubreddit',
        payload: subreddit
    }
}

export const buttonClick = (button) => {
    store.dispatch(setSubreddit(button))
}