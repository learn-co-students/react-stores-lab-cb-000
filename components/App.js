import React from 'react';
import Actions from '../actions/index.js'
import counterStore from '../stores/counterStore.js'

class App extends React.Component {
  constructor (props) {
    super(props);
    var counter = counterStore.getState()
    this.state = {
      counter: counter
    };
    this.handleInc = this.handleInc.bind(this) ;
    this.handleDec = this.handleDec.bind(this)
  }
  componentDidMount () {
    this.removeListener = counterStore.addListener((state) => {
      this.setState({state}) ;
    });
    this.setState(counterStore.getState());
  }
  componentWillUnmount () {
    this.removeListener() ;
  }
  handleInc(event) {
    event.preventDefault() ;
    Actions.increment() ;
  }
  handleDec(event) {
    event.preventDefault() ;
    Actions.decrement() ;
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button onClick={event => this.handleDec(event)} className='decrement'>
            -
          </button>
          <button onClick={event =>  this.handleInc(event)} className='increment'>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
