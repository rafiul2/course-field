import PropTypes from 'prop-types';

const SelectedCourse = ({course}) => {
  console.log(course)
  const {title} = course;
  return (
    <div>
      <h4 className='text-2xl'>{title}</h4>
    </div>
  );
};

SelectedCourse.propTypes = {
  course: PropTypes.object.isRequired
};

export default SelectedCourse;