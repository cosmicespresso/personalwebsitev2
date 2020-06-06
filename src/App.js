import React, {useState, useEffect} from 'react';
import dotenv from 'dotenv'; 
import ReactGA from 'react-ga';

import './App.css';

dotenv.config()
const process_api_key = process.env.REACT_APP_AIRTABLE_API_KEY;
const airtable_api_url = process.env.REACT_APP_AIRTABLE_API_URL;
const airtable_table = process.env.REACT_APP_AIRTABLE_TABLE;
const airtable_base = process.env.REACT_APP_AIRTABLE_BASE; 

function App() {
  ReactGA.initialize('UA-89607558-1', { standardImplementation: true });

  const [airtableData, setAirtableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isTable, setIsTable] = useState(true);

  useEffect(()=>{
    fetch(`${airtable_api_url}/${airtable_base}/${airtable_table}?sort%5B0%5D%5Bfield%5D=Start&sort%5B0%5D%5Bdirection%5D=desc`, {
       "headers": {"Authorization": `Bearer ${process_api_key}`}
    })
    .then(res => res.json())
    .then((data) => {
      setAirtableData(data.records)
    })
    setIsLoading(false);
  },[])

  return (
    <div className="App">
      <div className={isTable ? 'work' : 'work messy'}>
        <div className='buttons'>
          <header>Selected work</header>
          <div className='button' onClick={(e) => setIsTable(!isTable)}>{isTable ? '?' : 'oops'}</div>
        </div>
        {isLoading && <div>Loading....</div>}
        {airtableData !== undefined && airtableData.map( (project, i) => {
          return (
            project.fields.online ?
              <div className='project' key={i}> 
                <div className='field medium name'>{project.fields.Name}</div>
                <div className='field medium'>{project.fields.Theme}</div>
                <div className='field large'>{project.fields.Description}</div>
                <div className='field small right'>{project.fields.Start}</div>
                <div className='field small right'>{project.fields.URL ? <a href={project.fields.URL}>link</a> : ' '}</div>
              </div>
            : null
          )
         })
        }
      </div>

      <div className='section'>
        <header>About</header>
        
        <div className='interest'>I use code and design to build interactive interfaces and systems that resist biases and challenge paradigms. I am very interested in the history and politics of interfaces, decentralization, algorithmic fairness and transparent technology.</div>
      </div>


      {/*<div className='section'>
        <header>My path</header>
        <ul>
          <li>SP1 20 participant at the <a href="https://www.recurse.com" target="_blank" rel="noopener noreferrer">Recurse Center</a></li>
          <li>adjunct faculty at the <a href="https://dsi.sva.edu/faculty/kalli-retzepi/" target="_blank" rel="noopener noreferrer">Schoool for Visual Arts in NYC</a></li>
          <li>co-founder of <a href="https://foreignobjects.net/" target="_blank" rel="noopener noreferrer"> FOREIGN OBJECTS</a></li>
          <li>graduate student at the MIT Media Lab</li>
          <li>interaction engineer at <a href="https://www.interactivethings.com/">INTERACTIVE THINGS</a></li>
          <li>brain imaging researcher at Harvard Medical School</li>
        </ul>
      </div>*/}      

      <div className='section'>
        <header>Clients</header>
        include the Mozilla Foundation, the NOKIA BELL Labs, the Robert Wood Johnson Foundation, the MIT Civic Data Design Lab and the Harvard Visual Computing Group.
      </div>
      
      <div className='section color'> 
        <header>Contact</header>
        <p>me on <a href="https://www.are.na/kalli-retzepi/index" target="_blank" rel="noopener noreferrer">are.na</a>,  <a href="https://twitter.com/kallirroi" target="_blank" rel="noopener noreferrer">twitter</a>, and <a href="https://github.com/Kallirroi" target="_blank" rel="noopener noreferrer">github</a> or <a href="mailto:kalli.retzepi@gmail.com" target="_blank" rel="noopener noreferrer">email me</a>. CV and portfolio upon request.</p>
      </div>
    </div>
  );
}

export default App;
