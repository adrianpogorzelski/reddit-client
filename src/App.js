import React from 'react';
import './App.css';
import {buttonClick} from './store/store'

function App(props) {
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
        <section id="filter-buttons" className="flex centered">
            <button subreddit="Popular" onClick={() => buttonClick('Popular')}>Popular</button>
            <button subreddit="Other" onClick={() => buttonClick('Other')}>Other</button>
            <button>Category</button>
            <button>Category</button>
            <button>Category</button>
            <button>Category</button>
            <button>Category</button>
            <button>Category</button>
        </section>
        <section className="flex" id="storeRender">
        </section>
      </main>
      <footer>
        <p>All data comes from Reddit.</p>
      </footer>
    </client-for-reddit>
  );
}

export default App;
