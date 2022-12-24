import {createStore} from 'redux'
import fetch from "node-fetch";

export const fetchRedditData = async (subreddit = 'popular') => {
    let url = `https://www.reddit.com/r/${subreddit}.json`;
    const redditData = await fetch(url)
        .then((response) => response.json())
        .then((response) => response.data)
    console.log("Reddit data: " + redditData.toString())
}

const initialState = fetchRedditData()

const displayCategoryReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export const store = createStore(displayCategoryReducer)