import counterStore from '../stores/counterStore'
// Your implementation here.
// Hint: We need two actions!
function increment(ev){
  counterStore.increment()
}

function decrement(ev){
  counterStore.decrement()
}

export default {
  increment,
  decrement
}
