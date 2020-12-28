import './App.css';
import React, {useState, useEffect} from 'react'
import Description from './components/Description';
import PicOfTheDay from './components/PicOfTheDay';
import LeftRightButtons from './components/LeftRightButtons';
import SearchForm from './components/SearchForm';



function App() {

  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/")
  const datenow = `${year}-${month}-${day}`

  const [date, setDate] = useState(datenow);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    getData();
  }, [date])

  async function getData(){
    const API = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`;
    const response = await fetch(API);
    const json = await response.json();
    setData(json)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setDate(search);
    setSearch("");
  }

  const updateDateLeftArrowButton = () =>{
    
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate());
    newDate = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`
    setDate(newDate)
  }

  const updateDateRightArrowButton = () =>{
    
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate()+2);
    newDate = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`
    setDate(newDate)
  }

  return (
    <div className="App">
      <div className="title">
        <h1>NASA PICTURE OF THE DAY</h1>
      </div>
      <div className="container">
        <div className="col1">
          <Description data={data}/>
          <SearchForm getSearch={getSearch} updateSearch={updateSearch}/>
          <LeftRightButtons updateDateLeftArrowButton={updateDateLeftArrowButton} updateDateRightArrowButton={updateDateRightArrowButton} date={date}/>
        </div>
        <div className="col2">
          <PicOfTheDay data={data}/> 
        </div>
      </div>
      
    </div>
  );
}

export default App;
