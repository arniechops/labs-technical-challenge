import React from 'react'
import { AppContext } from './AppRoot'
import '../css/style.css'

export default function ModalComponent({course}: {course:any}) {

    //Handles the modal component that pops up when the user clicks 'Learn More' on a course

    //Setting state
    const {handleSelectCourse, allCoursePrereqs} = React.useContext(AppContext)
    const {title, description, prereqs} = course;
    
    //Bifuracted prerequisites based on length of string - some prerequisites are courses and others are suggestions
    let coursePrereqs: string[] = []
    let otherPrereqs: string[] = []

    if (prereqs !== undefined) {
        coursePrereqs = prereqs.filter((str:string) => str.length <= 12)
        otherPrereqs = prereqs.filter((str:string) => str.length >= 15)
    }


    //Shows cross-listed courses too, if any
  return (
    <div className='modal-back'>
        <div className='modal-card'>
            <div className='modal-header'>
                <h2>{title}</h2>
                <button className='btn-cross' onClick={()=>handleSelectCourse()}>&times;</button>
            </div>
            <div className='modal-body'>
                <div className='cross-listed-row'>
                    {course['cross-listed'] &&
                        <span className='span-bold'>Cross-listed : &nbsp;</span>
                    }
                    {course['cross-listed'] && 
                    course['cross-listed'].map((str:string) => {
                        return <span className='course-prereq-span' style={{backgroundColor: 'grey'}}>{str}</span>
                    })}
                </div>
                <div className='course-prereq-row'>
                    {!prereqs && <span className='span-bold'>Prereqs : None</span>}
                    {coursePrereqs.length !== 0 && <span className='span-bold'>Prereqs : &nbsp;</span>}
                    {prereqs && coursePrereqs.map((str:string) => {
                        let color = 'grey';
                        if(allCoursePrereqs[str] !== undefined) {
                            color=allCoursePrereqs[str]
                        }
                        return <span className='course-prereq-span' style={{backgroundColor: color}}>{str}</span>
                    })}
                </div>
                {otherPrereqs.length > 0 && <div className='other-prereq-row'>
                    <span className='span-bold'>Other Prereqs : &nbsp; {otherPrereqs.join(' ,')}</span>
                </div>}
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}
