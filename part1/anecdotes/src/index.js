import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  console.log("Button: ",{handleClick, text});
  return(
  <button onClick={handleClick}>{text}</button>
  )
}

const Buttons = ({ type }) => {
  console.log("Buttons: ",{type})
  return(
    <React.Fragment>
      <Button handleClick={type[0].handleClick} text={type[0].text} />
      <Button handleClick={type[1].handleClick} text={type[1].text} />
    </React.Fragment>
  )
}

const DisplayQuote = ({ anecdotes, text }) =>{
  console.log("DisplayQuote: ",{anecdotes})
  return(
    <React.Fragment> 
      <h1>{text}</h1>
      <div style={{"height" : "125px"}}>
        {anecdotes}
      </div>
      <br />
    </React.Fragment>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))
  const [highestVotegetter, setHighestVotegetter] = useState(0)
  const [indexOfHighestVotegetter, setIndexOfHighestVotegetter] = useState(0)

  console.log("votes: ",votes)

  const handleVotes = () => {
    let copyOfVotes = [...votes]
    copyOfVotes[selected] += 1
    setVotes(copyOfVotes)
    setHighestVotegetter(Math.max(...copyOfVotes))
    setIndexOfHighestVotegetter(copyOfVotes.indexOf(Math.max(...copyOfVotes)))
  }

  const buttonArray = [
    {
      handleClick: () => setVotes(handleVotes),
      text: "Upvote"
    },
    {
      handleClick: () => setSelected(Math.floor(Math.random()*anecdotes.length)),
      text: "Next random anecdote"
    }
  ]

  return (
    <React.Fragment>
      <DisplayQuote anecdotes={anecdotes[selected]} text="Anecdote of the Day" />
      <Buttons type={buttonArray} />
      { highestVotegetter === 0 ? (
      <p>Vote for your favorite!</p>
      ) : (
        <DisplayQuote anecdotes={anecdotes[indexOfHighestVotegetter]} text="Anecdote with most votes"/>
      )
      }
    </React.Fragment>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)