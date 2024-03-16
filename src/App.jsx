import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import SelectedCourses from './Components/SelectedCourses/SelectedCourses'

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const handleSelectedCourse = (course, credit) => {
    if(!selectedCourse.includes(course)){
      setSelectedCourse([...selectedCourse, course]);
    }
     const newTotalCredit = totalCredit + credit;
     const newRemainingCredit = remainingCredit - credit;
    if(newTotalCredit <= 20 && newRemainingCredit >= 0){
      setTotalCredit(newTotalCredit);
      setRemainingCredit(newRemainingCredit);
    }
  }

  return (
    <div className="mt-6">
      <h2 className="text-4xl text-center">Course Registration</h2>
      <div className='md:flex max-w-5xl mx-auto mt-4'>
       <Courses
       handleSelectedCourse={handleSelectedCourse}
       ></Courses>
       <SelectedCourses
       remainingCredit={remainingCredit}
       totalCredit={totalCredit}
       selectedCourse={selectedCourse}></SelectedCourses>
      </div>
    </div>
  )
}

export default App
