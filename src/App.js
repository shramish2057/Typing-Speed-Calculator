import React, { Component } from 'react';
import Check from './check';
import TypeSpeed from './typing_speed';
import TypeText from './type_text';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  text: TypeText(),
  userInput: '',
  symbols: 0,
  sec: 0,
  started: false,
  finished: false
}

class App extends Component {

  state = initialState;

  onRestart = () => {
    this.setState(initialState)
  }

  onUserInputChange = (e) => {
    const v = e.target.value;
    this.setTimer();
    this.onFinish(v)
    this.setState({
      userInput: v,
      symbols: this.countCorrectSymbols(v)
    })
  }

  onFinish(userInput) {
    if (userInput === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true
      })
    }
  }

  countCorrectSymbols(userInput) {
    const text = this.state.text.replace(' ', '');
    return userInput.replace(' ', '').split('').filter((s,i) => s === text[i]).length;
  }

  setTimer() {
    if (!this.state.started) {
      this.setState({started: true});
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return {sec: prevProps.sec + 1}
        })
      }, 1000)
    }
  }

  render() {
    return (
      <div className="container mt-3 mb-9">
        <h1><center>Typing Speed Calculator</center></h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Check text={this.state.text} userInput={this.state.userInput}/>
            <textarea
              value={this.state.userInput}
              onChange={this.onUserInputChange}
              className="form-control mb-3"
              placeholder="Start typing the text..."
              readOnly={this.state.finished}
            ></textarea>
            <TypeSpeed sec={this.state.sec} symbols={this.state.symbols}/>
            <div className="text-right">
              <center><button className="btn btn-dark" onClick={this.onRestart}>Restart</button></center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;