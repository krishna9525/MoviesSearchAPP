import React from 'react'
import { useGlobalContext } from '../../context'

const Search = () => {

  const { query, setQuery, isError } = useGlobalContext();




  return (
    <>
      <div>

        <section className="search-section">
          <h2>Search Your Movies Here</h2>
          <form  onSubmit={(e) => e.preventDefault()}>

            <div>
              <input type="text" placeholder='Search here' value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
          </form>

          <div className='card-error'>
            <p>{isError.show && isError.msg}</p>

          </div>

        </section>




      </div>
    </>

  )
}

export default Search