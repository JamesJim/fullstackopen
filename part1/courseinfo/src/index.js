import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  console.log('headerprops:', props.course.name)

  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  console.log('partprops:', props)

  let partMapper = props.course.map(i => <p>{i.name} {i.exercises}</p>  )

  console.log('partMapper:',partMapper)

  return (
  <React.Fragment>
    {partMapper}
  </React.Fragment>  
  )
}

const Content = (props) => {
  console.log('contentprops:', props.course)
  
  return (
  <React.Fragment>
    <Part course={props.course.parts}/>
  </React.Fragment>  
  )
}

const Total = (props) => {
  console.log('totalprops:',props)

  let arrayOfExercises = props.course.parts.map(i => i.exercises);
  let reducer = (ac, cv) => ac + cv;
  let reduced = arrayOfExercises.reduce(reducer);

  console.log("arrayOfExercises:", arrayOfExercises);
  console.log("reducer:", reduced)

  return (
    <p>Number of exercises {reduced}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))