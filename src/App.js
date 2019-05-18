import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import Dashboard from './Dashboard';
import Header from './Components/Header'

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;