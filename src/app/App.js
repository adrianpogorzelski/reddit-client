import React from 'react';
import './App.css';
import Searchbar from "../components/searchbar/searchbar";
import Filters from '../components/filters/filters'

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
