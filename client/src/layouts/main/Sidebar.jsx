import React from 'react'
import styled from "styled-components";
import { Menu, } from 'antd';
import { NavLink, useHistory } from "react-router-dom";

const Aside = styled.div`
  position: absolute;
  height: 100%;
  width: 215px;
  background-color: #f5f5f5;
  color: #000;
  border-right: 1px solid #f5f5f5;
`

const Sidebar = () => {
  return (
    <Aside>
      <Menu defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <NavLink to="/test1">Option 1</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/test2">Option 2</NavLink>
        </Menu.Item>
        <Menu.SubMenu key="Monitoring" title="Option 3">
          <Menu.Item key="/Monitoring/DisplayAD">Sub 1</Menu.Item>
          <Menu.Item key="/Monitoring/SearchAD">Sub 2</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Aside>
  )
}

export default Sidebar
