import React from 'react';
import Header from './components/organisms/Header';
import Sidebar from './components/organisms/Sidebar';
import styled from 'styled-components/macro';

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const MainContentArea = styled.main`
  display: flex;
  flex-grow: 1;
`

function App() {
  return (
    <AppStyle>
      <Header />
      <MainContentArea>
        <Sidebar />
        <div>
          content
        </div>
      </MainContentArea>
    </AppStyle>
  );
}

export default App;
