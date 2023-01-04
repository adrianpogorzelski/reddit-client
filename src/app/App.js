import React from 'react';
import './App.css';
import Filters from '../components/filters/filters'

const App = (props) => {
    return (
    <client-for-reddit>
      <header>
        <h1>Reddit Client: A Codecamy React/Redux project</h1>
      </header>
      <main>
        <section className="flex centered">
            <input id="search-bar" type="text" placeholder="Search for a subreddit..."/>
            <button>Search</button>
        </section>
          <Filters />
        <section id="storeRender">
            <h2>Select a category</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Loading_Key.gif" alt="Loading" />
        </section>
      </main>
      <footer>
        <p>All data comes from Reddit.</p>
      </footer>
    </client-for-reddit>
  );
}

export default App;
