import React, { useContext, useEffect, useState } from 'react'
import '../css/style.css'
import {AppContext} from './AppRoot'

export interface CourseComponent {
    dept: string;
    number: number;
    title: string;
    description: string;
    prereqs?: string[];
    "cross-listed"?: [];
}

export default function Course(props: CourseComponent) {

    //Handles all functionality of a single course component

    //Setting state
    const {dept, number, title, description, prereqs} = props;

    const {handleSelectCourse, handleCartAdd, cartCourses, allCoursePrereqs} = useContext(AppContext);
    const [inCart, setInCart] = useState(false);

    //Changes the setInCart boolean when the cart changes to check how to color the button
    useEffect(() => {
        setInCart(cartCourses.find((c:any) => c.number === number))
    }, [cartCourses])

    let coursePrereqs: string[] = []

    //Gets the course prereqs - I realized that course names are about 7-11 in length
    if (prereqs !== undefined) {
        coursePrereqs = prereqs.filter((str) => str.length <= 12)
    }

    return (
        <div className='course-card'>
            <div className='course-header'>
                <span className='course-code'>{dept + ' ' + number}</span>
                <h3>{title}</h3>
                <div className='course-prereq-row'>
                    {coursePrereqs.length !== 0 && <span className='span-bold'>Prereqs : &nbsp;</span>}
                    {prereqs && coursePrereqs.map((str:string) => {
                        let color = 'grey';
                        if(allCoursePrereqs[str] !== undefined) {
                            color=allCoursePrereqs[str]
                        }
                        return <span className='course-prereq-span' style={{backgroundColor: color}}>{str}</span>
                    })}
                </div>
            </div>
            <div className='course-body'>{description}</div>
            <div className='course-footer'>
                <button className='btn btn-yellow' onClick={() => handleSelectCourse(number)}>Know More</button>
                <button className={inCart ? 'btn-greyed' : 'btn btn-add'} onClick={()=>{
                    handleCartAdd(number)
                    setInCart(true)
                }}>{inCart ? 'In Cart' :' Add to Cart'}</button>
            </div>
        </div>
    )
}
