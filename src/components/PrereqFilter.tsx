import React, { useContext, useState } from 'react'
import '../css/style.css'
import { AppContext } from './AppRoot';
import DropdownElement from './DropdownElement';

export default function PrereqFilter() {

    //Generates a dropdown of prerequsites to filter by and manages clicking functionality

    //This is multiselect - if I click CIS 120, I will get courses only with a 120 prereq
    //If I select 160 too, I will get courses a CIS 160 prereq OR a CIS 120 prereq

    const [open, setOpen] = useState(false);
    const {tags, allCoursePrereqsColors} = useContext(AppContext);

    //Storing all course prereq names
    const allCoursePrereqNames = ['CIS 120','CIS 160','CIS 240','CIS 110','ESE 112','CIS 262','CIS 320',
    'MATH 312/314','CIS 400','ESE 301','TH 104','CIS 121','PHYS 151']

    return (
        <div className='dropdown'>
            <div className='dropdown-header' onClick={() => setOpen(!open)}>{'Filter by Prerequisite'}</div>
            <div className='options'>
                {open && allCoursePrereqNames.map((str) => {
                    let color = 'grey'
                    if (allCoursePrereqsColors[str] !== undefined) {
                        color = allCoursePrereqsColors[str]
                    }
                    
                    return <DropdownElement name={str} style={{backgroundColor: color}} isSelected={tags.includes(str) ? true : false}/>
                })}
            </div>
        </div>
  )
}
