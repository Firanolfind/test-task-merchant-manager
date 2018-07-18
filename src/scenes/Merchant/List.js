import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

import * as actions from '~/redux/merchants/actions';

class MerchantList extends Component {
  render () {
    return (
      <Row className="merchant-list">
        <Col xs="12">
          nothing
        </Col>
      </Row>
    );
  }
}

export default connect(
    state => ({
        items: state.merchants
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(MerchantList);
