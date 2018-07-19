import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { Row, Col } from 'reactstrap';
import SubmitForm from './SubmitForm';
import * as actions from '~/redux/merchants/actions';

class Edit extends Component {

  constructor () {
    super();
    this.state = {}
  }

  handleSubmit = values => {
    this.setState({
      disabled: true
    });
    this.props.actions.create(values);
    this.props.history.push('/merchants/');
  }

  render () {
    return (
      <Row className="merchant-edit">
        <Col>
          <h1>Add new Merchant</h1>
          <SubmitForm
            disabled={this.state.disabled}
            initialValues={{
              // id: 'bar'
            }}
            onSubmit={this.handleSubmit} />
        </Col>
      </Row>
    );
  }
}

export default connect(
    state => ({}),
    dispatch => ({
      actions: bindActionCreators(actions, dispatch)
    })
)(Edit);
