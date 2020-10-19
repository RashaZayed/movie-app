import React from 'react';
import Result from './Result'

const Results = props => {
    const {results , openPopup} = props;

    return (
        <section className='results' >
           {
               results.map( result => {
                  return( <Result key={result.imdbID} result={result} openPopup={openPopup} />)
               })
           }
        </section>

    )
}
export default Results;