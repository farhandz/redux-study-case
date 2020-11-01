import './App.css';
import  './globe.css'
import Navbar from './component/Navbar'
import cartItem from './cart-item' 
// store - store data, think of state
// reducer - funcion used to update state
import {createStore} from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'
import Listitem from './component/Listitem'




const initialStore = {
  count: 0,
  amount: 0,
  cart: cartItem,
  nama: 'farhan ammar dzakwan',
  total: 0
}

const store = createStore(reducer, initialStore)
function App() {
  return (
    <div className="asu">
      <Provider store = {store}>
          <Navbar />
          <Listitem  />
      </Provider>
    </div>
  );
}

export default App;
