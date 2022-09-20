import React, {useState} from 'react';
import './App.css';

const fetchRedditData = async () => {
    const response = await fetch('https://www.reddit.com/r/cute.json')
        .then((response) => response.json())
    return response
}

function App() {
    const [content, setContent] = useState()

    const loadContent = () => {
        if (!content) {
            return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt={"Loading..."}/>
        } else {
            for (let i = 0; i < content.data.children.length; i++) {
                if (content.data.children[i].data.is_video) {
                    const url = content.data.children[i].data.secure_media.reddit_video.fallback_url
                    return (
                        <video controls>
                            <source src={url} />
                        </video>
                    )
                }
            }
        }
    }

    fetchRedditData().then(response => setContent(response))

    return (
    <client-for-reddit>
      <header>
        <h1>Reddit Client: A Codecamy React/Redux project</h1>
      </header>
      <main>
        <h2>Content:</h2>
          {loadContent()}
      </main>
    <footer>
        <p>All data comes from Reddit.</p>
    </footer>
    </client-for-reddit>
  );
}

export default App;
export {fetchRedditData}
