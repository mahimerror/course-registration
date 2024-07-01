import PropTypes from "prop-types"
import { FaDollarSign } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

const Course = ({ course, handleCart}) => {

    const { image, courseTitle, description, price, credit } = course;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-full">
                <figure>
                    <img
                        src={image}
                        alt={courseTitle} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{courseTitle}</h2>
                    <p>{description}</p>

                    <div className="flex lg:flex-col my-6">
                        <p className="flex items-center gap-2">
                            <FaDollarSign />Price : {price}
                        </p>
                        <p className="flex items-center gap-2">
                            <IoBookOutline />Credit : {credit}hr
                        </p>
                    </div>

                    <div className="card-actions">
                        <button onClick={() => handleCart(course)} className="btn btn-primary w-full">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleCart: PropTypes.func
}

export default Course;