import { useContext, useEffect, useState } from 'react';
import courses from '../data/courses.json'
import { AppContext } from './AppRoot';
import Course from './Course';

export default function Courses({searchString}:{searchString: string}) {

  useEffect(() => {
    filteredCourses = courses;
  }, [])
  
  const {tags} = useContext(AppContext);
  const displayedCourses = courses.filter((c) => c.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 || 
    c.number.toString().indexOf(searchString) !== -1 ||
    c.description.indexOf(searchString) !== -1
  )

  const filteredCoursesByPrereq = courses.filter((c) => {
    if (tags.length === 0) {
      return true;
    }
    for (let i = 0; i < tags.length; i++) {
      if (c.prereqs !== undefined) {
        if (c.prereqs.includes(tags[i])) {
          return true;
        }
      }
    }
    return false
  })

  let filteredCourses = displayedCourses.filter(value => filteredCoursesByPrereq.includes(value));
  // if (filteredCourses.length == 0) {
  //   filteredCourses = courses;
  // }


  return (
    <div className='course-grid-container'>
      <div className='course-grid'>
        {filteredCourses.map((c) => (
          <Course 
            key={`${c.dept}-${c.number}`}
            dept={c.dept}
            number={c.number}
            title={c.title}
            description={c.description}
            prereqs={c.prereqs}
          />
        ))}
      </div>
    </div>
  )
}