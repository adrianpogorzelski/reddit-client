import React, {useState} from "react";
import './App.css';

function App() {
    const [content, setContent] = useState(null)
    const fetchRedditData = async () => {
        const response = await fetch('https://www.reddit.com/r/cute.json')
            .then((response) => response.json())
        return response
    }

    fetchRedditData().then(dataObject => setContent(JSON.stringify(dataObject)))

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
          <p>Here is the JSON:</p>
          <p>{content}</p>
      </main>
    </client-for-reddit>
  );
}

export default App;
