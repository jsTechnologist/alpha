const Course =( props)=>{
    return(
        <div  style={{ backgroundColor: props.course.isCompleted? "green" : "red" }}  >
           <h1  > {props.course.courseName} </h1>
           <button   onClick={()=> props.deleteCourse (props.course.id )} > delete </button>
           <button  onClick={()=> props.completeCourse (props.course.id)} > completed </button>
          </div>
    )
};
export default Course;