import React, { Component } from 'react';


class App extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return 
        <div></div>
    }
}

export default App

// import React, { Component } from 'react';
// import { render } from 'react-dom';

// class App extends React.Component {
//   constructor(props){
//   super(props);
//   this.state = {}
//   }
//   render() {
//     return (
//       <div>
//         <h1>Thought Tracker, a way to gain discipline by understanding the inner workings of the mind</h1>
//         </Box>
//         return <button> send this mf </button> 
//       </div>
//     )
//   }
// would like to implement a box that has the first 3 success reminder cards

// create a box to hold data of current card

// class Box extends React.Component {
//   render() {
//     return (
//       <button onClick={this.props.handleClick} className= "bttn" > {'hello'} </button>
//     );
//   }
  
//   }
  
  // componentDidUpdate() {
  //   this.timer = setInterval(() => {
  //     this.handleClick();
  //   }, 300);
  // }
  // timer = () => {
  //   setInterval(this.handleClick, 300)
  // }


  // componentWillUnMount() {
  //   clearInterval(this.timer);
  // }



// render(<App />, document.querySelector('#root'));
