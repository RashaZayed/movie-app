import React from 'react'

const Result = props => {
    const {result , openPopup} = props;
    
    return(
        <div className='result' onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster} />
            <h3>{result.Title}</h3>
        </div>

    )
}
export default Result; 