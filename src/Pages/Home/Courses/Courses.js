import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
            .then(data => setCourses(data))
    },[])
    return (
        <div className='h-full'>
            <div>
                <h1>Our Top Online Courses</h1>
            </div>
            <div className='grid grid-cols-4 gap-5 mx-24'>
                {
                    courses.map(course => <CourseCard
                        key={course._id}
                        course={course}
                    ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;