import React,{useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import Header from './header';
import Url from './url';
import Explanation from './explanation';
import Title from "./Title";
function App() {

  const [nasaData, setNasaData] = useState();
  const [url, setUrl] = useState();
  const [explanation, setExplanation] = useState();
  const [title, setTitle] = useState();
 useEffect(()=>{
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=Q2Q7Hg06gpDC8LMMTKII3cz2EMsMa3fyZfnjFeuA&date=2020-11-04`)
    .then((res)=>{

      console.log(res.data);
      setNasaData(res.data);
      setUrl(res.data.url);
      setExplanation(res.data.explanation);
      setTitle(res.data.title);
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
      <Title title={title}/>
      <Url url={url}/>
      <Explanation explanation={explanation}/>
    </div>
  )


}

export default App;
