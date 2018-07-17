import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

class AddNew extends Component {
  render () {
    return (
      <Row className="merchant-list">
        <Col xs="12">
          add new
        </Col>
      </Row>
    );
  }
}

export default AddNew;
