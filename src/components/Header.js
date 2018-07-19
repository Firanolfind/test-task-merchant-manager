import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Row, Col, Form, Button, ButtonGroup, NavLink } from 'reactstrap';
import styles from './Header.scss';
import logo from '../logo.png';


const links = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/merchants',
    title: 'Merchants'
  },
  {
    path: '/merchants/add',
    title: 'Add New'
  }
]

class Header extends Component {
  render () {
    return (
      <Row className="header">
        <Col xs="12">
          <img src={''} className="logo" alt="logo" />
        </Col>
        <Col xs="12" tag="nav">
          <Form>
            <ButtonGroup tag="ul">
              {
                links.map((item, index) => (
                  <Button tag="li" key={index}>
                    <NavLink to={item.path} tag={RRNavLink} activeClassName="active">{item.title}</NavLink>
                  </Button>
                ))
              }
            </ButtonGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Header
