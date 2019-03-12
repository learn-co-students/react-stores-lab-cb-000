import counterStore from '../stores/counterStore.js'

function increment() {
  counterStore.increment() ;
}
function decrement() {
  counterStore.decrement() ;
}

export default {increment, decrement}
