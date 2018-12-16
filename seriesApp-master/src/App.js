import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Series from "./Series";
import Movies from "./Movies";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then(res => res.json())

      .then(
        result => {
          this.setState({
            isLoaded: true,
            error: null,
            items: result.entries,

          });
        }
        
        ,
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
     
  }
  

  render() {
      const { error, isLoaded, items} = this.state;

    if (error) {
      return <div>Oops.. Something went wrong..</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>         
            <Header />
            <Home  /> 
          <Movies {...this.state} />
          <Series {...this.state} />      
        </div>
      );
    }
  }
}

export default App;
