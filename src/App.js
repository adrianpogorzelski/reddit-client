import React, {useState} from "react";
import './App.css';

function App() {
    const [content, setContent] = useState()
    const fetchRedditData = async () => {
        const response = await fetch('https://www.reddit.com/r/cute.json')
            .then((response) => response.json())
            .then(dataObject => setContent(dataObject))
        return response
    }

    const loadContent = () => {
        if (!content) {
            return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" />
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

    fetchRedditData()

    return (
    <client-for-reddit>
      <header>
        <h1>Reddit Client: A Codecamy React/Redux project</h1>
      </header>
      <nav>
        <ul>
          <li>Menu item</li>
          <li>Menu item</li>
          <li>Menu item</li>
          <li>Menu item</li>
        </ul>
      </nav>
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
