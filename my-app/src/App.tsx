import React, {useEffect} from 'react';
import './App.css';
import OrderBookContainer from "./modules/OrderBook/OrderBookContainer";
import MySocket from "./utils/webSockets/MySocket";

function App() {
    useEffect(() => {
    },[]);

    //open connection here in the parent
  return (
    <div className="App">
        {/* not the greatest approach ^_^ */}
        <MySocket/>
        <OrderBookContainer/>
    </div>
  );
}

export default App;
