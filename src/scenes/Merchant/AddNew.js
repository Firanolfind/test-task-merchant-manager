import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { Row, Col } from 'reactstrap';
import SubmitForm from './SubmitForm';
import * as actions from '~/redux/merchants/actions';

class Edit extends Component {
  constructor() {
    super();
    this.state = {}
  }

  handleSubmit = values => {
    this.setState({ disabled: true });
    this.props.actions.create(values);
  }

  componentWillReceiveProps(props) {
    if(props.temp.__created) {
      props.history.push(`/merchants/${props.temp.id}`);
    }
  }

  componentWillUnmount() {
    this.props.actions.resetSingle();
  }

  render () {
    const { error } = this.props;

    return (
      <Row className="merchant-addnew">
        <Col>
          <h1>Add new Merchant</h1>
          <SubmitForm
            initialValues={{
              bids: []
            }}
            errorProp={error}
            disabled={this.state.disabled}
            onSubmit={this.handleSubmit} />
        </Col>
      </Row>
    );
  }
}

export default connect(
  state => ({
    temp: state.merchants.temp,
    error: state.merchants.error
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Edit);
