import React from 'react';
import Container from './layout/Container';
import Sidebar from './layout/Sidebar';
import Content from './layout/Content';
import Timeline from './layout/Timeline';



const App = () => {
  return (
    <Container >
      <Sidebar />
      <Content />
      <Timeline />
    </Container>

  )
}

export default App



