import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      strike: 0,
      Ball: 0
    };
  }


  
  render(){
    return(
      <div className="App">
      <section className="tracker">
        <div className="topRow">
          <div className="strikeBox">
            <h2 className="strike">Strike</h2>
            <div className="strikeCounter">{this.state.strike}</div>
          </div>
          <div className="BallBox">
            <h2 className="Ball">Ball</h2>
            <div className="ballCounter">{this.state.Ball}</div>
          </div>
        </div>
      </section>
      <section className="buttons">
        <div className="strikeButtons">
          <button onClick={() =>{
            console.log("this is strike", this.state.strike +1); 
            let strikes = this.state.strike 
            if(strikes === 3){
              this.setState({strike:0})
            } else {
              this.setState({strike: this.state.strike+ 1})
            }
            } 
          } >Strike</button>
        </div>
        <div className="ballButtons">
          <button onClick={() => {
            console.log("this is ball", this.state.Ball + 1); 
            let balls = this.state.Ball
            if(balls === 4){
              this.setState({Ball:0})
            } else {
              this.setState({Ball: this.state.Ball+ 1})
            }
          } 
            }>Ball</button>
        </div>
      </section>
    </div>
    )
  }
}

export default App;
