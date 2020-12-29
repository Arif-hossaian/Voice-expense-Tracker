import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "./components/context/context.jsx"

import { SpeechProvider } from '@speechly/react-client';


ReactDOM.render(

  <SpeechProvider appId= "7f574bd9-bbe5-40d0-b52a-8203da745985"  language ="en-US">

    <Provider>
      <App />
    </Provider>

  </SpeechProvider>,


  document.getElementById('root')
);


