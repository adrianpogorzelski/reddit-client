import React from 'react';
import './App.css';
import Searchbar from "../components/searchbar/searchbar";
import Filters from '../components/filters/filters'
import {setSubreddit} from "../features/search";

setSubreddit()

const App = (props) => {
    return (
    <client-for-reddit id="client">
      <header>
        <h1>Reddit Client: A Codecamy React/Redux project</h1>
      </header>
      <main>
          <nav>
              <Searchbar />
              <Filters />
          </nav>
          <section id="storeRender">
            <h2>r/Popular</h2>
              <article>{

              }</article>
          </section>
      </main>
      <footer>
        <p>All data comes from Reddit.</p>
      </footer>
    </client-for-reddit>
  );
}

export default App;
