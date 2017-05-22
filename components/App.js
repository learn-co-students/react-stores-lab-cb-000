import React from 'react';
import counterStore from '../stores/counterStore';
import actions from '../actions';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Your implementation here.
      counter: counterStore.getState()
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement(ev){
    ev.preventDefault();
    actions.decrement();
  }

  handleIncrement(ev){
    ev.preventDefault();
    actions.increment();
  }
  componentDidMount () {
    // Your implementation here.
    this.removeListener = counterStore.addListener((counter) => {
      this.setState({ counter })
    });
    this.setState(counterStore.getState());
  }
  componentWillUnmount () {
    // Your implementation here.
    this.removeListener();
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
