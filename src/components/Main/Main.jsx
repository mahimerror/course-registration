import { useState } from "react";
import Course from "../Course/Course";
import { useEffect } from "react";
import Cart from "../Cart/Cart";

const Main = () => {

  const [courses, setCourses] = useState([]);

  const [cartCourses, setCartCourses] = useState([]);

  const [time, setTime] = useState(0);

  const [price, setPrice] = useState(0);

  const handleCart = (course) => {
    if (cartCourses.some(obj => obj.id === course.id)) {
      alert("This course already in Cart ...");
    }
    else if(time+course.credit>20){
      alert("You Don't add it, You Don,t have remaining time ...");
    }
    else {
      const newcartCourse = [...cartCourses, course];
      setCartCourses(newcartCourse);
      setTime(time + course.credit);
      setPrice(price + course.price);
    }
  }

  useEffect(() => {
    fetch('/public/courses.json')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, [])

  return (
    <div className="container mx-auto pb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            courses.map(course => <Course
              key={course.id}
              handleCart={handleCart}
              course={course}></Course>)
          }
        </div>
        <div className="min-w-[25%] mt-8 lg:mt-0">
          <Cart
            time={time}
            price={price}
            cartCourses={cartCourses}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Main;