import fetch from "node-fetch";

export const fetchRedditData = (subreddit = 'popular') => {
        const url = `https://www.reddit.com/r/${subreddit}.json`
            const redditData = fetch(url)
                .then(result => result.json())
                .then(responseJson => {
                    if (responseJson.kind === "Listing") {
                        return responseJson
                    } else {
                        return "Subreddit could not be found"
                    }
                })
            return redditData
}