import Store from './Store.js'

class CounterStore extends Store {
  constructor() {
  super(0) ;
  }
  increment() {
    var newState = this.getState() + 1 ;
    this.setState(newState) ;
  }
  decrement() {
    var newState = this.getState() - 1 ;
    this.setState(newState) ;
  }
}

const counterStore = new CounterStore();

export default counterStore;
