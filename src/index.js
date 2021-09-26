import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SEO from 'react-seo';

<SEO
  title={'kalli retzepi'}
  description={'personal website'}
  image={'https://raw.githubusercontent.com/Kallirroi/personalwebsitev2/master/public/favicon.ico'}
  pathname={'https://kalli-retzepi.com/'}
  twitterUsername={'@kallirroi'}
/>

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
