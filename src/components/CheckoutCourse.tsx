import '../css/style.css'

export default function CartCourse({course}: {course: any}) {
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
