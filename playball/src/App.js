import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      strike: 0,
      ball: 0,
      foul: 0
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
            <div className="ballCounter">{this.state.ball}</div>
          </div>
        </div>
      </section>


      <section className="buttons">

        {/*STRIKE ON CLICK FUNCTION*/}
        <div className="strikeButtons">
          <button onClick={() =>{
            var strikes = this.state.strike 
            if(strikes >= 2){
              this.setState({strike:0})
            } else {
              this.setState({strike: this.state.strike+ 1})
            }
            console.log("this is strike", this.state.strike +1); 
          } 
          } >Strike</button>
        </div>



        {/*BALL ON CLICK FUNCTION*/}
        <div className="ballButtons">
          <button onClick={() => {
            var balls = this.state.ball
            if(balls === 4){
              this.setState({ball:0})
            } else {
              this.setState({ball: this.state.ball+ 1})
            }
            console.log("this is ball", this.state.ball + 1); 
          } 
            }>Ball</button>
        </div>

        {/*FOUL ON CLICK FUNCTION*/}
        <div className="foulButtons">
          <button onClick={() => {
            var strikes = this.state.strike
            if(strikes >= 2){
              this.setState({strike: 2})
            } else {
              this.setState({strike: this.state.strike+1})
            }
            console.log("this is foul"); 
          } 
            }>Foul</button>
        </div>

        {/*HIT ON CLICK */}
        <div className="hitButton">
          <button onClick={() => {
            this.setState({strike: this.state.strike=0, ball: this.state.ball=0 })
          } 
            }>Hit</button>
        </div>

      </section>
    </div>
    )
  }
}

export default App;
