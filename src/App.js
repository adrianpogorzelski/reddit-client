import React from 'react';
import './App.css';
import Searchbar from "./components/searchbar/searchbar";
import Filters from './components/filters/filters'

const App = (props) => {
    return (
    <client-for-reddit>
      <header>
        <h1>Reddit Client: A Codecamy React/Redux project</h1>
      </header>
        <Filters />
        <Searchbar />
      <main>
          <section id="redditContent">

          </section>
      </main>
      <footer>
        <p>All data comes from Reddit.</p>
      </footer>
    </client-for-reddit>
  );
}

export default App;
