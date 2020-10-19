import React,{useState} from 'react';




const Search = props => {
    const {handleInput , search} = props;
    return(
        <section className='searchbox-wrap'>
            <input type='text' placeholder='Search for a movie...' className='searchbox'
              onChange={handleInput}
              onKeyPress={search} />
      

        </section>
    )
}
export default Search;