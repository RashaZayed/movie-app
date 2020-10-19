import React,{useState} from 'react';
import Search from './components/Search'
import axios from 'axios' 
import Results from './components/Results'
import Popup from './components/Popup'



function App() {
  const [state , setState] = useState({
    s: '',
    results:[],
    selected: {}
  })
  const apiurl = 'http://www.omdbapi.com/?apikey=ae66f716';

   

  const handleInput = e => {
    
  
    setState({
      ...state,
      s:  e.target.value
    })
   
   
  }

  const search = e => {
    if (e.key === 'Enter'){
      axios(apiurl + '&s=' + state.s).then(({data})=> {
        console.log(data);
     

        setState ({
          ...state ,
          results : data.Search ,
        })
        console.log(state.results);
      });
    }
  }

  
    
  const openPopup = id => {
    console.log(id);
    axios(apiurl + '&i=' + id).then(({data})=>{
      let result = data;
      console.log(data)
      setState({
        ...state,
        selected: result ,
     
      })
    })
  }

  const closePopup = () => {
    setState ( {
     ...state,
     selected: {},
    });
  }
  return (
    <div className="App">
      <header >
        <h1>Movie Database</h1>
        <main>
          <Search handleInput={handleInput} search={search}/>
          <Results results={state.results} openPopup = {openPopup} />
          {(typeof state.selected.Title != 'undefined') ? <Popup selected={state.selected} closePopup={closePopup} />:  false }

        </main>
       
      </header>
    </div>
  );
}

export default App
