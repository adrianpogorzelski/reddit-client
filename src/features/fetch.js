import fetch from "node-fetch";

export const fetchRedditData = async (subreddit = 'popular') => {
    const url = `https://www.reddit.com/r/${subreddit}.json`;
    const response = await fetch(url)
    return response;
}