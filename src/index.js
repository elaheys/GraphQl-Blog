import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme';

//style
import './styles/index.css';
import './styles/fonts.css';


const client = new ApolloClient({
  uri:'https://api-us-west-2.hygraph.com/v2/clik2n8m505wg01t76w1ifsqn/master',
  cache:new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
    
);


