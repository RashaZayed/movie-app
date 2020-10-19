import React, { useState } from "react";
import Search from "./components/Search";
import axios from "axios";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl = "http://www.omdbapi.com/?apikey=ae66f716";

  const handleInput = (e) => {
    //function to get the input of the user and set to state.s
    setState({
      ...state,
      s: e.target.value,
    });
  };

  const search = (e) => {
    //function to set the rsults of the search set to state.results
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        console.log(data);

        setState({
          ...state,
          results: data.Search,
        });
        console.log(state.results);
      });
    }
  };

  const openPopup = (id) => {
    //once I hit this movie,this function will pass it's id(result.imdbID) and set the result to selected to be able to git more info about the movie(in Popup component)

    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(data);
      setState({
        ...state,
        selected: result,
      });
    });
  };

  const closePopup = () => {
    // this function let us close the Popup movie
    setState({
      ...state,
      selected: {},
    });
  };
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
        <main>
          <Search handleInput={handleInput} search={search} />
          <Results results={state.results} openPopup={openPopup} />
          {typeof state.selected.Title != "undefined" ? (
            <Popup selected={state.selected} closePopup={closePopup} />
          ) : (
            false
          )}
        </main>
      </header>
    </div>
  );
}

export default App;
