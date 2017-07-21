import React from 'react';
import {Col} from 'react-bootstrap';

const topBarStyle = {
  height: 64,
  backgroundColor: 'white',
  boxShadow: '0 1px 1px rgba(0, 0, 0, .05)',
  marginBottom: 20,
  display: 'flex',
  justifyContent: 'center'
}

const brandStyle = {
  marginTop: 15
}

const TopBar = () => (
  <Col xs={12} style={topBarStyle}>
    <h1 style={brandStyle}><strong> SWITCH </strong> Mobile </h1>
  </Col>
);

export default TopBar;
