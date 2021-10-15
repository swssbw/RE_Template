import React from 'react'
import Header from './main/Header';
import Sidebar from './main/Sidebar';
import Section from './main/Section';
import styled from 'styled-components';

const Contents = styled.div`
  height: 100%;
  width: 100%;
`

const MainLayout = (props) => {

  const { children } = props;

  return (
    <Contents>
      <Header />
      <Sidebar />
      <Section>{children}</Section>
    </Contents>
  )
}

export default MainLayout
