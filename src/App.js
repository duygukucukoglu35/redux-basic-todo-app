import Counter from "./components/Counter";
import {Provider} from "react-redux";
// import{reducer} from "./redux";
// import { legacy_createStore as createStore} from 'redux';
import {store} from './redux'


function App() {
  // const store = createStore(reducer)
  return (
    <div>
      <Provider store={store}>
      <Counter/>
      </Provider>
    
      
    </div>
  );
}

export default App;

//store kurma adımları
//1.createStore() | redux
//2.provider() | react-redux
//3.consume