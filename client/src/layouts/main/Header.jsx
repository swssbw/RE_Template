import React from 'react'
import styled from 'styled-components';
import { Row, Col, Menu, Dropdown, Space } from 'antd';

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: #eee;
  color: #000000;
  text-align: center;
`

const menu = (
  <Menu>
    <Menu.Item key="1">
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      3rd menu item
    </Menu.Item>
  </Menu>

)

const Header = () => {
  return (
    <StyledHeader>
        <Row justify="space-between" align="middle">
          <Col span={5}>Header</Col>
          <Col span={5}>
            <Space wrap>
              <Dropdown.Button overlay={menu}>
                Dropdown
              </Dropdown.Button>
            </Space>
          </Col>
        </Row>
    </StyledHeader>
  )
}

export default Header
