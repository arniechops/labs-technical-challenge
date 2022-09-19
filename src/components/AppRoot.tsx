import React, {useEffect, useState} from 'react'
import Cart from './Cart'
import { CourseComponent } from './Course'
import Courses from './Courses'
import ModalComponent from './ModalComponent'
import Nav from './Nav'
import Search from './Search'
import courses from '../data/courses.json'

export const AppContext = React.createContext<null|any>(null);

export default function AppRoot({handleCheckout}: {handleCheckout: any}) {

    const [searchString, setSearchString] = useState("");
    const [selectedCourseNumber, setSelectedCourseNumber] = useState<number>();
    const [cartCourses, setCartCourses] = useState<any[]>([]);
    const [tags, setTags] = useState<string[]>([]);

    const selectedCourse = courses.find(c => c.number === selectedCourseNumber)

    interface JSONObject {
        [x: string]: string;
    }

    const allCoursePrereqs : JSONObject = {
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

    function handleSearchStringChange(newSearchString: string) {
      setSearchString(newSearchString)
    }

    function handleSelectCourse(code: number) {
        setSelectedCourseNumber(code)
    }

    function handleCartAdd(code: number) {
        const newCourse = courses.find(c => c.number === code)
        if (!cartCourses.includes(newCourse)) {
            setCartCourses([...cartCourses, newCourse])
        }
    }

    function handleCartRemove(code: number) {
        setCartCourses(cartCourses.filter(c => c.number !== code))
    }

    // Tags

    function handleTagSelect(tag: string) {
        setTags([...tags, tag])
    }

    function handleTagUnselect(tag: string) {
        setTags(tags.filter(t => tag !== t))
    }

    const appContextValue = {
        handleSearchStringChange, 
        handleSelectCourse,
        handleCartAdd,
        handleCartRemove,
        cartCourses,
        handleTagSelect,
        handleTagUnselect,
        tags,
        handleCheckout,
        allCoursePrereqs
    }

    let testCourse = {
        "dept": "CIS",
        "number": 461,
        "title": "Advanced Renderin",
        "prereqs": [
          "Working knowledge of C++ programming",
          "Knowledge of vector geometry"
        ],
        "description": "This course is designed to provide a comprehensive  overview to computer graphics techniques in 3D modeling, image synthesis, and rendering. Topics   cover: geometric transformations, geometric algorithms, software systems, 3D object models (surface, volume and implicit), visible surface algorithms, image synthesis, shading, mapping, ray tracing, radiosity, global illumination, sampling, anti-aliasing, Monte Carlo path tracing, and photonmapping. Prerequisites: A working knowledge of C++ programming isrequired (one year programming experience in general). Knowledge of vector geometry is useful."
      }

  return (
    <AppContext.Provider value={appContextValue}>
        <Nav/>
        <Cart courses={cartCourses}/>
        <Search handleSearchStringChange={handleSearchStringChange}/>
        <Courses searchString={searchString}/>
        {selectedCourse && <ModalComponent course={selectedCourse}/>}
    </AppContext.Provider>
  )
}
