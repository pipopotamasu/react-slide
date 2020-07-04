import React from 'react';
import Header from './components/organisms/Header';
import Sidebar from './components/organisms/Sidebar';
import styled from 'styled-components/macro';

const MainContentArea = styled.main`
  display: flex;
`

function App() {
  return (
    <div className="App">
      <Header />
      <MainContentArea>
        <Sidebar />
        <div>
          content
        </div>
      </MainContentArea>
    </div>
  );
}

export default App;
