import React from 'react'
import styled from 'styled-components';
import { Row, Col, Menu, Dropdown, Space } from 'antd';
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f7f7f7;
  color: #000000;
  text-align: center;
  line-height: 50px;
`

const Header = () => {
  const history = useHistory();
  const { user } = useSelector(state => state.user);
  function logoutHandler() {
    history.push('/login');
  }
  
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to="/mypage" >My page</NavLink>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => logoutHandler()}>
        Logout
      </Menu.Item>
    </Menu>
  )
  
  
  return (
    <StyledHeader>
        <Row justify="space-between" align="middle">
          <Col span={5}>로고자리</Col>

          {
            history.location.pathname == "/login" 
            ? null
            :
              <Col span={5}>
                <Space wrap>
                  <Dropdown.Button overlay={menu}>
                    { user.name }
                  </Dropdown.Button>
                </Space>
              </Col>
          }


        </Row>
    </StyledHeader>
  )
}

export default Header
