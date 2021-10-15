import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';


const Contents = styled.div`
  margin: 100px auto;
  width: 400px;
  border: 1px solid #eee;
  padding: 50px;
`;

const Mypage = () => {

  const { user } = useSelector(state => state.user);

  return (
    <Contents>
      {user.name}
      {user.username}
    </Contents>
  )
}

export default Mypage
