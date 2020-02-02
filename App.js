class Counter extends React.Component {

  state = {
    count: 0,
    result: 0
  }

  handleMathClick = (type, number) => {
    if (type === "minus") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result - number
      }))
    } else if (type === 'reset') {
      this.setState(prevState => (
        {
          count: prevState.count + 1,
          result: 0
        }
      ))
    } else if (type === 'dod') {
      this.setState(prevState => (
        {
          count: prevState.count + 1,
          result: prevState.result + number
        }
      ))
    }
  }
  render() {
    return (
      <>
        <MathButton
          name='-10'
          number='10'
          type='minus'
          click={this.handleMathClick}
        />
        <MathButton
          name='-1'
          number='1'
          type='minus'
          click={this.handleMathClick}
        />
        <MathButton
          name='reset'
          type='reset'
          click={this.handleMathClick}
        />
        <MathButton
          name='+1'
          number='1'
          type='dod'
          click={this.handleMathClick}
        />
        <MathButton
          name='+10'
          number='10'
          type='dod'
          click={this.handleMathClick}
        />
        <ResultPanel count={this.state.count} result={this.state.result} />
      </>
    )
  }
}
const MathButton = (props) => {
  const numb = parseInt(props.number)
  return (
    <button onClick={() => props.click(props.type, numb)}>{props.name}</button>
  )
}

const ResultPanel = (props) => {
  return (
    <React.Fragment>
      <h1>Number {props.count}</h1>
      <h1>Result: {props.result}</h1>
    </React.Fragment>
  )
}
const startValue = 0;
ReactDOM.render(<Counter result={startValue} />, document.getElementById("root"))