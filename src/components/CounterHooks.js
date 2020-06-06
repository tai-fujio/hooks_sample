import React, {useState} from 'react'

function CounterHooks() {
  const[count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }
  const incrementCountTen = () => {
    setCount(prevCount => prevCount + 10)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+1</button>
      <button onClick={incrementCountTen}>+10</button>
    </div>
  )
}
// class CounterHooks extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       count: 0,
//     }
//   }

//   incrementCount = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   render(){
//     return(
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.incrementCount}>+</button>
//       </div>
//     )
//   }
// }

export default CounterHooks
