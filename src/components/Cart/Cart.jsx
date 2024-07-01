import PropTypes from "prop-types"

const Cart = ({cartCourses, time, price}) => {

    return (
        <div className="bg-white p-6">
            <h2 className="text-[#2F80ED] font-bold text-lg">Credit Hour Remaining {20-time} hr</h2>

            <hr className="my-4" />

            <h2 className="font-bold text-xl mb-5">Course Name</h2>

            <div className="space-y-2">
                {
                    cartCourses.map((course, idx) => <p key={idx}> {idx+1}. {course.courseTitle} </p>)
                }
            </div>

            <hr className="my-4" />

            <p className="font-medium">Total Credit Hour : {time}</p>

            <hr className="my-4" />

            <p className="font-semibold">Total Price : {price} USD</p>
        </div>
    );
};

Cart.propTypes = {
    cartCourses: PropTypes.array,
    time: PropTypes.number,
    price: PropTypes.number,
}

export default Cart;