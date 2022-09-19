import React from 'react'
import PrereqFilter from './PrereqFilter'

export default function Search({handleSearchStringChange}:{handleSearchStringChange: (newSearchString:string) => any}) {

    //Represents search/filter area, Handles searchbar functionality
    //NOT responsible for filtering results, Courses.tsx does that

    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        handleSearchStringChange(event.currentTarget.value)
    }

    return (
        <div className='search-container'>
            <div className='search-bar-row'>
                <input type='text' id='search-bar' placeholder='Search for a course title, number, or description' onChange={handleChange}/>
                <PrereqFilter/>
            </div>
        </div>
    )
}
