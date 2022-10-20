import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Tile } from '../components/tile';

function App(props) {
    // const popular = await useSelector(state => state)

    /*
    const [content, setContent] = useState()

    fetchRedditData().then(response => setContent(response))

    const loadTiles = () => {
        if (!content) {
            return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="Loading..."/>
        } else {
            return (
                Object.entries(content.data.children).map(item => {
                    if (item[1].data.is_video) {
                        return <Tile title={JSON.stringify(item[1].data.title)} videoLink={item[1].data.secure_media.reddit_video.fallback_url}/>
                    } else {
                        return <Tile title={JSON.stringify(item[1].data.title)} src={item[1].data.url}/>
                    }
                })
            )
        }  
    }
    */
    return (
    <client-for-reddit>
      <header>
        <h1>Reddit Client: A Codecamy React/Redux project</h1>
      </header>
      <main>
        <section class="flex centered">
            <input id="search-bar" type="text" placeholder="Search for a subreddit..."/>
            <button>Search</button>
        </section>
        <section id="filter-buttons" class="flex centered">
            <button>Category</button>
            <button>Category</button>
            <button>Category</button>
            <button>Category</button>
            <button>Category</button>
            <button>Category</button>
            <button>Category</button>
            <button>Category</button>
        </section>
        <section class="flex">

        </section>
      </main>
      <footer>
        <p>All data comes from Reddit.</p>
      </footer>
    </client-for-reddit>
  );
}

export default App;
// export {fetchRedditData}