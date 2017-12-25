import Store from './Store'
import actions from '../actions';
class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!

 constructor(){
   super();
   this.state = {
     counter: 0
   }
 }


  setState(state){

  }

  increment(){

  }

  decrement(){

  }


  getState(){
    return this.state;
  }
}

const counterStore = new CounterStore();

export default counterStore;
