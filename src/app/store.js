import {createStore} from 'redux'

const fetchRedditData = async (subreddit = 'popular') => {
    let url = `https://www.reddit.com/r/${subreddit}.json`;
    const response = await fetch(url)
        .then((response) => response.json())
    return response
}

const initialState = fetchRedditData()

const displayCategoryReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export const store = createStore(displayCategoryReducer)