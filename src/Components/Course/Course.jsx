import PropTypes from 'prop-types';

const Course = ({course, handleSelectedCourse}) => {
  const {title, img, price, credit, description} = course;
  return (
    <div className="">
      <div className='bg-gray-200 p-4 m-2 rounded-lg space-y-4'>
        <img className='w-full' src={img}  />
        <h2 className='text-2xl'>{title}</h2>
        <p>{description}</p>
        <div className='flex justify-center space-x-4'>
          <p>Price: {price} </p>
          <p>credit: {credit} </p>
        </div>
        <button onClick={() => handleSelectedCourse(course, credit)} className='bg-blue-500 p-1 w-full rounded-lg text-slate-100'>Select</button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectedCourse:PropTypes.func.isRequired
};

export default Course;