import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 15px 15px 15px 235px;
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Section = (props) => {

  const { children } = props;

  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}

export default Section
