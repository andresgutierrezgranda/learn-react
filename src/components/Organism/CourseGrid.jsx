import React from 'react'
import withLoader from '../HOC/withLoader'
import CourseCard from '../Molecules/CourseCard'

const CourseGrid = ({courses}) => (
    
    <div className="ed-grid m-grid-4"> 
    {console.log(courses)}              
        { courses.map(c => (<CourseCard key={c.id} id={c.id} title={c.title} image={c.image} price={c.price} profesor={c.professor}/>))}
    </div>
    
)

export default withLoader("courses")(CourseGrid)