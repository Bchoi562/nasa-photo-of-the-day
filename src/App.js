import React,{useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import Header from './header';
import Url from './url';
import Explanation from './explanation';
function App() {

  const [nasaData, setNasaData] = useState();
  // const [title, setTitle] = useState()
  // const [url, setUrl] = useState()
  // const [explanation, setExplanation] = useState()

 useEffect(()=>{
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=Q2Q7Hg06gpDC8LMMTKII3cz2EMsMa3fyZfnjFeuA&date=2020-11-04`)
    .then((res)=>{

      console.log(res.data);
      setNasaData(res.data);
      // setTitle(res.data.title);
      // setUrl(res.data.url);
      // setExplanation(res.data.explanation);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

 
 
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Header/>
      <Url />
      <Explanation/>
    </div>
  )


}

export default App;
