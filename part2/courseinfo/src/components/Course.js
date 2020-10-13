import React from 'react'
  
  const Total = ({ course }) => {
    console.log('Total: ',{course});
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = course.parts.map(i => i.exercises).reduce(reducer)
  
    return(
      <h4>Total of {sum} exercises</h4>
    ) 
  }

  const Part = ( {part} ) => {
    console.log('Part: ', {part});
  
  
    return (
      <React.Fragment>
        {part.map( part => 
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>)}
      </React.Fragment>   
    )
  }

  const Content = ({ course }) => {
    console.log('Content: ', course.parts);
  
    return (
      <div>
        <Part part={course.parts} />
      </div>
    )
  }

  const Header = ({ course }) => {
    return (
      <h3>{course.name}</h3>
    )
  }
  
  const Course = ( {course} ) => {
    console.log('Course: ',{course});
    return(
      <React.Fragment>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </React.Fragment>
    )
  }

export default Course