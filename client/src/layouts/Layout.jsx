import React from 'react'
import { Route } from 'react-router-dom';

const Layout = (props) => {
  
  const { layout : Layout , component : Component, ...rest } = props;

  return (
    <Route 
      {...rest}
      render = { (props) => (
          <Layout>
            <Component { ...props } />
          </Layout>
      )}
    />
  )
}

export default Layout
