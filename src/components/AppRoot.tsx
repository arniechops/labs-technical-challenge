import React, {useEffect, useState} from 'react'
import Cart from './Cart'
import { CourseComponent } from './Course'
import Courses from './Courses'
import ModalComponent from './ModalComponent'
import Nav from './Nav'
import Search from './Search'
import courses from '../data/courses.json'

export const AppContext = React.createContext<null|any>(null);

//Root component for the entire app. This is is responsive to changes in window size for different computers

export default function AppRoot({handleCheckout}: {handleCheckout: any}) {

    //Setting local states
    const [searchString, setSearchString] = useState("");
    const [selectedCourseNumber, setSelectedCourseNumber] = useState<number>();
    const [cartCourses, setCartCourses] = useState<any[]>([]);
    const [tags, setTags] = useState<string[]>([]);

    const selectedCourse = courses.find(c => c.number === selectedCourseNumber)

    interface JSONObject {
        [x: string]: string;
    }

    //json file to color the courses
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

    //Handles a change in the search bar string
    function handleSearchStringChange(newSearchString: string) {
      setSearchString(newSearchString)
    }

    //Handles the selected course for the modal window to open
    function handleSelectCourse(code: number) {
        setSelectedCourseNumber(code)
    }

    //Handles adding a course to cart
    function handleCartAdd(code: number) {
        const newCourse = courses.find(c => c.number === code)
        if (!cartCourses.includes(newCourse)) {
            setCartCourses([...cartCourses, newCourse])
        }
    }

    //Handles removing a course from cart
    function handleCartRemove(code: number) {
        setCartCourses(cartCourses.filter(c => c.number !== code))
    }

    //Handle course prerequisite tags
    function handleTagSelect(tag: string) {
        setTags([...tags, tag])
    }

    function handleTagUnselect(tag: string) {
        setTags(tags.filter(t => tag !== t))
    }

    //Passes a context to all children so repeated passing through props and state is not necessary
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
