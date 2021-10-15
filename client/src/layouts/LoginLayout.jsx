import React from 'react'
import Header from './main/Header';
import styled from 'styled-components';

const Contents = styled.div`
  height: 100%;
  width: 100%;
`

const LoginLayout = (props) => {

  const { children } = props;
  
  return (
    <Contents>
      <Header />
      {children}
    </Contents>
  )
}

export default LoginLayout
