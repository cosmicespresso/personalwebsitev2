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
    fetch(`${airtable_api_url}/${airtable_base}/${airtable_table}?sort%5B0%5D%5Bfield%5D=Index&sort%5B0%5D%5Bdirection%5D=asc`, {
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
                <div className='field medium'>{project.fields.technology}</div>
                <div className='field small '>{project.fields.Start}</div>
                <div className='field small right'>{project.fields.URL ? <a href={project.fields.URL}>link</a> : ' '}</div>
              </div>
            : null
          )
         })
        }
      </div>

      <div className='section'>
        <header>About</header>
        
        <div className='interest'>I use code and design to build interfaces and systems that resist biases and challenge paradigms. I am very interested in the history and politics of interfaces, decentralization and algorithmic fairness.</div>
      </div>
      
      <div className='section color'> 
        <header>Contact</header>
        <p>me on <a href="https://www.are.na/kalli-retzepi/index" target="_blank" rel="noopener noreferrer">are.na</a>,  <a href="https://twitter.com/kallirroi" target="_blank" rel="noopener noreferrer">twitter</a>, and <a href="https://github.com/Kallirroi" target="_blank" rel="noopener noreferrer">github</a> or <a href="mailto:kalli.retzepi@gmail.com" target="_blank" rel="noopener noreferrer">email me</a>. CV and portfolio upon request.</p>
      </div>
    </div>
  );
}

export default App;
