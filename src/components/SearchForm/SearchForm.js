import React from 'react'
import { useGlobalContext } from '../../context'

const SearchForm = () => {

    const { setSearchTerm } = useGlobalContext();

    return (
        <section className='section search'>
            <h2>Search Form Component</h2>
        </section>
    )
}

export default SearchForm;