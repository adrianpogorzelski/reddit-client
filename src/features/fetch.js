import fetch from "node-fetch";
import axios from "axios";

export const fetchRedditData = async (subreddit = 'popular') => {
    const url = `https://www.reddit.com/r/${subreddit}.json`;
    const response = await axios
        .get(url)
        .then(response => {return response})
}
