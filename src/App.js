import Counter from "./components/Counter";
import {Provider} from "react-redux";
// import{reducer} from "./redux";
// import { legacy_createStore as createStore} from 'redux';
import {store} from './redux'
import Todo from "./components/todo/Todo";
import "./App.css";


function App() {
  // const store = createStore(reducer)
  return (
    <div className="App">
      <Provider store={store}>
      <Counter/>
      <Todo/>
      </Provider>
    
      
    </div>
  );
}

export default App;

//store kurma adımları
//1.createStore() | redux
//2.provider() | react-redux
//3.consume