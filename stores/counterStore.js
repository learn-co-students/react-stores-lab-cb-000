import Store from './Store'

class CounterStore extends Store {
  constructor() {
    super(0)
  }

  increment() {
    const newCount = this.getState() + 1
    this.setState(newCount)
  }

  decrement() {
    const newCount = this.getState() - 1
    this.setState(newCount)
  }
}

const counterStore = new CounterStore();

export default counterStore;
