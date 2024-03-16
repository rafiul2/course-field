import PropTypes from 'prop-types';
import SelectedCourse from '../SelectedCourse/SelectedCourse';

const SelectedCourses = ({selectedCourse, totalCredit, remainingCredit}) => {
  return (
    <div className="md:w-2/12 ml-8">
      <h3 className="text-green-600">Course Remaining Course: {remainingCredit} </h3>
      <hr />
      <h3>Course Name</h3>
      <div>
      {
        selectedCourse.map(course => <SelectedCourse
        key={course.id}
        course = {course}
        ></SelectedCourse>)
      }
      </div>
      <hr />
      <h3> Total Credit: {totalCredit} </h3>
    </div>
  );
};

SelectedCourses.propTypes = {
  selectedCourse: PropTypes.array.isRequired,
  totalCredit:PropTypes.number.isRequired,
  remainingCredit: PropTypes.number.isRequired
};

export default SelectedCourses;