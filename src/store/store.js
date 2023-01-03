import {createStore} from 'redux';
import fetch from "node-fetch";

/*export const fetchSubreddits = async () => {
    const response = await fetch('https://www.reddit.com/subreddits.json')
    return response
}*/

/*export const changeSubreddit = async (subreddit) => {
    // const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
    console.log(subreddit)
}*/


const initialState = 'Popular'

const displayCategoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'setSubreddit':
            return action.payload
        default:
            return state
    }
}

export const store = createStore(displayCategoryReducer)

store.subscribe(() => {
    let newState = store.getState()
    let renderState = document.getElementById('storeRender')
    renderState.innerHTML = newState
})

export const setSubreddit = (subreddit) => {
    return {
        type: 'setSubreddit',
        payload: subreddit
    }
}

export const buttonClick = (button) => {
    store.dispatch(setSubreddit(button))
}