import React from 'react';
import Store from './Store';

class CounterStore extends Store{
  constructor(props){
    super(props);
    this.state = 0;
  }
  increment(){
    this.setState(this.getState() + 1);
  }

  decrement(){
    this.setState(this.getState() - 1);
  }

}

const counterStore = new CounterStore();

export default counterStore;