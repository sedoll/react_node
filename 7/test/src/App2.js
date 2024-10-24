import { array } from 'prop-types';
import {useState, useEffect} from 'react';

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const url = "https://api.coinpaprika.com/v1/tickers?limit=5&quotes=USD,BTC,KRW"
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(json=>{
      console.log(json)
      setData(json)
      setLoading(false)
    })
  }, []) 
  return (
    <div className="App">
      {data.map((item)=><li key={item.id}>{item.rank}. {item.name} | BTC: {item.quotes.BTC.price.toFixed(7).toLocaleString()}BTC | USD: {item.quotes.USD.price.toFixed(3).toLocaleString()}$ | KRW: {item.quotes.KRW.price.toFixed(0).toLocaleString()}W</li>)}
    </div>
  );
}

export default App;
