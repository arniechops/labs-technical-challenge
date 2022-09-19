import React, { useContext, useState } from 'react'
import '../css/style.css'
import { AppContext } from './AppRoot';
import DropdownElement from './DropdownElement';

export default function PrereqFilter() {
    const [open, setOpen] = useState(false);
    const {tags} = useContext(AppContext);

    interface JSONObject {
        [x: string]: string;
    }
    const allCoursePrereqsColors : JSONObject = {
        'CIS 120': '#34568b',
        'CIS 160': '#ff6f61',
        'CIS 240': '#6b5b95',
        'CIS 110': '#926aa6',
        'ESE 112': '#45b8ac',
        'CIS 262': '#d2386c',
        'CIS 320': '#efc050',
        'MATH 312/314': '#5b5ea6',
        'CIS 400': '#9b2335',
        'ESE 301': '#45b8ac',
        'MATH 104': '#98b4d4',
        'CIS 121': '#ffa500',
        'PHYS 151': '#dc793e'
    }

    const allCoursePrereqs = ['CIS 120','CIS 160','CIS 240','CIS 110','ESE 112','CIS 262','CIS 320',
    'MATH 312/314','CIS 400','ESE 301','TH 104','CIS 121','PHYS 151']

    return (
        <div className='dropdown'>
            <div className='dropdown-header' onClick={() => setOpen(!open)}>{'Filter by Prerequisite'}</div>
            <div className='options'>
                {open && allCoursePrereqs.map((str) => {
                    let color = 'grey'
                    if (allCoursePrereqsColors[str] !== undefined) {
                        color = allCoursePrereqsColors[str]
                    }
                    // return <div className='dropdown-element'>
                    //     <span className='course-prereq-span' style={{backgroundColor: color}}>{str}</span>
                    // </div>
                    
                    return <DropdownElement name={str} style={{backgroundColor: color}} isSelected={tags.includes(str) ? true : false}/>
                })}
            </div>
        </div>
  )
}
