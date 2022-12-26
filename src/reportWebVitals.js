import fetch from "node-fetch";

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
const fetchRedditData = async (subreddit = 'popular') => {
  const url = `https://www.reddit.com/r/${subreddit}.json`;
  const response = await fetch(url)
  return response.json()
}