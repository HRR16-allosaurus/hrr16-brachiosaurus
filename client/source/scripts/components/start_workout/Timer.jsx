import React from 'react';

export default class Timer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      timerStarted: false,
      end: false,
      id: null
    }
  }
  
  startTimer() {
    this.setState({
      timerStarted: true
    })
  }
  
  timer() {
    // console.log('hello');
    let time = 30000;
    const id = setInterval( () => {
      time -= 1000;
      if(time < 0) {
        this.setState({
          timerStarted: false,
          end: true
        });
        this.clear(id);
      } else {
        $('#timer').text(time/1000);
      }
    }, 1000)
  }
  
  clear(id) {
    clearInterval(id);
  }
  
  renderModel() {
    
  }
  renderTimer() {
    console.log('rendering timer');
    if( this.state.timerStarted ) {
      this.timer();
      // return (
      //   <form className="form-inline" style={{display: 'inline-block'}}>
      //     <input className="form-control" type="text" placeholder="enter time" ref="time" 
      //       style={{display: 'inline-block'}}/>
      //     <button className="btn btn-default" onClick={this.inputTime.bind(this)}></button>
      //   </form>
          
      // )
      return (
        <span id="timer"
          style={{
            fontSize: "40px",
            marginLeft: "20px",
            border: "2px",
            borderRadius: "5px"
            
          }}>READY!
        </span>
      )
    }
    return null;
  }
  
  renderEnd() {
    if( this.state.end ) {
      console.log('times up');
    }
  }
  
  inputTime(event) {
    event.preventDefault();
    const time = this.refs.time.value;
    this.setState({
      timeInputted: time
    })
  }
  
  render() {
    
    return (
      <div
        style={{
          display: "inline-block",
          width: "60%"
        }}
      >
        <button
          className="btn btn-primary btn-lg"
          style={{
            display: "inline-block",
          }}
          onClick={ this.startTimer.bind(this) }

        >
          START!
        </button>
        
        { this.renderTimer() }
        { this.renderEnd() }
        { this.renderModel() }
        
        
      </div>
    )

  }

}