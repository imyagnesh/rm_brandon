import React, { Component, createRef } from "react";
import PropTypes from "prop-types";



// What is Props
// To pass data from parent componenent to child component
// Props are immutable

// State Value
// Life cycle Methods

/// Your component will rerender when your state value or props value change

let abc = "ABC";

// Mounting
// -> Contructor
// -> getDerivedStateFromProps (static).
// -> render
// -> componentDidMount

// Updating
// -> getDerivedStateFromProps
// -> shouldComponentUpdate
// -> render
// -> componentDidMound

// UnMounting
// Error Handling


class App extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    clientName: PropTypes.string,
  };

  static defaultProps = {
    clientName: "",
  };

  nameRef = createRef();

  state = {
    name: "Yagnesh",
  };

  constructor(props) {
      super(props);
      console.log('constructor');
  }

  // Before Render if you want to change data
  static getDerivedStateFromProps(props, state) {
    //   console.log('getDerivedStateFromProps', props);
    //   console.log('getDerivedStateFromProps', state);
      console.log('getDerivedStateFromProps');
      // convert to your new State Value
      return {
          ...state,
          greetClient: `Hello, ${props.clientName}`
      }

  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate');
        //   if(this.props !== nextProps || this.state !== nextState) {
        //       return true;
        //   }
      return true;
  }
  

  componentDidMount() {
      console.log('componentDidMount');
    //   document.addEventListener('copy', () => {
    //       console.log('coppied');
    //   }) 

    // fetch data;

    this.nameRef.current.style = "color:red";
  }

  componentDidUpdate(prevProps, prevState) {
      
  }
  
  

  //   getData() {
  //       return <span>Hello</span>
  //   }

  clickMe = () => {
    this.setState({ name: "Brandon" });
  }

  render() {
    console.log("render method");
    const { message } = this.props;
    const { name, greetClient } = this.state;
    return (
      <>
        <input type="abc" />
        <h1 ref={this.nameRef}>{name}</h1>
        <h1>{message.toUpperCase()}</h1>
        <h1>{greetClient}</h1>
        <button type="button" onClick={this.clickMe}>
          Click Me
        </button>
      </>
    );
  }
}

// const App = ({ message, agenda }) => {
//   return (
//     <>
//       <input type="abc" />
//       <h1>{message.toUpperCase()}</h1>
//       <h1>{agenda}</h1>
//     </>
//   );
// };

// App.propTypes = {
//   message: PropTypes.string.isRequired,
//   agenda: PropTypes.string,
// };

// App.defaultProps = {
//   agenda: "None",
// };

export default App;
