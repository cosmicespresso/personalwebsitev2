import React, {useState, useEffect} from 'react';
import dotenv from 'dotenv'; 
import ReactGA from 'react-ga';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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

  useEffect(() => {
        fetch(`${airtable_api_url}/${airtable_base}/${airtable_table}?sort%5B0%5D%5Bfield%5D=Index&sort%5B0%5D%5Bdirection%5D=asc`, {
            method: 'GET',
            "headers": { "Authorization": `Bearer ${process_api_key}` },
            "content-type": "application/json"
        })
            .then(res => res.json())
            .then((data) => {
                setAirtableData(data.records)
            })
        setIsLoading(false);
    }, [])

  return (
    <div className='App'>
      <div className='work'>
        {isLoading && <div>Loading....</div>}
        {airtableData !== undefined && airtableData.map( (project, i) => {
          return (
            <div className='section' key={i}> 
              <div className='name small'>{project.fields.Name}</div>
              <ReactMarkdown 
                className='field small' 
                children={project.fields.Content.includes('gif') ? `![name](${project.fields.Content})` : project.fields.Content} 
                remarkPlugins={[remarkGfm]}
                escapeHtml={false}
                />
            </div>
          )
         })
        }
      </div>
    </div>
  );
}

export default App;
