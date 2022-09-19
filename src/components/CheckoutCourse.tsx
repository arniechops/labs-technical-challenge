import '../css/style.css'

export default function CartCourse({course}: {course: any}) {

    //Shows a course in Checkout section at /checkout

    const {title, number, dept} = course
    return (
    <>
        <div className='checkout-course-card'>
            <span className='course-code'>{dept + ' ' + number}</span>
            <h3>{title}</h3>
        </div>
    </>
  )
}
