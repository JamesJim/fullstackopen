import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const SectionTitle = ({ text }) => (
<h1>{text}</h1>
)

const Button = ({ handleClick, text }) => {
  console.log("Button: ", { handleClick, text })

  return(
    <React.Fragment>
      <button onClick={handleClick}>{text}</button>
    </React.Fragment>
  )
}

const Buttons = ({ types }) => {
  console.log("Buttons: ",{ types })
  return(
    <React.Fragment>
      <Button handleClick={types[0].handleClick} text={types[0].text} />
      <Button handleClick={types[1].handleClick} text={types[1].text} />
      <Button handleClick={types[2].handleClick} text={types[2].text} />
    </React.Fragment>

  )
}

const Statistic = ({ text, value }) => {
  console.log("Statistic: ",{text,value})
  
  if(text === "positive"){
    return(
      <tr>
        <td>{text}</td><td>{value}%</td>
      </tr>
  )
  } else{
    return(
      <tr>
        <td>{text}</td><td>{value}</td>
      </tr>
    )   
  }
}

const Statistics = ({ data }) => {
  console.log("Statistics: ", { data })
  
  if(data[3].value===0){
    return(
    <React.Fragment>
      <p>No feedback given</p>
    </React.Fragment>)
  }else{
    return(
      <table>
        <tbody>
          <Statistic text={data[0].text} value={data[0].value} />
          <Statistic text={data[1].text} value={data[1].value} />
          <Statistic text={data[2].text} value={data[2].value} />
          <Statistic text={data[3].text} value={data[3].value} />
          <Statistic text={data[4].text} value={data[4].value} />
          <Statistic text={data[5].text} value={data[5].value} />
        </tbody>
      </table>)
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let feedbackCount = good + neutral + bad;
  let average = (good-bad)/(feedbackCount);
  let positive = (good/(feedbackCount))*100;

  let buttonArray =[
    {handleClick: () => setGood(good+1),
    text: "good"},
    {handleClick: () => setNeutral(neutral+1),
      text: "neutral"},
    {handleClick: () => setBad(bad+1),
      text: "bad"}
  ]

  let statsArray = [
    {text: "good",
    value: good},
    {text: "neutral",
    value: neutral},
    {text: "bad",
    value: bad},
    {text: "all",
    value: feedbackCount},
    {text: "average",
    value: average.toFixed(1)},
    {text: "positive",
    value: positive.toFixed(1)}
  ];
  
  return (
    <React.Fragment>
      <SectionTitle text="give feedback" />
      <Buttons types={buttonArray}/>
      <SectionTitle text="statistics" />
      <Statistics data={statsArray}/>
    </React.Fragment>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
