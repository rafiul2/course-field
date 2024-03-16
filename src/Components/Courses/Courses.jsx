import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import PropTypes from 'prop-types';

const Courses = ({handleSelectedCourse}) => {
  const [courses, setCourses] = useState([]);
  useEffect(() =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  }, [])
  return (
    <div className="md:w-10/12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {
        courses.map(course => <Course 
          key={course.id}
          course={course}
          handleSelectedCourse={handleSelectedCourse}></Course>)
      }
      </div>
    </div>
  );
};
Courses.propTypes = {
  handleSelectedCourse:PropTypes.func.isRequired
}

export default Courses;